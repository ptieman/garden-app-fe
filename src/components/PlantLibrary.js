import React from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Carousel } from 'react-bootstrap';
import { useState } from "react";


function PlantLibrary() {
  const [zipcode, setZipcode] = useState("");
  const [zone, setZone] = useState('');

  

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `https://plant-hardiness-zone.p.rapidapi.com/zipcodes/${zipcode}`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '820a4714a4msh2612354a797625fp17e673jsn1c6fc95976c8',
        'X-RapidAPI-Host': 'plant-hardiness-zone.p.rapidapi.com'
      }
    };
    const response = await fetch(url, options);
    const data = await response.json();
    setZone(data.hardiness_zone);
  };
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
        <h3 style={{textAlign: 'center'}}> Plant Library</h3>
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
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formZipcode">
        <Form.Label>Zipcode</Form.Label>
        <Form.Control type="text" placeholder="Enter zipcode" onChange={e => setZipcode(e.target.value)} />
      </Form.Group>

      <Card.Body>
        <p>Your Hardiness Zone Is: {zone}</p>
      </Card.Body>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
                </Card>
      </Col>
      </Row>
      </div>
    );
  }
  
  
  
  
export default PlantLibrary