import React, { useState } from "react";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

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
        <div className="journal-entry">
        <div>
            {journalEntries.map((entry, index) => (
            <Card key={index} >
                <Card.Header></Card.Header>
                <Card.Body className="card-box">
                <Card.Title>{entry.journal_title}</Card.Title>
                <Card.Text>{entry.journal_body}</Card.Text>
                <Card.Footer>{entry.time_stamp}</Card.Footer>
                </Card.Body>
            </Card>
            ))}
        </div>
        <div className="add-journal">
            <input
            type="text"
            placeholder="Journal Title"
            value={journalTitle}
            onChange={e => setJournalTitle(e.target.value)}
            />
            <textarea
            placeholder="Journal Body"
            value={journalBody}
            onChange={e => setJournalBody(e.target.value)}
            />
            <Button variant="secondary" onClick={addJournalEntry}>
            Add Entry
            </Button>
        </div>
        </div>
    );
};

export default JournalEntryPage;
