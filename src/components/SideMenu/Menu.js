import React, { Component } from "react";
import "./Menu.css";
import { Link } from "react-scroll";

export default class Menu extends Component {
  render() {
    return (
      <div className="menu">
        <ul>
          <Link
            activeClass="active"
            to="target"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Welcome
          </Link>

          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            About
          </Link>

          <Link
            activeClass="active"
            to="target"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Academy
          </Link>

          <Link
            activeClass="active"
            to="target"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            onSetActive={this.handleSetActive}
            onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Projects
          </Link>
        </ul>
      </div>
    );
  }
}
