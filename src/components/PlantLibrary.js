import React from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function PlantLibrary() {

    // state = {
    //     zipcode: "",
    //     plantzone: {}
    // };

    // handleChange = event => {
    //     this.setState({zipcode: event.target.value});
    // };

    // handleSubmit = event => {
    //     event.preventDefault();
    //     // API call happens here
    // };
    // input form for entering zipcode and getting plant hardiness
    // render() {
    //     const {plantzone} = this.state
    // }
    return (
        <Row>
            <Col></Col>
            <Col >
        <Card style={{width: "500px", marginLeft: '100px', marginTop: '50px'}}>
            {/* add onsSubmit to handleSubmit */}
            <Form>
                <Form.Label>Plant Hardiness Zone</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Enter zipcode"
                    // add onChange to handleChange
                    >
                </Form.Control>
                <button type="submit" class="btn btn-secondary">Get Hardiness Zone</button>

            </Form>
        </Card>
        </Col>
        </Row>
    )
}

export default PlantLibrary