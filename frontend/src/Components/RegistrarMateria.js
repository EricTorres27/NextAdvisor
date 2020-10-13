import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'


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
        <Box mx={40} mt={10}>
         
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
                <button onClick={()=>save()} type="button" class="btn btn-primary">Registrar</button>
            <br></br> <br></br>
                <button type="button" class="btn btn-primary">Cancelar</button>
          </form>
          </Box>  
          </div>
            
        )
    }
}


