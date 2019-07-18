import React from 'react';
import './App.css';
import cv from './resources/foysal_ahmed_emon_cv_23june.pdf'
import Protfollio from './components/Protfollio/Protfollio';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <div className="prot-container">
          <Protfollio />
        </div>
        <br />
        <About />
      </div>
    </div>
  );
}

export default App;
