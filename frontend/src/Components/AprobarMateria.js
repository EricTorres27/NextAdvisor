import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'
import Button from '@material-ui/core/Button';




export default class passSubject extends Component {
    render() {
        
        const save=()=>{
            swal({
                title:"Materia aprobada exitosamente",
                icon: "success",
                button: "Aceptar"
            });
           
        }
        return (
        <div>
        <Box mx={40} mt={10}>
         
        <form>
            <h1  class="display-4" >Aprobar materias</h1> 
             <br></br>
            <label>
              <div class="input-group input-group-sm mb-3" >
                    <h4 >Fundamentos de ingeniería de software</h4> 
                    <button onClick={()=>save()} type="button" class="btn btn-primary">Aprobar</button>
                </div>   
          </label>
          <br></br>
          <label>
              <div class="input-group input-group-sm mb-3" >
                    <h4 >Álgebra lineal</h4> 
                    <Button  onClick={()=>save()} ariant = "contained" color="primary" >Aprobar</Button>
                </div>   
          </label>
          </form>
        </Box>
        </div>
            

        )
    }
}
