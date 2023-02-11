import React, { useEffect, useState } from "react";
import axios from 'axios';
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

const SupplyList = () => {
    const [supplies, setSupplies] = useState([]);
    const [supplyName, setSupplyName] = useState("");

    useEffect(() => {
        const fetchSupplies = async () => {
            const {data} = await axios.get("http://localhost:8000/supplies/");
            setSupplies(data);
        };

        fetchSupplies();
    }, []);

    const handleSupplyNameChange = (e) => {
        setSupplyName(e.target.value);
    };


    const handleAddSupply = async (e)  => {
        e.preventDefault();

        const response = await axios.post("http://localhost:8000/supplies/", {
            supply_name: supplyName,
        });

        setSupplies([...supplies, response.data]);
        setSupplyName("");
    };

    const handleDeleteSupply = async (id) => {
        await axios.delete(`http://localhost:8000/supplies/${id}/`);
    
        setSupplies(supplies.filter((supply) => supply.id !== id));
      };

    return (
        <div>
        <form onSubmit={handleAddSupply} >
        <input
          type="text"
          value={supplyName}
          onChange={handleSupplyNameChange}
        />
        <button class="btn btn-secondary" type="submit">Add Supply</button>
      </form>
        <Card class="card border-primary mb-3" style={{width: '300px'}}>
            {supplies.map((supply) => (
                <ul class="list-group">
                   < li class="list-group-item d-flex justify-content-between align-items-center" key={supply.id}>
                    {supply.supply_name}{" "}
                    <button class="btn btn-outline-success" onClick={() => handleDeleteSupply(supply.id)}>Bought</button>

                    </li> 
                </ul>
            ))}
        </Card>
        </div>
    )
}

export default SupplyList;