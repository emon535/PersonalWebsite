import React from "react";
import logo from "./images/phoyo_circle.png";
import "./App.css";
import cv from "./resources/foysal_ahmed_emon_cv_23june.pdf";
import Protfollio from "./components/Protfollio/Protfollio";
import About from "./components/About/About";
import Menu from "./components/SideMenu/Menu";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <br />
        <Menu />
        <Protfollio />
        <About />
      </div>
    </div>
  );
}

export default App;
