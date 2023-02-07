import React from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Carousel } from 'react-bootstrap';


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
        <div>
        <Row>
            <h3 style={{textAlign: 'center'}}>Plant Library</h3>
        </Row>
        <Row>
            <Col>
        <Carousel style={{width: '400px', marginTop:'50px', marginLeft: '100px'}} indicators={false}>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require('./corn.jpg')} alt="corn"/>
            <Card.Body>
              <Card.Title>Corn</Card.Title>
              <Card.Text>Fresh corn harvested from the farm</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require('./cucumber.jpeg')} alt="cucumber"/>
            <Card.Body>
              <Card.Title>Cucumber</Card.Title>
              <Card.Text>Crispy cucumbers perfect for salads</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
        <Carousel.Item>
          <Card>
            <Card.Img variant="top" src={require('./potatoes.jpeg')} alt="potatoes"/>
            <Card.Body>
              <Card.Title>Potatoes</Card.Title>
              <Card.Text>Fluffy potatoes for all your cooking needs</Card.Text>
            </Card.Body>
          </Card>
        </Carousel.Item>
      </Carousel>
      </Col>
      <Col>
      <Card style={{ marginRight: '200px', marginTop: '150px'}}>
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
      </div>
    );
  }
  
  
  
  
export default PlantLibrary