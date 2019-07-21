import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-scroll";
import my_photo from "./../../images/photo.png";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <div className="image-brand">
          <img src={my_photo} />
        </div>
        <ul>
          <Link
            className="link"
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            ABOUT
          </Link>
          <br />
          <Link
            className="link"
            activeClass="active"
            to="experience"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            EXPERIENCE
          </Link>
          <br />
          <Link
            className="link"
            activeClass="active"
            to="education"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            EDUCATION
          </Link>
          <br />
          <Link
            className="link"
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            SKILLS
          </Link>
          <br />
          <Link
            className="link"
            activeClass="active"
            to="interest"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            INTERESTS
          </Link>
          <br />
          <Link
            className="link"
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={0}
            duration={500}
            delay={0}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            PROJECTS
          </Link>
          <br />
        </ul>
      </div>
    );
  }
}
