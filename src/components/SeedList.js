import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { InputGroup } from "react-bootstrap";


const SeedList = () => {
    const [seeds, setSeeds] =useState([]);
    const [seedName, setSeedName] = useState('');
    const [seedDescription, setSeedDescription] = useState('');
    const [daysTillHarvest, setDaysTillHarvest] = useState('');
    const [plantSpacing, setPlantSpacing] = useState('');
    const [sunRequirements, setSunRequirements] = useState('');
    const [sowMethod, setSowMethod] = useState('');


    useEffect(() => {
        const fetchSeeds = async () => {
            const {data} = await axios.get("http://localhost:8000/seedlist/");
            setSeeds(data);
        };

        fetchSeeds();
    }, []);

    const handleSeedNameChange = (e) => {
        setSeedName(e.target.value);
    };

    const handleSeedDescriptionChange = (e) => {
        setSeedDescription(e.target.value)
    };

    const handleDaysTillHarvestChange = (e) => {
        setDaysTillHarvest(e.target.value)
    };

    const handlePlantSpacingChange = (e) => {
        setPlantSpacing(e.target.value)
    };

    const handleSunReqChange = (e) => {
        setSunRequirements(e.target.value)
    };

    const handleSowMethodChange = (e) => {
        setSowMethod(e.target.value)
    };

    const handleAddSeed = async (e) => {
        e.preventDefault();

        const response = await axios.post("http://localhost:8000/seedlist/", {
            seed_name: seedName,
            seed_description: seedDescription,
            days_till_harvest: daysTillHarvest,
            plant_spacing: plantSpacing,
            sun_requirements: sunRequirements,
                    sow_method: sowMethod, 
            });
            setSeeds([...seeds, response.data]);
            setSeedName("");
            setSeedDescription("")
            setDaysTillHarvest("")
            setPlantSpacing("")
            setSunRequirements("")
            setSowMethod("")
            
        };

    const handleDeleteSeed = async (id) => {
        await axios.delete(`http://localhost:8000/seedlist/${id}/`);
        setSeeds(seeds.filter((seed) => seed.id !== id));
    };

    return (
        <Container>
          <h2>Seed List</h2>
          <Row>
            <Col>
            <Card class="card border-info mb-3" style={{width: '300px'}}>
          <form onSubmit={handleAddSeed}>
            <div>
              <label htmlFor="seedName">Seed Name:</label>
              <input
                type="text"
                id="seedName"
                value={seedName}
                onChange={handleSeedNameChange}
              />
            </div>
            <div>
              <label htmlFor="seedDescription">Description:</label>
              <input
                type="text"
                id="seedDescription"
                value={seedDescription}
                onChange={handleSeedDescriptionChange}
              />
            </div>
            <div>
              <label htmlFor="daysTillHarvest">Harvest Time:</label>
              <input
                type="text"
                id="daysTillHarvest"
                value={daysTillHarvest}
                onChange={handleDaysTillHarvestChange}
              />
            </div>
            <div>
              <label htmlFor="plantSpacing">Plant Spacing:</label>
              <input
                type="text"
                id="plantSpacing"
                value={plantSpacing}
                onChange={handlePlantSpacingChange}
              />
            </div>
            <div>
            <select
                class="form-control"
                id="sun-requirements"
                placeholder="sun requirements"
                onChange={handleSunReqChange}
                value={seeds.sun_requirements}>
                <option>select sun requirement</option>
                <option>full-sun</option>
                <option>partial-shade</option>
                <option>shade</option>
                </select>
                <select
                class="form-control"
                id="sow-method"
                placeholder="sow method"
                onChange={handleSowMethodChange}
                value={seeds.sow_method}>
                <option> select sow method</option>
                <option>start-indoors</option>
                <option>direct-sow</option>
                </select>
              
            </div>
            <button class="btn btn-secondary" type="submit">Add Seed</button>
          </form>
          </Card>
          </Col>
          <Col>
          <Card class="card border-info mb-3">
          <table style= {{width: '750px', textAlign: 'center'}}>
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Days Until Harvest</th>
                <th scope="col">Spacing</th>
                <th scope="col">Sun Requirements</th>
                <th scope="col">Sow Method</th>
              </tr>
            </thead>
            <tbody style={{textAlign: 'center'}}>
              {seeds.map((seed) => (
                <tr key={seed.id}>
                  <td >{seed.seed_name}</td>
                  <td>{seed.seed_description}</td>
                  <td>{seed.days_till_harvest}</td>
                  <td>{seed.plant_spacing}</td>
                  <td>{seed.sun_requirements}</td>
                  <td>{seed.sow_method}</td>
                  <td>
                    <button class="btn btn-outline-secondary" onClick={() => handleDeleteSeed(seed.id)}>
                      Delete
                    </button>
                  </td>
                  </tr>
              ))}
                  </tbody>
                  </table>
                  </Card>
                  </Col>
                  </Row>
                  </Container>
                  
            )
              };
              
                  
               
export default SeedList
    
    


 