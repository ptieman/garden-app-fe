import React, {useEffect, useState} from "react";
import JournalEntry from "./JournalEntry";
import SeedList from "./SeedList";

const HomePage = () => {

    const [journaEntryData, setJournalEntryData] = useState({})
    const [seedListData, setSeedListData] = useState({})

    useEffect(() => {
        const latestJournalEntryData = {
            journal_title: "My First Entry",
            time_stamp: "February 1, 2023",
            journal_body: "Today I did this"
            };
            setJournalEntryData(latestJournalEntryData);
        const exampleSeedList ={
            seed_name: "Tomato",
            seed_description: "Red",
            days_till_harvest: "50",
            plant_spacing: "12 inches",
            sun_requirements: "full-sun",
            sow_method: "direct-sow"
        };
        setSeedListData(exampleSeedList)
    }, []);

    return (
        <div>
        <h2>Welcome to Your Garden Planner</h2>
        <JournalEntry journaEntryData={journaEntryData}/>
        <SeedList seedListData={seedListData}/>

        </div>
    );
};



export default HomePage;