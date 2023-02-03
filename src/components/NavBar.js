import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import "./NavBar.css"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


<head>
</head>
function Navbar() {
    return (
        // <nav>
            <Container>
                <Row>
                    <Col xl={3}>
                        <Link to="/journal-entries">Journal Entries</Link>
                    </Col>
                    <Col>
                        <Link to="/seed-list">Seed List</Link>  
                    </Col>
                    <Col><Link to="/to-do">To-Do List</Link> </Col>
                    <Col><Link to="/plant-library">Plant Library</Link></Col>
                </Row>
            </Container>
        // </nav>
        // <nav class="container">
        /* <ul class="row">
            <li class="col">
                <Link to="/">Home</Link>
            </li>
            <li class="col">
                <Link to="/journal-entries">Journal Entries</Link>
            </li>
            <li class="col">
                <Link to="/seed-list">Seed List</Link>
            </li>
            <li class="col">
                <Link to="/to-do">To-Do List</Link>
            </li>
            <li class="col">
                <Link to="/plant-library">Plant Library</Link>
            </li>
        </ul> */
        /* </nav> */
    );
}

export default Navbar;