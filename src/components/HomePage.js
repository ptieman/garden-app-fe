import React, {useEffect, useState} from "react";
// import JournalEntry from "./JournalEntry";
// import ToDoList from "./ToDoList";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card  from 'react-bootstrap/Card'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import WeatherWidget from "./weather";
import axios from "axios"



const HomePage = () => {
    const [date, setDate] = useState(new Date());

    const [journalEntryData, setJournalEntryData] = useState({
        journal_title: '',
        journal_body: '',
        journal_time_stamp: ''
    });
    const [toDoListData, setToDoListData] = useState([]);
    // const [loading, setLoading] = useState(true);
    useEffect(() => {
        axios
            .get("http://localhost:8000/")
            .then((res) => {
                console.log(res.data);
                setJournalEntryData(res.data.latest_journal_entry);
            })
            .catch((err) => console.error(err));
            axios 
            .get("http://localhost:8000/")
            .then((res) => {
                console.log(res.data);
                if (res.data.latest_todo_list) {
                    console.log(res.data.latest_todo_list.slice(-5));
                    setToDoListData(res.data.latest_todo_list.slice(-5));
                }
            })
            .catch((err) => console.error(err));
    }, []);

    const deleteTask = (id) => {
        axios
            .delete(`http://localhost:8000/tasks/${id}`)
            .then((res) => {
                console.log(res.data);
                setToDoListData(toDoListData.filter((task) => task.id !== id));
            })
            .catch((err) => console.error(err));
    };

    
    return (
        <Container>
            <Card class="card text-white bg-primary mb-3" style={{ marginLeft: '300px', marginTop: "20px", width: '700px'}}>
            <h2 className='text-center'>Welcome to Your Garden Planner</h2>
            </Card>
            <Row style={{marginTop: '40px'}}>
                <Col>
                <Card className="card border-info mb-3" style={{ width: '30rem', height: '18rem', marginLeft: '50px'}}>
                        {journalEntryData ? (
                            <>
                                <Card.Header>{journalEntryData.journal_title}</Card.Header>
                                <Card.Body>{journalEntryData.journal_body}</Card.Body>
                                <Card.Footer>{journalEntryData.journal_time_stamp}</Card.Footer>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Card>
                </Col>
                <Col>
                    <Card className="card border-info mb-3" style={{ width: '30em', height: '18rem', marginLeft: '50px' }}>
                    {toDoListData.length > 0 ? (
                            <>
                                {toDoListData.map((task, index) => (
                                    <ul class="list-group">
                                    <li class="list-group-item d-flex justify-content-between align-items-center" key={index}> {task.task_title}
                                    <button class="btn btn-outline-success" onClick={() => deleteTask(task.id)}>Done</button>
                                    </li>
                                    </ul>
                                ))}
                            </>
                        ): (
                            <p>Loading...</p>
                        )}
                    </Card>
                </Col>
            </Row> 
            <Row>
            <Col>
            <div className='app'>
            <div>
            <div className='calendar-container'>
                <Calendar onChange={setDate} value={date}  style={{ width: '30rem', marginLeft: '50px'}} />
            </div>
            <p className='text-left'>
                <span className='bold'>Selected Date:</span>{' '}
                {date.toDateString()}
            </p>
            </div>
            </div>
            </Col>
            <Col>
    <Card className="card border-info mb-3" style={{ width: '30rem', height: '17rem', justifyContent: 'center', marginTop: '50px', marginLeft: '50px' }}>
        <Card.Body>
            <WeatherWidget />
        </Card.Body>
    </Card>
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