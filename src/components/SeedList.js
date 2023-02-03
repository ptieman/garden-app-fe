import React, {useEffect, useState} from "react";


const SeedList = () => {
    const [seedListData, setSeedListData] = useState({})
    useEffect(() => {
        const exampleSeedList = {
                seed_name: "Tomato",
                seed_description: "Red",
                days_till_harvest: "50",
                plant_spacing: "12 inches",
                sun_requirements: "full-sun",
                sow_method: "direct-sow"
                };
                setSeedListData(exampleSeedList);
            }, []);
            
    return (
        <div className="seed-list">
            <h3>Seed List</h3>
                <div className="seed-list">
                    <h5>{seedListData.seed_name}</h5>
                    <p>{seedListData.seed_description}</p>
                    <p>{seedListData.days_till_harvest}</p>
                    <p>{seedListData.plant_spacing}</p>
                    <p>{seedListData.sun_requirements}</p>
                    <p>{seedListData.sow_method}</p>
                    {/* <h3>{seedListData.seed_name}</h3>
                    <p>Description: {seedListData.seed_description}</p>
                    <p>Days till harvest: {seedListData.days_till_harvest}</p>
                    <p>Plant spacing: {seedListData.plant_spacing}</p>
                    <p>Sun requirements: {seedListData.sun_requirements}</p>
                    <p>Sow method: {seedListData.sow_method}</p> */}
                </div>
        </div>
            )};

export default SeedList