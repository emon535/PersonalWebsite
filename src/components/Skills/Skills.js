import React, { Component } from "react";
import "./Skills.css";
import { IconContext } from "react-icons";

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
        <h1>Skills</h1>
        <h3 className="sub-head">Programming Language and Tools</h3>
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
      </div>
    );
  }
}
