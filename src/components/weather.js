import React, { Component } from "react";
import { Card, Form, Button } from "react-bootstrap";

class WeatherWidget extends Component {
  state = {
    city: "",
    weatherData: {}
  };

  handleChange = event => {
    this.setState({ city: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const API_KEY = process.env.REACT_APP_API_KEY;
    const CITY = this.state.city;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;

    fetch(URL)
      .then(response => response.json())
      .then(data => {
        this.setState({ weatherData: data });
      })
      .catch(error => {
        console.error(error);
      });
  };

  render() {
    const { weatherData } = this.state;

    return (
      <Card >
        <Card.Header>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="formCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button type="submit" style={{marginTop: '0.5rem'}}>Get Weather</Button>
          </Form>
        </Card.Header>
        <Card.Body>
  {Object.keys(weatherData).length === 0 ? (
    <p>Enter a city to get the weather.</p>
  ) : (
    <div>
      <p>Temperature: {weatherData.main ? ((weatherData.main.temp - 273.15) * 9/5 + 32).toFixed(2) + " °F" : "N/A"}</p>

      <p>Humidity: {weatherData.main ? weatherData.main.humidity : "N/A"}</p>
      {/* <p>Description: {weatherData.weather[0].description}</p> */}
    </div>
  )}
</Card.Body>
      </Card>
    );
  }
}

export default WeatherWidget;




// import React from "react";
// import { Card, Container, Row, Col, Form, Button } from "react-bootstrap";

// class WeatherWidget extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//         city: "",
//         weatherData: null
//         };
//     }

//     handleCityChange = event => {
//         this.setState({ city: event.target.value });
//     };
//     handleSubmit = event => {
//         event.preventDefault();
//         const API_KEY = process.env.REACT_APP_API_KEY;
//         const CITY = this.state.city;
//         const URL = `http://api.openweathermap.org/data/2.5/weather?q=${CITY}&units=imperial&appid=${API_KEY}`;
//         fetch(URL)
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({ weatherData: data });
//             })
//             .catch(error => {
//                 console.error(error);
//             });
//         };
//         render() {
//             return (
//                 <Card style={{width: '30rem', height: "20rem"}}>
//                     <Card.Header>Weather Widget</Card.Header>
//                     <Card.Body>
//                     <Container>
//                         <Row>
//                         <Col>
//                             <Form onSubmit={this.handleSubmit}>
//                             <Form.Group controlId="formCity">
//                                 <Form.Label>Enter city name:</Form.Label>
//                                 <Form.Control
//                                 type="text"
//                                 placeholder="Enter city"
//                                 value={this.state.city}
//                                 onChange={this.handleCityChange}
//                                 />
//                             </Form.Group>
//                             <Button variant="secondary" type="submit">
//                                 Get Weather
//                             </Button>
//                             </Form>
//                         </Col>
//                         </Row>
//                         {this.state.weatherData && (
//                         <Row>
//                             {/* Display weather data here */}
//                         </Row>
//                         )}
//                     </Container>
//                     </Card.Body>
//                 </Card>
//                 );
//             }
//         }
        
//         export default WeatherWidget;




// import React from 'react';
// import Card from 'react-bootstrap/Card';
// import moment from 'moment';

// const CardExampleCard = ({weatherData}) => (
//     <Card>
//         <Card.Content>
//             <Card.Header className="header">City Name: {weatherData.name}</Card.Header>
//             <p>Temprature: {weatherData.main.temp} &deg;C</p>
//             <p>Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
//             <p>Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
//             <p>Description: {weatherData.weather[0].main}</p>
//             <p>Humidity: {weatherData.main.humidity} %</p>
//             <p>Day: {moment().format('dddd')}</p>
//             <p>Date: {moment().format('LL')}</p>
//         </Card.Content>
//     </Card>
// )