import React, { Component } from "react";
import "./Education.css";
import { Row, Col } from "reactstrap";
import ju from "./../../images/ju.jpg";
import sust from "./../../images/sust.png";
import dc from "./../../images/dc.jpg";
export default class Education extends Component {
  render() {
    return (
      <div className="education">
        <Col className="experience-description">
          <Row className="experience-body">
            <Col>
              <h1 className="disp">EDUCATION</h1>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="uni-logo">
                    <img src={ju} />
                  </div>
                </Col>
                <Col sm={10}>
                  {" "}
                  <h4>MSc in CSE</h4>
                  Jahangirnagar University
                  <br /> Sept, 2019 - Present
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="uni-logo">
                    <img src={sust} />
                  </div>
                </Col>
                <Col sm={10}>
                  <h4>BSc in CSE</h4>
                  Shahjalal University of Science and Technology <br /> Jan 2011
                  - August 2015
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="uni-logo">
                    <img src={dc} />
                  </div>
                </Col>
                <Col sm={10}>
                  <h4>HSC in Science</h4>
                  Dhaka College <br /> Jan 2008 - Dec 2010
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
