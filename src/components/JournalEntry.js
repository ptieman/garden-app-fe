import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const JournalEntryPage = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const [journalTitle, setJournalTitle] = useState();
    const [journalBody, setJournalBody] = useState();
    // const [journalTimeStamp, setJournalTimeStamp] = useState("")


    useEffect(() => {
        const fetchEntries = async () => {
            const {data} = await axios.get("http://localhost:8000/journal/");
            setJournalEntries(data);
        };

        fetchEntries();
    }, []);
   
    const handleEntryTitleChange = (e) => {
        setJournalTitle(e.target.value);
    }

    const handleEntryBodyChange = (e) => {
        setJournalBody(e.target.value)
    };

    const addJournalEntry = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:8000/journal/", {
            journal_title: journalTitle,
            journal_body: journalBody
        });
        setJournalEntries([...journalEntries, response.data]);
        setJournalTitle("");
        setJournalBody("");
    };
    
    // const addJournalEntry = (e) => {
    //     e.preventDefault();
    //     axios
    //         .post("http://localhost:8000/journal/", {journal_title: journalTitle, journal_body: journalBody})
    //         .then((res) => {
    //             setJournalEntries([...journalEntries, {journal_title : journalTitle, journal_body: journalBody}]);
    //             setJournalTitle("");
    //             setJournalBody("");
    //         })
    //         .catch((err) => console.error(err));
    // };

    const handleDeleteJournal = async (id) => {
        await axios.delete(`http://localhost:8000/journal/${id}/`);
        setJournalEntries(journalEntries.filter((entry) => entry.id !== id));
    };

    return (
        <Container>
            <Row style={{marginTop: '50px'}}>
                <Col>
                    {journalEntries.map((entry) => (
                        <Card key={entry.id} className="card border-info mb-3" style={{ width: '30rem', height: '18rem', marginLeft: '50px'}}>
                            <Card.Body>
                                <Card.Title>{entry.journal_title}</Card.Title>
                                <Card.Text>{entry.journal_body}</Card.Text>
                            </Card.Body>
                            <button class="btn btn-secondary" onClick={() => handleDeleteJournal(entry.id)}>Delete</button>
                        </Card>
                    ))}
                </Col>
                <Col>
                    <Form onSubmit={addJournalEntry}>
                        <Form.Group controlId="formJournalTitle">
                            <Form.Label>Journal Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter journal title" onChange={handleEntryTitleChange} />
                        </Form.Group>

                        <Form.Group controlId="formJournalBody">
                            <Form.Label>Journal Body</Form.Label>
                            <Form.Control type="textfield" placeholder="Enter journal body" onChange={handleEntryBodyChange} />
                        </Form.Group>

                        <Button variant="secondary" type="submit">
                            Add Journal Entry
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

// export default JournalEntryPage;







// import React, { useEffect, useState } from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button'
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
// import Col from 'react-bootstrap/Col'
// import Form from 'react-bootstrap/Form'
// import axios from 'axios'


// const JournalEntryPage = () => {
//     const [journalEntries, setJournalEntries] = useState([]);
//     const [journal, setJournal] = useState('')
//     const [journalTitle, setJournalTitle] = useState("");
//     const [journalBody, setJournalBody] = useState("");

//     useEffect(() => {
//         axios
//         .get("http://localhost:8000/journal/")
//         .then((res) => {
//             console.log(res.data);
//             setJournalEntries(res.data.journalEntries);
//         })
//         .catch((err) => console.error(err));
//     }, []);

//     const addJournalEntry = (e) => {
//         e.preventDefault();
//         axios
//             .post("http://localhost:8000/journal/", {journal_title: journalTitle, journal_body: journalBody})
//             .then((res) => {
//                 console.log(res.data);
//                 setJournalEntries([...journalEntries, {journal_title : journalTitle, journal_body: journalBody}]);
//                 setJournalTitle("");
//                 setJournalBody("");
//             })
//             .catch((err) => console.error(err));
//     };
    
//     return (
//         <Container>
//             <Row>
//                 <Col>
//                     {journalEntries && journalEntries.map((entry) => (
//                         console.log(entry),
//                         <Card key={entry.id} className="card border-info mb-3" style={{ width: '30rem', height: '18rem', marginLeft: '50px'}}>
//                             <Card.Body>
//                                 <Card.Title>{entry.journal_title}</Card.Title>
//                                 <Card.Text>{entry.journal_body}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     ))}
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// const JournalEntryPage = () => {
//     const [journalEntries, setJournalEntries] = useState([]);
//     const [journal, setJournal] = useState('')
//     const [journalTitle, setJournalTitle] = useState("");
//     const [journalBody, setJournalBody] = useState("");

//     useEffect(() => {
//         axios
//         .get("http://localhost:8000/journal/")
//         .then((res) => {
//             console.log(res.data);
//             setJournalEntries(res.data.journalEntries);
//         })
//         .catch((err) => console.error(err));
//     }, []);

//     const addJournalEntry = (e) => {
//         e.preventDefault();
//         axios
//             .post("http://localhost:8000/journal/", {journal_title: journalTitle, journal_body: journalBody})
//             .then((res) => {
//                 console.log(res.data);
//                 setJournalEntries([...journalEntries, {journal_title : journalTitle, journal_body: journalBody}]);
//                 setJournalTitle("");
//                 setJournalBody("");
//             })
//             .catch((err) => console.error(err));
//     };
    
//     return (
//         <Container>
            
//         <Row>
//         <Col>
//             {journalEntries && journalEntries.map((entry) => {
//                 console.log(entry);
//         <Card key={entry.id} className="card border-info mb-3" style={{ width: '30rem', height: '18rem', marginLeft: '50px'}}>
//         <Card.Body>
//         <Card.Title>{entry.journal_title}</Card.Title>
//         <Card.Text>{entry.journal_body}</Card.Text>
//         </Card.Body>
// </Card>
// })}
{/* </Col
            <Col style={{marginTop: '50px'}}>
            <Form >
                <Row><input
            type="text"
            placeholder="Journal Title"
            value={journalTitle}
            onChange={e => setJournalTitle(e.target.value)}
            /></Row>
            <Row style={{marginTop: '20px'}}><textarea
            placeholder="Journal Body"
            value={journalBody}
            onChange={e => setJournalBody(e.target.value)}
            rows="10"/>
            </Row>
            
            
            </Form>
            
            <Button  style={{marginTop: '10px'}}variant="info" onClick={addJournalEntry}>
            Add Entry
            </Button>
            </Col>
        </Row>
        </Container> */}
    {/* ); */}
{/* }; */}

export default JournalEntryPage;
