import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JournalEntry from './components/JournalEntry';
import SeedList from './components/SeedList';
import ToDoList from './components/ToDoList';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// add //dashboard
// swap line 32 to /signin / signup

export default function App() {
  return (
    <div className='bg-custom'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />}/>
            <Route path="journal-entries" element={<JournalEntry />}/>
            <Route path='seed-list' element={<SeedList />}/>
            <Route path='to-do' element={<ToDoList />}/>
          </Route>
        </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}

// add ternary to if on ceratin link show calendar