import React from 'react';
import logo from './images/phoyo_circle.png';
import './App.css';
import cv from './resources/foysal_ahmed_emon_cv_23june.pdf'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="App-body">
        <br></br>
        Welcome <code>to</code> my Site.
          <br></br>
        <small>Download the <a href={cv}>CV </a></small>
      </div>
    </div >
  );
}

export default App;
