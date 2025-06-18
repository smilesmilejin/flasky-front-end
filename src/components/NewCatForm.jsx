import { useState} from 'react';


const NewCatForm = ({onPostCat}) => {
    const [name, setName]= useState(''); // when it first uploaded the name will be passed to input value ={name"}

    const handelSubmit = (event) => {
        console.log('submitted!');
        event.preventDefault(); // Prevents the default behavior of an event. Commonly used in form submissions or link clicks to stop the page from reloading or navigating away.
        const newCat = {
            name, // key will be the variable name, value will be value
            personality: '',
            color:'',
        };

        onPostCat(newCat);

        // reset the form
        setName('');
    };

    const handleChange = (event) => { // why do we need that event
        console.log(event.target.value); 
        setName(event.target.value); // get value from user input and change the state of Name
    };

    return (
        // <div>NewCatForm</div>
        <form onSubmit={handelSubmit}>
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

export default NewCatForm;