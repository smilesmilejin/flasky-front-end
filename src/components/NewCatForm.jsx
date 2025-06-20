import { useState} from 'react';

const kDefaultFormState = {
    name:'',
    personality: '', 
    color: '',
};

const NewCatForm = ({onPostCat}) => {
    const [formData, setFormData] = useState(kDefaultFormState);
    // const [name, setName]= useState(''); // when it first uploaded the name will be passed to input value ={name"}
    // const [personality, setPersonality] = useState('');
    // const [color, setColor] = useState('');


    const handelSubmit = (event) => {
        console.log('submitted!');
        event.preventDefault(); // Prevents the default behavior of an event. Commonly used in form submissions or link clicks to stop the page from reloading or navigating away.
        // const newCat = {
        //     name, // key will be the variable name, value will be value
        //     // personality: '',
        //     // color:'',
        //     personality,
        //     color,
        // };

        // onPostCat(newCat);
        onPostCat(formData);

        // reset the form
        // setName('');
        // setPersonality('');
        // setColor('');
        setFormData(kDefaultFormState);
    };

    // const handleChange = (event) => { // why do we need that event
    //     console.log(event.target.value); 
    //     setName(event.target.value); // get value from user input and change the state of Name
    // };

    const handleChange = (event) => { // why do we need that event
        console.log(event.target); 
        const inputName = event.target.name;
        const inputValue = event.target.value;

        setFormData (formData => {
            return {...formData, [inputName]:inputValue};
        });

    };

    // const handleName = (event) => { // why do we need that event
    //     console.log(event.target.value); 
    //     setName(event.target.value); // get value from user input and change the state of Name
    // };
    // const handlePersonality = (event) => { // why do we need that event
    //     console.log(event.target.value); 
    //     setPersonality(event.target.value); // get value from user input and change the state of Name
    // };

    // const handleColor = (event) => { // why do we need that event
    //     console.log(event.target.value); 
    //     setColor(event.target.value); // get value from user input and change the state of Name
    // };

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
        // <div>NewCatForm</div>
        <form onSubmit={handelSubmit}>
            <div>
                <label htmlFor='input-name'>Cat Name: </label>
                {/* <input 
                    // onChange={handleName}
                    onChange={handleChange} 
                    type='text' 
                    id='input-name' 
                    // name usually will be used to query 
                    name='name' 
                    // value={name}
                    value={formData.name}
                />  */}
                {makeControlledInput('name')} 
            </div>
            <div>
                <label htmlFor='input-personality'>Personality: </label>
                {/* <input 
                    // onChange={handlePersonality}
                    onChange={handleChange}
                    type='text' 
                    id='input-personality' 
                    name='personality' 
                    // value={personality}
                    value={formData.personality}
                /> */}
                {makeControlledInput('personality')}
            </div>
            <div>
                <label htmlFor='input-color'>Color: </label>
                {/* <input 
                    // onChange={handleColor}
                    onChange={handleChange}
                    type='text' 
                    id='input-color' 
                    name='color' 
                    // value={color}
                    value={formData.color}
                /> */}
                {makeControlledInput('color')}                 
            </div>
            <div>
                <button className='form-button'>Add Cat</button>
            </div>
        </form>
    );
};

export default NewCatForm;