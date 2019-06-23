import React, { Component } from "react";
import my_photo from "./../../images/photo_grayscale.jpg";
import { Row, Col } from "reactstrap";
import ABOUT_DATA from "./../../constants/about_data";
import "./About.css";
import { IconContext } from "react-icons";
import { FaLinkedin, FaFacebook, FaGithub, FaHackerrank, FaNewspaper } from "react-icons/fa";

export default class About extends Component {
  _getSocial() {
    return (
      <Row className="social">
        <Col>
          <IconContext.Provider value={{ size: "2em" }}>
            <Row>
              <h5 className="icons-heading">Checkout the social links:</h5>
              <Col>
                <a target="_blank" href={ABOUT_DATA.linkedin}>
                  <FaLinkedin className="icons" />
                </a>
                <a target="_blank" href={ABOUT_DATA.facebook}>
                  <FaFacebook className="icons" />
                </a>
                <a  target="_blank" href={ABOUT_DATA.github}>
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
        </Col>
      </Row>
    );
  }
  render() {
    return (
      <React.Fragment>
        <div className="about-me">
          <Row>
            <Col sm={4}>
              <img src={my_photo} />
            </Col>
            <Col className="about-description">
              <h5>Hello, I am {ABOUT_DATA.Name} !</h5>
              <small>{ABOUT_DATA.coverLetter}</small>
              {this._getSocial()}
              <hr />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
}
