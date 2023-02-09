import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'
import { InputGroup } from "react-bootstrap";


function SeedList() {
    const [seeds, setSeeds] = useState([]);
    const [seed, setSeed] = useState('')

    useEffect(() => {
        axios
            .get("http://localhost:8000/seedlist/")
            .then((res) => {
                console.log(res.data);
                setSeeds(res.data.seeds);
            })
            .catch((err) => console.error(err));
    }, []);

    const handleSumbit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/seedlist/",
            {seed_name: seed.seed_name, 
            seed_description: seed.seed_description, 
            days_till_harvest: seed.days_till_harvest, 
            plant_spacing: seed.plant_spacing, 
            sun_requirements: seed.sun_requirements, 
            sow_method: seed.sow_method})

            .then((res) => {
                console.log(res.data);
                setSeeds([...seeds, {seed_name: seed.seed_name, 
                    seed_description: seed.seed_description, 
                    days_till_harvest: seed.days_till_harvest, 
                    plant_spacing: seed.plant_spacing, 
                    sun_requirements: seed.sun_requirements, 
                    sow_method: seed.sow_method}]);
                setSeed({seed_name: '',
                    seed_description: '',
                    days_till_harvest: '',
                    plant_spacing: '',
                    sun_requirements: '',
                    sow_method: ''
                })
                .catch((err) => console.error(err));
            })
    }

    return (
        <div>
            <table>
                <Card>
                    <thread>
                        <tr>Seeds</tr>
                    </thread>
                    <tbody>
                        {seeds.map((seed) => (
                            <tr key={seed.seed_name}>
                                <td>{seed.seed_name}</td>
                                <td>{seed.seed_description}</td>
                                <td>{seed.days_till_harvest}</td>
                                <td>{seed.plant_spacing}</td>
                                <td>{seed.sun_requirements}</td>
                                <td>{seed.sow_method}</td>
                            </tr>
                        ))}
                    </tbody>
                </Card>
            </table>
            <Form onSubmit={handleSumbit}>
            <input type="text" class="form-control" id="seed-name" placeholder="Enter seed name" onChange={(e) => setSeed({...seed, seed_name: e.target.value})}  value={seed.seed_name}  />
            <textarea class="form-control" id="seed-description" rows="3" onChange={(e) => setSeed({...seed, seed_description: e.target.value})} />
            <input type="number" class="form-control" id="days-until-harvest" placeholder="Enter days until harvest" onChange={(e) => setSeed({...seed, days_till_harvest: e.target.value})} value={seed.days_till_harvest}/>
            <input type="text" class="form-control" id="plant-spacing" placeholder="Enter plant spacing" onChange={(e) => setSeed({...seed, plant_spacing: e.target.value})} value={seed.plant_spacing} />
            <select
                class="form-control"
                id="sun-requirements"
                placeholder="sun requirements"
                onChange={(e) =>
                    setSeed({ ...seed, sun_requirements: e.target.value })
                }
                value={seed.sun_requirements}>
                {/* <option></option> */}
                <option>select sun requirement</option>
                <option>full-sun</option>
                <option>partial-shade</option>
                <option>shade</option>
                </select>
                <select
                class="form-control"
                id="sow-method"
                placeholder="sow method"
                onChange={(e) =>
                    setSeed({ ...seed, sow_method: e.target.value })
                }
                value={seed.sow_method}>
                <option> select sow method</option>
                <option>start-indoors</option>
                <option>direct-sow</option>
                </select>
                    <button type="submit"> Add Seed</button>
            </Form>
        </div>
    )
                        }

export default SeedList

    // const [formData, setFormData] = useState({
    //     seedName: '',
    //     seedDescription: '',
    //     daysUntilHarvest: '',
    //     plantSpacing: '',
    //     sunRequirements: '',
    //     sowMethod: ''
    //     });
    // const [tableData, setTableData] = useState([]);

    // const addTableRow = (data) => {
    //     setTableData([...tableData, data]);
    //     };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     // Add the form data to the table
    //     addTableRow(formData);
    //     // Reset the form data
    //     setFormData({
    //         seedName: '',
    //         seedDescription: '',
    //         daysUntilHarvest: '',
    //         plantSpacing: '',
    //         sunRequirements: '',
    //         sowMethod: ''
    //         });
    //         };

    //         return (
    //             <Container>
    //                 <Row>
    //                 <Col>
    //                 <Form onSubmit={handleSubmit} style={{width: '400px', marginTop: '20px'}}>
    //                     <input type="text" class="form-control" id="seed-name" placeholder="Enter seed name" onChange={(e) => setFormData({...formData, seedName: e.target.value})}  value={formData.seedName}  />
    //                     <textarea class="form-control" id="seed-description" rows="3" onChange={(e) => setFormData({...formData, seedDescription: e.target.value})} />
    //                     <input type="number" class="form-control" id="days-until-harvest" placeholder="Enter days until harvest" onChange={(e) => setFormData({...formData, daysUntilHarvest: e.target.value})} value={formData.daysUntilHarvest}/>
    //                     <input type="text" class="form-control" id="plant-spacing" placeholder="Enter plant spacing" onChange={(e) => setFormData({...formData, plantSpacing: e.target.value})} value={formData.plantSpacing} />
    //                     <select
    //                     class="form-control"
    //                     id="sun-requirements"
    //                     placeholder="sun requirements"
    //                     onChange={(e) =>
    //                         setFormData({ ...formData, sunRequirements: e.target.value })
    //                     }
    //                     value={formData.sunRequirements}>
    //                     {/* <option></option> */}
    //                     <option>select sun requirement</option>
    //                     <option>full-sun</option>
    //                     <option>partial-shade</option>
    //                     <option>shade</option>
    //                     </select>
    //                     <select
    //                     class="form-control"
    //                     id="sow-method"
    //                     placeholder="sow method"
    //                     onChange={(e) =>
    //                         setFormData({ ...formData, sowMethod: e.target.value })
    //                     }
    //                     value={formData.sowMethod}>
    //                     <option> select sow method</option>
    //                     <option>start-indoors</option>
    //                     <option>direct-sow</option>
    //                     </select>
    //                     <button  class="btn btn-secondary" type="submit" style={{marginTop: '20px', marginLeft: '150px'}}>Add Seed</button>
    //                 </Form>
    //                 </Col>
    //                 <Col>
    //                 <Card style={{width: '800px', marginTop: '20px'}}>
    //                     <table class="table table-hover" style={{width:'800px'}}>
    //                         <thead>
    //                             <tr>
    //                                 <th scope="col">Seed</th>
    //                                 <th scope="col">Description</th>
    //                                 <th scope="col">Days Until Harvest</th>
    //                                 <th scope="col">Spacing</th>
    //                                 <th scope="col">Sun Requirements</th>
    //                                 <th scope="col">Sow Method</th>
    //                             </tr>
    //                         </thead>
    //                         <tbody>
    //                             {tableData.map((data, index) => (
    //                                 <tr key={index}>
    //                                     <td>{data.seedName}</td>
    //                                     <td>{data.seedDescription}</td>
    //                                     <td>{data.daysUntilHarvest}</td>
    //                                     <td>{data.plantSpacing}</td>
    //                                     <td>{data.sunRequirements}</td>
    //                                     <td>{data.sowMethod}</td>
    //                                 </tr>
    //                             ))}
    //                         </tbody>
    //                     </table>
    //                     </Card>
    //                     </Col>
    //             </Row>
    //             </Container>
    //         );
    //     }
// export default SeedList;

