import React, {useEffect, useState} from "react";
import JournalEntry from "./JournalEntry";
import ToDoList from "./ToDoList";

<head>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>

</head>

// take off seedlist from homepage - only have to-do list and last journal entries

const HomePage = () => {

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

        <div>
        <h2>Welcome to Your Garden Planner</h2>
        <JournalEntry journaEntryData={journaEntryData}/>
        <ToDoList toDoListData={toDoListData}/>
        </div>
        
    );
};



export default HomePage;