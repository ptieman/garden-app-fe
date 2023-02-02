import React from "react";  
import { BrowserRouter, Route, Link } from "react-router-dom";


function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/journal-entries">Journal Entries</Link>
                </li>
                <li>
                    <Link to="/seed-list">Seed List</Link>
                </li>
                <li>
                    <Link to="/to-do">To Do List</Link>
                </li>
                {/* <li>
                    <Link to="/login"> Login </Link>
                </li> */}
                <li>
                    <Link to="/plant-library"> Plant library</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar