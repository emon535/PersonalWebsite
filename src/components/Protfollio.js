import React, { Component } from 'react';
import { Row, CardHeader, CardFooter, CardBody, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import data from './../resources/data.json'
import './Protfollio.css'

class Protfollio extends Component {

    constructor(props) {
        super(props)
        console.log(data.data)
        this.state = {
            work_data: data.data
        }
    }

    _getWorks(data) {
        return (
            this.state.work_data.map((eachWork, index) => {
                return (
                    <Col sm={6} className="work-item-col">
                        <Card body className="work-item-card ">
                            <CardHeader>
                                {eachWork.title}
                            </CardHeader>
                            <CardBody>

                                <CardText numberOfLines={3}>{eachWork.description}</CardText>

                            </CardBody>
                            <CardFooter className="card-footer">
                                <Button className="see-button">See more</Button>
                            </CardFooter>
                        </Card>
                    </Col >

                )
            })
        )
    }

    render() {
        return (
            < React.Fragment >
                <div className="work-block">
                    <Card body>
                        <CardTitle>
                            <h3> Projects Showcase</h3>
                        </CardTitle>
                    </Card>
                    <Row>
                        {this._getWorks(data)}
                    </Row>
                </div>


            </React.Fragment >
        )

    }
}


export default Protfollio;