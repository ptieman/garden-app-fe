import React from "react";


const SeedList = ({seedListData}) => {
    return (
        <div className="seed-list">
            <h3>Seed List</h3>
            <p>{seedListData.seed_name}</p>
            <p>{seedListData.seed_description}</p>
            <p>{seedListData.days_till_harvest}</p>
            <p>{seedListData.plant_spacing}</p>
            <p>{seedListData.sun_requirements}</p>
            <p>{seedListData.sow_method}</p>
        </div>
    );
};

export default SeedList