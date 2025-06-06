// Component returns JSX object
// The component name should start with capital
import Cat from './Cat.jsx';

const CatList = () => {
    // Could only have one parent
    // Wrap it in one parent
    return (
        // empty: fragment, same effect as the document not grouped
        // <></> shorthand for <Fragment></Fragment>
        // https://react.dev/reference/react/Fragment#fragment
        <>
            <h1>Cat List</h1>
            <ul>
                <Cat />
                <Cat />
                <Cat />
                <Cat />
            </ul>
        </>

    );
};

// export the function so we could use it in other file
// default is not required, default export
// put export before function also works

// Default is handy when we have a single function or object we want to export from a file.
// As an example of many exports, take a look at the  adagrams.js  file from the JS-Adagrams project! 
// We have many functions that needed to be exported for the tests, 
// so each function had  export  in front of the function definitions.

export default CatList;