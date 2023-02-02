import React, {useState} from "react";
import JournalEntry from "./JournalEntry";

const JournalEntriesListPage = ({allJournalEntriesData}) => {
    // const [newJournalEntry, setNewJournalEntry] = useState({});

    // form to add a new journal entry
// };

return (
    <div className="journal-entries-listing-page">
        <h2> Journal Entries</h2>
        {allJournalEntriesData.map((journalEntryData, index) => (
            <JournalEntry
            key={index}
            journaEntryData={journalEntryData}
            />
        ))}
    </div>
    );
};


export default JournalEntriesListPage;