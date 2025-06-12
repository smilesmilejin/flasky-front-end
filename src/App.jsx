import CatList from './components/CatList.jsx';
import './App.css';
import DATA from './data.js';
import { useState } from 'react';

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
  const [catData, setCatData] = useState(DATA);

  const totalPets = calculateTotalPets(catData);

  const petCat = (id) => {
    console.log(`${id} pur...`);
    // call the set state of the data
    // setState(value => ())
      // Withing the update function
        // copy the existing array, loooking for the matching cat id
        // if the id matches, create a new record with update count
        // if not , reuse the exisitng record

    // map makes a new copy, and let use to run some logic
    // DATA = DATA .map()

    // catData is diffeerrnt than catData previous, there is jsut a parameter
    setCatData(catData => {
      return catData.map(cat => {
        if (cat.id === id) {
          // shallow copy, use spread operator
          return {...cat, petCount: cat.petCount + 1};
        } else {
          return cat;
        }
      });
    });
  
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

  const removeCat = (id) => {
    setCatData(catData => {
      return catData.filter (cat => {
        return cat.id !== id;
      });
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
