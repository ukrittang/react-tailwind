import React from 'react';
import logo from './logo.svg';
import './App.css';
import './tailwind.output.css';

function App() {
  return (
    <div className="App">
      <header className="App-header text-red-500">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
