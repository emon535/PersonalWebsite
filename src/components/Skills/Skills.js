import React, { Component } from "react";
import "./Skills.css";
import { IconContext } from "react-icons";
import { Row, Col } from "reactstrap";

import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJsSquare,
  FaNodeJs,
  FaNpm,
  FaJenkins,
  FaCss3Alt,
  FaSass,
  FaGit,
  FaTerminal,
  FaAws,
  FaPython,
  FaFlask,
  FaJira,
  FaBitbucket
} from "react-icons/fa";

export default class Skills extends Component {
  render() {
    return (
      <div className="skills">
        <Col className="skills-description">
          <Row className="skills-body">
            <Col>
              <h1 className="disp">SKILLS</h1>
            </Col>
          </Row>
          <Row>
            <Col>
              <IconContext.Provider value={{ size: "3em" }}>
                <FaHtml5 className="icons" />
                <FaCss3 className="icons" />
                <FaCss3Alt className="icons" />
                <FaJsSquare className="icons" />
                <FaReact className="icons" />
                <FaNodeJs className="icons" />
                <FaNpm className="icons" />
                <FaJenkins className="icons" />
                <FaSass className="icons" />
                <FaTerminal className="icons" />
                <FaGit className="icons" />
                <FaAws className="icons" />
                <FaPython className="icons" />
                <FaFlask className="icons" />
                <FaJira className="icons" />
              </IconContext.Provider>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
