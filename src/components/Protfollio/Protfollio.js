import React, { Component } from "react";
import {
    Row,
    CardHeader,
    CardFooter,
    CardBody,
    Col,
    Card,
    CardTitle,
    CardText,
    Button
} from "reactstrap";

import data from "./../../resources/data.json";
import "./Protfollio.css";
import image from "./../../images/prot1.jpeg";

class Protfollio extends Component {
    constructor(props) {
        super(props);
        console.log(data.data);
        this.state = {
            work_data: data.data
        };
    }

    _getTags(data) {
        return data.tags.map(tag => {
            return <a className="tag">{tag} </a>;
        });
    }

    _getWorks(data) {
        return data.map((eachWork, index) => {
            let img = eachWork.screenshots[0];
            let description = eachWork.description.substr(0, 300) + " ...";

            // const description = eachWork.description && eachWork.description.length >= 200 ?
            //     eachWork.description.substr(0, 100) + "..."
            //     : eachWork.description;
            return (
                <Col sm={6} className="work-item-col">
                    <Card body className="work-item-card shadow-sm p-3">
                        <img
                            className="work-image"
                            src="https://source.unsplash.com/300x150/?it,code"
                        />
                        <CardBody>
                            <hr />

                            {eachWork.title}
                            {this._getTags(eachWork)}
                            <Button className="see-button">
                                <span>Visit</span>
                            </Button>
                        </CardBody>
                    </Card>
                </Col>


            );
        });
    }

    // const description = eachWork.description && eachWork.description.length >= 200 ?
    //     eachWork.description.substr(0, 100) + "..."


    render() {
        return (
            < React.Fragment >
                <div className="work-block">
                    <Row>
                        <Col>
                            <h3>Check My Works</h3> or Download my CV
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row>
                        {this._getWorks(this.state.work_data)}
                    </Row>
                </div>


            </React.Fragment >
        )

    }
}

export default Protfollio;
