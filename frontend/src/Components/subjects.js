import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';




export default class passSubject extends Component {
    render() {
        
        
        
        return (
        <div>
        <Box mx={35} mt={5}>
         
        <form>
            <h1  class="display-4" >Listado de materias</h1> 
             <br></br>
            <label>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">Fundamentos de diseño interactivo</li>
                <li class="list-group-item">Cálculo integral</li>
                <li class="list-group-item">Cálculo diferencial</li>
                <li class="list-group-item">Estadística</li>
                <li class="list-group-item">Sistemas operativos</li>
             </ul> 
          </label>
          <br></br>
          <label >
              <div class="input-group input-group-sm mb-3" >
              <Link to="RegistrarMateria">
                    <Button variant = "contained" color="primary" disableElevation>Registrar materias</Button>
            </Link>
                </div>   
          </label>
          </form>
        </Box>
        </div>
            
            
        )
    }
}
