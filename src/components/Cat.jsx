import PropTypes from 'prop-types';
// import { useState} from 'react';

const Cat = ({id, name, color, personality, caretaker, petCount, onPet, onUnregister}) => {

  // const [petCount, setPetCount] = useState(0);

  // const increasePets = () => {
  //     setPetCount((prevPetCount) => prevPetCount + 1);
  // };

  // const handlePetCat = () => {
  //   increasePets();
  // };


  return (
    <>
        <li className='cat'>
            <h2>id: {id} </h2>
            <h2>Name: {name}</h2>
            <h2>Color: {color}</h2>
            <h2>Personality: {personality}</h2>
            <h2>Caretaker: {caretaker}</h2>
            <h2># of Pets: {petCount}</h2>
          
            {/* Both works */}
            {/* <button onClick={increasePets}>Pet</button> */}
            <button onClick={()=> onPet(id)}>Pet</button>
            <button onClick={()=> onUnregister(id)}>Unregister</button>
        </li>
    </>
  );
};

Cat.propTypes = {
  id:PropTypes.number.isRequired,
  name:PropTypes.string.isRequired,
  caretaker:PropTypes.string.isRequired,
  color:PropTypes.string.isRequired,
  personality:PropTypes.string.isRequired,
  petCount: PropTypes.number.isRequired,
  onPet: PropTypes.func.isRequired,
  onUnregister: PropTypes.func.isRequired,
};

export default Cat;