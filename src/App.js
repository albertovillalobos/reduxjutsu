import React from 'react';
import { useDispatch } from 'react-redux';
import { useShuriken, addShuriken, removeShuriken, clearShuriken, setShuriken } from './ducks/shuriken';
import { useKunai, addKunai, removeKunai, clearKunai, setKunai } from './ducks/kunai';
import { useAllWeapons } from './ducks/inventory';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const dispatch = useDispatch();
  const shuriken = useShuriken();
  const kunai = useKunai();
  const allWeapons = useAllWeapons();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Shuriken: <code>{shuriken}</code>
        </p>
        <button onClick={() => dispatch(addShuriken())}>Add</button>
        <button onClick={() => dispatch(removeShuriken())}>Remove</button>
        <button onClick={() => dispatch(clearShuriken())}>Clear</button>
        <button onClick={() => dispatch(setShuriken(10))}>Cheat: Set 10 Shuriken</button>
        <p>Kunai: <code>{kunai}</code></p>
        <button onClick={() => dispatch(addKunai())}>Add</button>
        <button onClick={() => dispatch(removeKunai())}>Remove</button>
        <button onClick={() => dispatch(clearKunai())}>Clear</button>
        <button onClick={() => dispatch(setKunai(10))}>Cheat: Set 10 Kunai</button>
        <p>All Weapons: <code>{allWeapons}</code></p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
