import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const JournalEntryPage = () => {
    const [journalEntries, setJournalEntries] = useState([]);
    const [journalTitle, setJournalTitle] = useState("");
    const [journalBody, setJournalBody] = useState("");

    const addJournalEntry = () => {
        setJournalEntries([
        ...journalEntries,
        {
            journal_title: journalTitle,
            time_stamp: new Date().toLocaleDateString(),
            journal_body: journalBody
        }
        ]);
    };

    return (
        <Container>
        <Row>
            <Col style={{marginTop: '30px', marginRight: '50px'}}>
            {journalEntries.map((entry, index) => (
            <Card key={index} class="card border-info mb-3"  style={{marginTop: '20px'}} >
                <Card.Header></Card.Header>
                <Card.Body className="card-box">
                <Card.Title>{entry.journal_title}</Card.Title>
                <Card.Text>{entry.journal_body}</Card.Text>
                <Card.Footer>{entry.time_stamp}</Card.Footer>
                </Card.Body>
            </Card>
            ))}
            </Col>
            <Col style={{marginTop: '50px'}}>
            {/* <Card style={{marginTop: '50px'}}> */}
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
            {/* </Card> */}
            
            <Button  style={{marginTop: '10px'}}variant="info" onClick={addJournalEntry}>
            Add Entry
            </Button>
            </Col>
        </Row>
        </Container>
    );
};

export default JournalEntryPage;
