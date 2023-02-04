import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from './components/HomePage';
import Navbar from './components/NavBar';
import {Outlet} from "react-router-dom"


// <head> <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous"/>
// </head>

function App() {
  return (
    <>
      <HomePage style={{ height: '100vh', width: '100wh' }}/>
    </>
  )
}

export default App;