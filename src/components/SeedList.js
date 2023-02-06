import React from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'

const SeedList = () => {
    return(
        <div>
            <Card style={{width: '500px', marginLeft: '100px', marginTop: '50px', marginBottom: '50px'}}>
            <Form>
    <div class="form-group">
        <label for="seed-name">Seed Name</label>
        <input type="text" class="form-control" id="seed-name" placeholder="Enter seed name"/>
    </div>
    <div class="form-group">
        <label for="seed-description">Seed Description</label>
        <textarea class="form-control" id="seed-description" rows="3"></textarea>
    </div>
    <div class="form-group">
        <label for="days-until-harvest">Days Until Harvest</label>
        <input type="number" class="form-control" id="days-until-harvest" placeholder="Enter days until harvest"/>
    </div>
    <div class="form-group">
        <label for="plant-spacing">Plant Spacing</label>
        <input type="text" class="form-control" id="plant-spacing" placeholder="Enter plant spacing"/>
    </div>
    <div class="form-group">
        <label for="sun-requirements">Sun Requirements</label>
        <select class="form-control" id="sun-requirements">
        <option>full-sun</option>
        <option>partial-shade</option>
        <option>shade</option>
        </select>
    </div>
    <div class="form-group">
        <label for="sow-method">Sow Method</label>
        <select class="form-control" id="sow-method">
        <option>start-indoors</option>
        <option>direct-sow</option>
        </select>
    </div>
    <button type="submit" class="btn btn-secondary" style={{marginTop: '20px'}}>Add Seed</button>
    </Form>
            </Card>
        </div>
        

    )
    }
    export default SeedList;

    // const [seedListData, setSeedListData] = useState({})
    // useEffect(() => {
    //     const exampleSeedList = {
    //             seed_name: "Tomato",
    //             seed_description: "Red",
    //             days_till_harvest: "50",
    //             plant_spacing: "12 inches",
    //             sun_requirements: "full-sun",
    //             sow_method: "direct-sow"
    //             };
    //             setSeedListData(exampleSeedList);
    //         }, []);

    // // function createSeedList()
            
    // return (
    //     <div className="seed-list">
    //         <h3>Seed List</h3>
    //             <div className="seed-list">
    //                 <h5>{seedListData.seed_name}</h5>
    //                 <p>{seedListData.seed_description}</p>
    //                 <p>{seedListData.days_till_harvest}</p>
    //                 <p>{seedListData.plant_spacing}</p>
    //                 <p>{seedListData.sun_requirements}</p>
    //                 <p>{seedListData.sow_method}</p>
    //                 {/* <h3>{seedListData.seed_name}</h3>
    //                 <p>Description: {seedListData.seed_description}</p>
    //                 <p>Days till harvest: {seedListData.days_till_harvest}</p>
    //                 <p>Plant spacing: {seedListData.plant_spacing}</p>
    //                 <p>Sun requirements: {seedListData.sun_requirements}</p>
    //                 <p>Sow method: {seedListData.sow_method}</p> */}
    //             </div>
    //     </div>
    //         )};

