import React, {useEffect, useState} from "react";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function SeedList() {
    const [formData, setFormData] = useState({
        seedName: '',
        seedDescription: '',
        daysUntilHarvest: '',
        plantSpacing: '',
        sunRequirements: '',
        sowMethod: ''
        });
    const [tableData, setTableData] = useState([]);

    const addTableRow = (data) => {
        setTableData([...tableData, data]);
        };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add the form data to the table
        addTableRow(formData);
        // Reset the form data
        setFormData({
            seedName: '',
            seedDescription: '',
            daysUntilHarvest: '',
            plantSpacing: '',
            sunRequirements: '',
            sowMethod: ''
            });
            };

            return (
                <Container>
                    <Row>
                    <Col>
                    <Form onSubmit={handleSubmit} style={{width: '400px', marginTop: '20px'}}>
                        <input type="text" class="form-control" id="seed-name" placeholder="Enter seed name" onChange={(e) => setFormData({...formData, seedName: e.target.value})} />
                        <textarea class="form-control" id="seed-description" rows="3" onChange={(e) => setFormData({...formData, seedDescription: e.target.value})} />
                        <input type="number" class="form-control" id="days-until-harvest" placeholder="Enter days until harvest" onChange={(e) => setFormData({...formData, daysUntilHarvest: e.target.value})} />
                        <input type="text" class="form-control" id="plant-spacing" placeholder="Enter plant spacing" onChange={(e) => setFormData({...formData, plantSpacing: e.target.value})} />
                        <select
                        class="form-control"
                        id="sun-requirements"
                        placeholder="sun requirements"
                        onChange={(e) =>
                            setFormData({ ...formData, sunRequirements: e.target.value })
                        }
                        >
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
                            setFormData({ ...formData, sowMethod: e.target.value })
                        }
                        >
                        <option> select sow method</option>
                        <option>start-indoors</option>
                        <option>direct-sow</option>
                        </select>
                        <button  class="btn btn-secondary" type="submit" style={{marginTop: '20px', marginLeft: '150px'}}>Add Seed</button>
                    </Form>
                    </Col>
                    <Col>
                    <Card style={{width: '800px', marginTop: '20px'}}>
                        <table class="table table-hover" style={{width:'800px'}}>
                            <thead>
                                <tr>
                                    <th scope="col">Seed</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Days Until Harvest</th>
                                    <th scope="col">Spacing</th>
                                    <th scope="col">Sun Requirements</th>
                                    <th scope="col">Sow Method</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableData.map((data, index) => (
                                    <tr key={index}>
                                        <td>{data.seedName}</td>
                                        <td>{data.seedDescription}</td>
                                        <td>{data.daysUntilHarvest}</td>
                                        <td>{data.plantSpacing}</td>
                                        <td>{data.sunRequirements}</td>
                                        <td>{data.sowMethod}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        </Card>
                        </Col>
                </Row>
                </Container>
            );
        }
export default SeedList;

