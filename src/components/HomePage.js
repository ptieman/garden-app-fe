import React, {useEffect, useState} from "react";
import JournalEntry from "./JournalEntry";

const HomePage = () => {

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
        <div>
        <h2>Welcome to Your Garden Planner</h2>
        <JournalEntry journaEntryData={journaEntryData}/>

        </div>
    );
};



export default HomePage;