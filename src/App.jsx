import CatList from './components/CatList.jsx';
import './App.css';
// import DATA from './data.js';
import axios from 'axios';
import { useState, useEffect} from 'react';
// import { useEffect } from 'react';

const kBaseUrl = 'http://127.0.0.1:5000';

const getAllCatsApi = () => {
  return axios.get(`${kBaseUrl}/cats`)
    .then( response => {
      return response.data.map(convertFromApi);
    })
    .catch( error => {
      console.log(error);
    });
};

const convertFromApi = (apiCat) => {
  // destructure cat and create variables
  // use variables to create a new cat object that has petCount as the name of the attribute
  const { id, name, color, personality, pet_count, caretaker } = apiCat;
  const newCat = {id, name, color, personality, petCount: pet_count, caretaker};
  return newCat;
};

const petCatApi = (id) => {
  return axios.patch(`${kBaseUrl}/cats/${id}/pet`)
    .then(response => {
      return convertFromApi(response.data);
    })
  .catch(error => {
    console.log(error);
  });
};

const removeCatApi = (id) => {
  return axios.delete(`${kBaseUrl}/cats/${id}`)
    .catch(error => {
      console.log(error);
    });
};

const calculateTotalPets = (catData) => {
  // let totalPets = 0;
  // for (const cat of catData) {
  //   totalPets += cat.petCount;
  // }
  // return totalPets;
  return catData.reduce((total, cat)=> {
    return total + cat.petCount;
  }, 0);
};

function App() {
  // console.log(DATA);
  const [catData, setCatData] = useState([]);
  // const [catData, setCatData] = useState(DATA);

  const totalPets = calculateTotalPets(catData);

  const getAllCats = ()=> {
    // invode api helper to call backend
    // use results to update state
    return getAllCatsApi()
      .then(cats => setCatData(cats));
  };

    useEffect(() => {
      getAllCats();
    }, []);

    const petCat = (id) => {
      console.log(`${id} pur...`);
      return petCatApi(id)
        .then(catResult => {
          setCatData(catData => catData.map(cat => {
            if (cat.id === catResult.id) {
              return catResult;
            } else {
              return cat;
            }
          }));
        });

    // call the set state of the data
    // setState(value => ())
      // Withing the update function
        // copy the existing array, loooking for the matching cat id
        // if the id matches, create a new record with update count
        // if not , reuse the exisitng record

    // map makes a new copy, and let use to run some logic
    // DATA = DATA .map()

    // catData is diffeerrnt than catData previous, there is jsut a parameter
    // setCatData(catData => {
    //   return catData.map(cat => {
    //     if (cat.id === id) {
    //       // shallow copy, use spread operator
    //       return {...cat, petCount: cat.petCount + 1};
    //     } else {
    //       return cat;
    //     }
    //   });
    // });
  
    // for (const cat of catData) {
    //   if (cat.id === id) {
    //     cat.petCount += 1;
    //   }
    // }
  };

  // let totalPets = 0;
  // for (const cat of catData) {
  //   totalPets += cat.petCount;
  // }

  // const removeCat = (id) => {
  //   setCatData(catData => {
  //     return catData.filter (cat => {
  //       return cat.id !== id;
  //     });
  //   });
  // };

  const removeCat = id => {
    return removeCatApi(id)
    .then(() => {
      setCatData(catData => catData.filter(cat => {
        return cat.id !== id;
      }));
    });
  };
  return (
    <>
    <h2>Total number of Pets across all cats: {totalPets}</h2>
      <CatList catData={catData} onPetCat={petCat} onUnregisterCat = {removeCat}/>
    </>
  );
}

export default App;
