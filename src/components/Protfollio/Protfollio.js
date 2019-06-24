import React, { Component } from 'react';
import { Row, CardHeader, CardFooter, CardBody, Col, Card, CardTitle, CardText, Button } from 'reactstrap'
import data from './../../resources/data.json'
import './Protfollio.css'
import image from './../../images/prot1.jpeg'

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
            data.tags.map(tag => {
                return (
                    <div className="tag">{tag} </div>
                )
            })
        )
    }

    _getWorks(data) {
        return (
            data.map((eachWork, index) => {
                let img = eachWork.screenshots[0]
                let description = eachWork.description.substr(0, 300) + " ..."

                // const description = eachWork.description && eachWork.description.length >= 200 ?
                //     eachWork.description.substr(0, 100) + "..."
                //     : eachWork.description;


                return (
                    <Col sm={6} className="work-item-col">
                        <Card body className="work-item-card shadow-sm p-3" >
                            <CardHeader className="card-header">
                                {eachWork.title}

                            </CardHeader>
                            <CardBody>

                                <img className="work-image" src="https://source.unsplash.com/300x150/?it,code"></img>
                                <hr></hr>

                                <CardText className="work-description" dangerouslySetInnerHTML={{ __html: description }} />

                                {this._getTags(eachWork)}

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
                    <Row>
                        <Col>
                            <h3> Projects Showcase</h3>
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