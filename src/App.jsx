import CatList from './components/CatList.jsx';
import './App.css';
import DATA from './data.js';

function App() {
  console.log(DATA);

  return (
    <>
      <CatList catData={DATA}/>
    </>
  );
}

export default App;
