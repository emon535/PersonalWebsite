import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import ABOUT_DATA from "./../../constants/about_data";
import "./About.css";
import { IconContext } from "react-icons";
import {
  FaLinkedin,
  FaFacebook,
  FaGithub,
  FaHackerrank,
  FaNewspaper
} from "react-icons/fa";

export default class About extends Component {
  _getSocial() {
    return (
      <Row className="social">
        <IconContext.Provider value={{ size: "3em" }}>
          <Row>
            <Col>
              <a target="_blank" href={ABOUT_DATA.linkedin}>
                <FaLinkedin className="icons" />
              </a>
              <a target="_blank" href={ABOUT_DATA.facebook}>
                <FaFacebook className="icons" />
              </a>
              <a target="_blank" href={ABOUT_DATA.github}>
                <FaGithub className="icons" />
              </a>
              <a target="_blank" href={ABOUT_DATA.hackerRank}>
                <FaHackerrank className="icons" />
              </a>
              <a target="_blank" href={ABOUT_DATA.news}>
                <FaNewspaper className="icons" />
              </a>
            </Col>
          </Row>
        </IconContext.Provider>
      </Row>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="about">
          <Col className="about-description">
            <Row className="about-body">
              <h1 className="disp">
                FOYSAL AHMED <span>EMON</span>
              </h1>
              <h3>
                190 EAST KAZIPARA, KAFRUL, DHAKA <br /> (+880) 1520100178
                <br /> <span>EMON535@GMAIL.COM</span>
              </h3>
              <h5>{ABOUT_DATA.coverLetter}</h5>
              <hr />
            </Row>

            {this._getSocial()}
          </Col>
        </div>
      </React.Fragment>
    );
  }
}
