import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import App from './App';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import reportWebVitals from './reportWebVitals';
import JournalEntry from './components/JournalEntry';
import SeedList from './components/SeedList';
import ToDoList from './components/ToDoList';
import Layout from './components/Layout';
import HomePage from './components/HomePage';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

export default function App() {
  return (
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
  )
}
// export default function App() {
//   return (
//     <BrowserRouter>
//       <Layout>
//         <Container>
//           <Row>
//             <Col>
//               <Link to="/">Home</Link>
//             </Col>
//             <Col>
//               <Link to="journal-entries">Journal Entries</Link>
//             </Col>
//             <Col>
//               <Link to='seed-list'>Seed List</Link>
//             </Col>
//             <Col>
//               <Link to='to-do'>To-Do List</Link>
//             </Col>
//           </Row>
//         </Container>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="journal-entries" element={<JournalEntry />} />
//           <Route path="seed-list" element={<SeedList />} />
//           <Route path="to-do" element={<ToDoList />} />
//         </Routes>
//       </Layout>
//     </BrowserRouter>
//   );
// }






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
