import logo from './logo.svg';
import './App.css';
import {Characters} from './components/Characters';
import { useEffect, useState } from 'react';

function App() {
  const [characters, setCharacters] = useState([]); 

  function getCharacters(pageNumber =1){

    const res = fetch('https://rickandmortyapi.com/api/character/?page=19')
                .then(response => response.json()) 
                .then(({results}) => results) 
                .catch(() => []);

                console.log('Res = ',res);
                return res;

  }

  async function consoleCharacters(){
    const resp = await  getCharacters();
    console.log('Resp = ',resp);

    setCharacters(resp);
  }


  useEffect(() =>{
    consoleCharacters();
  },[]); 

  return (
    <div className="App">
      <header className="Header">
        <img src="/img/logo.png" alt='Logo' className='Logo'/>
        <h1 className='Terms'>Terms + Conditions</h1>

      </header>
      <div className='Hero'>
        <h2 className='Hero-title'>Rick and Morty</h2>
        <h2 className='Hero-subtitle'>See all the characters.</h2>
        <h2 className='Hero-subtitle'>And more.</h2>

      </div>
      <main>
      <h2 className='main-title'>Characters List</h2>
        <hr className='custom-hr'></hr>
        <div className='card-container'>
        {
          (characters && characters.length > 0) && characters.map(character => (
            <Characters character={character}/>
          ))
        }
        </div>
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;