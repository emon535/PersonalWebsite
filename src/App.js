import React from "react";
import "./App.css";
import cv from "./resources/foysal_ahmed_emon_cv_23june.pdf";
import Protfollio from "./components/Protfollio/Protfollio";
import About from "./components/About/About";
import Menu from "./components/SideMenu/Menu";
import { Row, Col } from "reactstrap";
import Education from "./components/Education/Education";
import Experiences from "./components/Experience/Experiences";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <div className="App-body">
        <Row>
          <Col sm={3}>
            <Menu />
          </Col>
          <Col sm={9}>
            <About />
            <Experiences />
            <Education />
            <Skills />
            <Protfollio />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
