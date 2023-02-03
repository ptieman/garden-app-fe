import React, {useEffect, useState} from "react";

// import propt

const JournalEntryPage = () => {
    const [journaEntryData, setJournalEntryData] = useState({})
    useEffect(() => {
        const latestJournalEntryData = {
            journal_title: "My First Entry",
            time_stamp: "February 1, 2023",
            journal_body: "Today I did this"
            };
            setJournalEntryData(latestJournalEntryData);
        }, []);

    return (
        <div className="journal-entry">
            <h3>{journaEntryData.journal_title}</h3>
            <p>{journaEntryData.time_stamp}</p>
            <p>{journaEntryData.journal_body}</p>
        </div>

    );
};


export default JournalEntryPage;