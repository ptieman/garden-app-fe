import React from "react";
// import propt

const JournalEntry = ({journaEntryData}) => {
    return (
        <div className="journal-entry">
            <h3>{journaEntryData.journal_title}</h3>
            <p>{journaEntryData.time_stamp}</p>
            <p>{journaEntryData.journal_body}</p>
        </div>

    );
};


export default JournalEntry;