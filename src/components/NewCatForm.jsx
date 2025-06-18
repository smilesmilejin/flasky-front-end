import { useState } from 'react';
import PropTypes from 'prop-types';

const NewCatForm = ({ onPostCat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    const newCat = {
      name,
      personality: '',
      color: '',
    };

    onPostCat(newCat);
    setName('');
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor='input-name'>Cat Name: </label>
            <input 
            onChange={handleChange} 
            type='text' 
            id='input-name' 
            name='name' 
            value={name}
            />
        </div>
        <div>
            <button className='form-button'>Add Cat</button>
        </div>
    </form>
  );
};

NewCatForm.propTypes = {
    onPostCat: PropTypes.func.isRequired
};

export default NewCatForm;