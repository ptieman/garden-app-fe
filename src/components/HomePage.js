import React, {useEffect, useState} from "react";
import JournalEntry from "./JournalEntry";
import ToDoList from "./ToDoList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
// import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './weather'


/* <head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>

</head> */



// take off seedlist from homepage - only have to-do list and last journal entries

const HomePage = () => {
    const [date, setDate] = useState(new Date());

    const [journaEntryData, setJournalEntryData] = useState({})
    const [toDoListData, setToDoListData] = useState({})

    useEffect(() => {
        const latestJournalEntryData = {
            journal_title: "My First Entry",
            time_stamp: "February 1, 2023",
            journal_body: "Today I did this"
            };
            setJournalEntryData(latestJournalEntryData);
        const exampleToDoList = {
            task_title: "First Task",
            task_description: "Do this first"
        };
        setToDoListData(exampleToDoList);
    }, []);

    return (
        <Container>

            <h2 class='text-center'>Welcome to Your Garden Planner</h2>
            <Row>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><JournalEntry journaEntryData={journaEntryData}/></Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><ToDoList toDoListData={toDoListData}/></Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><JournalEntry journaEntryData={journaEntryData}/></Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><ToDoList toDoListData={toDoListData}/></Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><JournalEntry journaEntryData={journaEntryData}/></Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><ToDoList toDoListData={toDoListData}/></Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><JournalEntry journaEntryData={journaEntryData}/></Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="front-card" style={{ width: '20rem' }}>
                        <Card.Body><ToDoList toDoListData={toDoListData}/></Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
            <Col>
            <div className='app'>
            <div>
            <h1 className='text-center'>React Calendar</h1>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
        <p className='text-center'>
            <span className='bold'>Selected Date:</span>{' '}
            {date.toDateString()}
        </p>
        </div>
    </div>
            </Col>
            <Col>
                
            </Col>
                </Row>
        </Container>
        
    );
};



export default HomePage;


// style={{
//     height: 500,
//     width: 350,
//     margin: 'auto'
//     }}