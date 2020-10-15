import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';


export default class RegistrarMateria extends Component {
    render() {
        const save=()=>{
            swal({
                title:"Materia registrada exitosamente",
                
                icon: "success",
                button: "Aceptar"
            });
           
        }
        
        return (
        <div>
       <Typography variant="h3">
        <Box mx={30} mt={5}>
         
        <form>
            <h1  class="display-4" > Registrar materia</h1> 
             <br></br>
            <label  >
             
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Área de la materia</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Ingeniería</option>
                    <option value="2"class="dropdown-item" >Ciencias sociales</option>
                    <option value="3" class="dropdown-item" >Artes</option>
                </select>
            </div>
                

            </label >
            <br></br>
          <label>
              <div class="input-group input-group-sm mb-3" >
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Nombre de la materia</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                </div>   
          </label>     
           
            <br></br>
                <Button onClick={()=>save()} variant = "contained" color="primary">Registrar</Button>
            <br></br>
                <Button variant = "contained" color="primary">Cancelar</Button>
          </form>
          </Box>  
          </Typography>
          </div>
            
        )
    }
}


