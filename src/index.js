import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "bootswatch/dist/minty/bootstrap.min.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import JournalEntry from './components/JournalEntry';
import SeedList from './components/SeedList';
import ToDoList from './components/ToDoList';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
import SignIn from './components/sign-in';
import PlantLibrary from './components/PlantLibrary';




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
          <Route path="/" element={<SignIn/>}></Route>
            <Route path="/" element={<Layout />}>
            <Route path="/home" element={<HomePage/>}></Route>
              {/* <Route index element={<HomePage />}/> */}
            <Route path="journal-entries" element={<JournalEntry />}/>
            <Route path='seed-list' element={<SeedList />}/>
            <Route path='to-do' element={<ToDoList />}/>
            {/* <Route path='sign-in' element={<SignIn/>}></Route> */}
            <Route path='plant-library' element={<PlantLibrary/>}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
    
    </div>
    
  )
}

// export const API_URL = "http://localhost:8000/";