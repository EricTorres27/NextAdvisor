import React from 'react';
import logo from './logo.svg';
import './App.css';


import RegistrarAsesoria from './Components/RegistrarAsesoria';
import EditarRegistroAsesoria from './Components/EditarRegistroAsesoria';
import MetodoPago from './Components/MetodoPago';
import navbarNA from './Components/navbarNA';
import { NavbarBrand } from 'reactstrap';



function App() {
  return (
    <div className="App">
   
  <EditarRegistroAsesoria/>
    </div>
  );
}

export default App;
