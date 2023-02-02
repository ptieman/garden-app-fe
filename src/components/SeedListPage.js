import React from "react";
import SeedList from "./SeedList";

const SeedListPage = ({allSeedData}) => {
    return (
        <div className="seed-list-page">
            <h2>Seed List</h2>
            {allSeedData.map((seedListData, index) => (
                <SeedList
                key={index}
                seedListData={seedListData}
                />
            ))}
        </div>
    );
};

export default SeedListPage