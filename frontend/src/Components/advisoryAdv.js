import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'
import { Link } from 'react-router-dom';




export default class passSubject extends Component {
    render() {
        
        
        
        return (
        <div>
        <Box mx={40} mt={10}>
         
        <form>
            <h1  class="display-4" >Mis asesorías</h1> 
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
              <Link to="RegistrarAsesoria">
                    <button type="button" class="btn btn-primary">Registrar Asesoría</button>
            </Link>
            
                </div>   
          </label>
          <br></br>
          <label>
          <Link to="EditarAsesoria">
                    <button type="button" class="btn btn-primary">Editar Asesoría</button>
            </Link>
            
          </label>
          </form>
        </Box>
        </div>
            
            
        )
    }
}
