import axios from 'axios';
import CatList from './components/CatList.jsx';
import NewCatForm from './components/NewCatForm.jsx';
import './App.css';
import { useState, useEffect } from 'react';

const kBaseUrl = 'http://localhost:5000';

const postCatApi = (newCatData) => {
  return axios.post(`${kBaseUrl}/cats`, newCatData)
    .then( response => {
      return convertFromApi(response.data);
    })
    .catch( error => {
      console.log(error);
    });
};

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
  return catData.reduce((total, cat) => {
    return total + cat.petCount;
  }, 0);
};

function App() {
  const [catData, setCatData] = useState([]);
  const totalPets = calculateTotalPets(catData);

  const getAllCats = () => {
    return getAllCatsApi()
      .then(cats => setCatData(cats));
  };

  useEffect(() => {
    getAllCats();
  }, []);

  const petCat = (id) => {
    // Call the set state of the data
    // setState(value => ())
      // within the update function
        // copy the existing array, looking for the matching cat id
        // if the id matches, create a new record with updated count
        // if not, reuse the existing record
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
    
    // updating state after petting a cat with hardcoded data
    // setCatData(catData => {
    //   return catData.map(cat => {
    //     if (cat.id === id) {
    //       return {...cat, petCount: cat.petCount + 1};
    //     } else {
    //       return cat;
    //     }
    //   });
    // });
  };

  const removeCat = id => {
    return removeCatApi(id)
    .then(() => {
      setCatData(catData => catData.filter(cat => {
        return cat.id !== id;
      }));
    });
  };

  const postCat = (newCatData) => {
    postCatApi(newCatData)
      .then( newCat => {
        setCatData(prevCats => [newCat, ...prevCats]);
      });
  };

  return (
    <div className='container'>
      <h2>Total number of Pets across all cats: {totalPets}</h2>
      <CatList
        catData={catData}
        onPetCat={petCat} 
        onUnregisterCat={removeCat}
        />
      <NewCatForm 
        onPostCat={postCat}
        />
    </div>
  );
}

export default App;
