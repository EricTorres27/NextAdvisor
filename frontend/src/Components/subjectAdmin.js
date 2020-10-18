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
              <div class="input-group input-group-sm mb-3" >
                    <h4 >Fundamentos de ingeniería de software</h4> 
                    <h4 >Algebra</h4> 
                    <h4 >Calculo integral</h4> 
                    <h4 >Sistemas inteligentes</h4> 
                </div>   
          </label>
          <br></br>
          <label>
              <div class="input-group input-group-sm mb-3" >
              <Link to="RegistrarMateria">
                    <button type="button" class="btn btn-primary">Registrar materias</button>
            </Link>
            <br></br>
            <Link to="AprobarMateria">
                    <Button variant = "contained" color="primary" disableElevation>Aprobar materias</Button>
            </Link>
            

                </div>   
          </label>
          </form>
        </Box>
        </div>
            
            
        )
    }
}
