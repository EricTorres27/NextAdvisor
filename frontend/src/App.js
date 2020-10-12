import React from 'react';
import logo from './logo.svg';
import './App.css';


import RegistrarAsesoria from './Components/RegistrarAsesoria';
import navbarNA from './Components/navbarNA';
import { NavbarBrand } from 'reactstrap';



function App() {
  return (
    <div className="App">
    <navbarNA/>
    <RegistrarAsesoria/>
    </div>
  );
}

export default App;
