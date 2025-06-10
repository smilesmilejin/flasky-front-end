import CatList from './components/CatList.jsx';
import DATA from './data.json';
import './App.css';

function App() {
  return (
    <>
      <CatList catData={DATA}/>
    </>
  );
}

export default App;
