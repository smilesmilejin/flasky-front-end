import { useState } from 'react';
import PropTypes from 'prop-types';

const kDefaultFormState = {
  name: '',
  personality: '',
  color: '',
};

const NewCatForm = ({ onPostCat }) => {
  const [formData, setFormData] = useState(kDefaultFormState);

  const handleSubmit = (event) => {
    event.preventDefault();

    onPostCat(formData);
    setFormData(kDefaultFormState);
  };

  const handleChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;

    setFormData(formData => {
      return { ...formData, [inputName]: inputValue };
    });
  };

  const makeControlledInput = (inputName) => {
    return <input 
      onChange={handleChange} 
      type='text' 
      id={`input-${inputName}`}
      name={inputName}
      value={formData[inputName]}
      />;
  };

  return (
    <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor='input-name'>Cat Name: </label>
            { makeControlledInput('name') }
            </div>
            <div>
            <label htmlFor='input-personality'>Personality: </label>
            { makeControlledInput('personality') }
            </div>
            <div>
            <label htmlFor='input-color'>Color: </label>
            { makeControlledInput('color') }
            </div>
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