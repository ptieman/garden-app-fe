import React, {useEffect, useState} from "react";
import JournalEntry from "./JournalEntry";
import ToDoList from "./ToDoList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card  from 'react-bootstrap/Card'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WeatherWidget from "./weather";
// import Weather from './weather';



// take off seedlist from homepage - only have to-do list and last journal entries

const HomePage = () => {
    const [date, setDate] = useState(new Date());

    const [journaEntryData, setJournalEntryData] = useState({})
    const [toDoListData, setToDoListData] = useState({})
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    // const [data, setData] = useState([]);
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
        setToDoListData(exampleToDoList);}, []);
    //     const fetchData = async () => {
    //         navigator.geolocation.getCurrentPosition(function(position) {
    //             setLat(position.coords.latitude);
    //             setLong(position.coords.longitude);
    //         });
    //         await fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
    //         .then(res => res.json())
    //         .then(result => {
    //             setData(result)
    //             console.log(result);
    //         });
    //         }
    //         fetchData();
    // }, [lat, long]);
    return (
        <Container>

            <h2 className='text-center'>Welcome to Your Garden Planner</h2>
            <Row>
                <Col>
                    <Card className="card border-info mb-3" style={{ width: '30rem', height: '20rem' }}>
                        <Card.Body><JournalEntry journaEntryData={journaEntryData}/></Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card className="card border-info mb-3" style={{ width: '30em', height: '20rem' }}>
                        <Card.Body><ToDoList toDoListData={toDoListData}/></Card.Body>
                    </Card>
                </Col>
            </Row> 
            <Row>
            <Col>
            <div className='app'>
            <div>
            {/* <h4 className='text-left'>Calendar</h4> */}
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date} />
            </div>
            <p className='text-left'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            </div>
            </div>
            </Col>
                <WeatherWidget />
            {/* <Col>
            {(typeof data.main != 'undefined') ? (
                <Weather weatherData={data}/>
            ): (
            <div/>
            )}
            </Col> */}
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