import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import swal from 'sweetalert';
import {Box} from '@material-ui/core'
import { Typography } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import { positions } from '@material-ui/system';



  

export default class RegistrarAsesoria extends Component {
    
    

   
    render() {
        
        const save=()=>{
            swal({
                title:"Asesoría registrada exitosamente",
                
                icon: "success",
                button: "Aceptar"
            });


           
     
        }

       
        
        return (
       <div>
        <Typography variant="h3" >
           
        <Box   style={{
        textAlign:'center'
    }} >
        <form>
            <h1  class="display-4" >Registrar asesoría</h1> 
             <br></br>
            <label  >
             
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01">Materia</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Ingeniería de software</option>
                    <option value="2"class="dropdown-item" >Finanzas personales</option>
                    <option value="3" class="dropdown-item" >Administración de proyectos</option>
                </select>
            </div>
                

            </label >
            <br></br>
            <label>
          <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Método de pago</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Efectivo</option>
                    <option value="2"class="dropdown-item" >Transferencia</option>
                </select>
            </div>
            </label>
            <br></br>
          <label>
              <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-">Tema</span>
                </div>
                    <input type="text" class="form-control" aria-label="Large" aria-describedby="inputGroup-sizing"></input>
                </div>   
          </label>     
            <br></br>
            <label  >
              <div class="input-group input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing">Horario</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing"></input>
                </div>   
          </label> 
          <br></br>
          <label  >
              <div class="input-group input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing">Día</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing"></input>
                </div>   
          </label> 
          <br></br>
            <label  >
              <div class="input-group input-group mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroupSelect01" label="Size" size="Normal">Monto</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing"></input>
                </div>   
          </label> 
               
            <br></br>
                <Button  onClick={()=>save()} variant = "contained" color="primary" disableElevation >Registrar</Button>
          </form>
         <div>
            
         </div>
    
          </Box>
          
          </Typography>
          
        </div>      
            
        )
    }
}

