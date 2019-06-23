import React, {Component} from 'react';
import my_photo  from './../../images/photo_grayscale.jpg';
import {Row, Col} from 'reactstrap';
import ABOUT_DATA from './../../constants/about_data';
import './About.css';

export default class About extends Component {

    _getSocial(){
        return(
            <Row className="social">
              <Col>
                
              </Col>
             </Row>
        )
    }
    render(){
        return(
            <React.Fragment>
             <h3>About me</h3>
                <div className="about-me">
                    <Row>
                    <Col sm={4}>
                    <img src={my_photo}></img>
                    </Col>
                    <Col className = "about-description">
                      <h5>Hello, I am  {ABOUT_DATA.Name} !</h5>
                      <small>{ABOUT_DATA.coverLetter}</small>
                     
                    </Col>
                    </Row>
                </div>
            </React.Fragment>
        )
    }
}