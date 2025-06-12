import CatList from './components/CatList.jsx';
import DATA from './data.json';
import './App.css';
import { useState } from 'react';

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
  const [catData, setCatData] = useState(DATA);
  const totalPets = calculateTotalPets(catData);

  const petCat = (id) => {
    // Call the set state of the data
    // setState(value => ())
      // within the update function
        // copy the existing array, looking for the matching cat id
        // if the id matches, create a new record with updated count
        // if not, reuse the existing record

    setCatData(catData => {
      return catData.map(cat => {
        if (cat.id === id) {
          return {...cat, petCount: cat.petCount + 1};
        } else {
          return cat;
        }
      });
    });
  };

  const removeCat = (id) => {
    setCatData(catData => {
      return catData.filter(cat => {
        return cat.id !== id;
      });
    });
  };

  return (
    <>
      <h2>Total number of Pets across all cats: {totalPets}</h2>
      <CatList
        catData={catData}
        onPetCat={petCat} 
        onUnregisterCat={removeCat}
        />
    </>
  );
}

export default App;
