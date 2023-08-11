import React from 'react';
//import { Counter } from './features/counter/Counter';
import './App.css';
import AstroInfo from './features/AstroViews/AstroInfo';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className='page-title'>
          Astrology Birthday</h1>
        <p>A landing page for Indian Astrology chart, Moonphase, and Weather from your birthdate!</p>
      </header>

      <AstroInfo />

      <footer className='copyright'>
        <p>
          <a href="https://github.com/fiddle-leaf" alt="Github page">
            fiddle-leaf
          </a> &copy; 2023.
        </p>
      </footer>
    </div>
  );
}

export default App;
