import React, { Component } from 'react';
import { Row, CardHeader, CardFooter, CardBody, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import data from './../resources/data.json'
import './Protfollio.css'
import image from './../images/prot1.jpeg'
class Protfollio extends Component {

    constructor(props) {
        super(props)
        console.log(data.data)
        this.state = {
            work_data: data.data
        }
    }

    _getTags(data) {
        return (
            data.map((eachwork, index) => {
                eachwork.tags.map((eachtags, index) => {
                    return (
                        <p>{eachtags}</p>
                    )

                })
            })
        )
    }

    _getWorks(data) {
        return (
            data.map((eachWork, index) => {
                let img = eachWork.screenshots[0]
                let description = eachWork.description.substr(0, 100) + " ..."
                return (
                    <Col sm={4} className="work-item-col">
                        <Card body className="work-item-card ">
                            <CardHeader className="card-header">
                                {eachWork.title}
                                {this._getTags(this.state.work_data)}
                            </CardHeader>
                            <CardBody>
                                <img className="work-image" src="https://source.unsplash.com/300x150/?it,code"></img>
                                <hr></hr>
                                <CardText className="work-description" dangerouslySetInnerHTML={{ __html: description }} />



                            </CardBody>
                            <CardFooter className="card-footer">

                                <Button className="see-button"><span>See more</span></Button>

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
                        {this._getWorks(this.state.work_data)}
                    </Row>
                </div>


            </React.Fragment >
        )

    }
}


export default Protfollio;