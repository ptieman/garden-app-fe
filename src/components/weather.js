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
            <button type="submit" class="btn btn-secondary" style={{marginTop: '0.5rem'}}>Get Weather</button>
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

