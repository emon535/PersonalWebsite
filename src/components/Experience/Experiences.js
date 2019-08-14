import React, { Component } from "react";
import "./Experience.css";
import infolytx from "./../../images/infolytx.png";
import bm from "./../../images/bm.png";
import { Row, Col } from "reactstrap";

export default class Experiences extends Component {
  render() {
    return (
      <div className="experience">
        <Col className="experience-description">
          <Row className="experience-body">
            <Col>
              <h1 className="disp">EXPERIENCES</h1>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="work-logo">
                    <img src={infolytx} />
                  </div>
                </Col>
                <Col sm={10}>
                  <h4>INFOLYTX</h4>
                  Software Engineer <br /> Feb, 2019 - Present
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="work-logo">
                    <img src={bm} />
                  </div>
                </Col>
                <Col sm={10}>
                  <h4>BM IT Solutions</h4>
                  Software Engineer <br /> Feb, 2018 - Jan, 2019
                </Col>
              </Row>
              <hr />
              <Row>
                <Col sm={2}>
                  <div className="work-logo">
                    <img src={infolytx} />
                  </div>
                </Col>
                <Col sm={10}>
                  <h4>INFOLYTX</h4>
                  Junior Software Engineer <br /> Dec, 2015 - Jan 2018
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </div>
    );
  }
}
