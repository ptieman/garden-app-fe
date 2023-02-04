import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

// import ButtonGroup from 'react-bootstrap/ButtonGroup';

<head>
</head>
function Navigation() {
    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
    </>
    );
}

        // <div className="navbar-buttons">
            /* <Navbar bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav className="me-auto">
                        <Nav.Link href="/journal-entries">Journal Entries</Nav.Link>
                        <Nav.Link href="/seed-list">Seed List</Nav.Link>
                        <Nav.Link href="/to-do">To-Do List</Nav.Link>
                        <Nav.Link href="/plant-library">Plant Library</Nav.Link>
                    </Nav>
                </Container> */
        /* </Navbar> */


        
        // <div class="navbar-buttons">
        //     <Button> <Link to="/journal-entries" variant="primary" type="button">Journal Entries</Link>{' '}</Button>
        //     <Button> <Link to="/seed-list" variant="primary" type="button">Seed List</Link>Seed List</Button>{' '}
        //     <Button href="/to-do">To-Do List</Button>{' '}
        //     <Button href="/plant-library">Plant Library</Button>{' '}
        // </div>
        // <Button href="/journal-entries">Journal Entries</Button>
        // <Button href="/seed-list">SeedList</Button>

        // <nav>
            // <Container>
            //     <Row>
            //         <Col xl={3}>
            //             <Link to="/journal-entries">Journal Entries</Link>
            //         </Col>
            //         <Col>
            //             <Link to="/seed-list">Seed List</Link>  
            //         </Col>
            //         <Col><Link to="/to-do">To-Do List</Link> </Col>
            //         <Col><Link to="/plant-library">Plant Library</Link></Col>
            //     </Row>
            // </Container>
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

export default Navigation;