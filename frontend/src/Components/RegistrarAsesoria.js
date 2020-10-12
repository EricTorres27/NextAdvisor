import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import swal from 'sweetalert';



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
        
         
        <form>
            <h1  class="display-4" > Registrar asesoría</h1> 
             <br></br>
            <label  >
             
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Materias</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Fundamentos de ingeniería de software</option>
                    <option value="2"class="dropdown-item" >Finanzas personales</option>
                    <option value="3" class="dropdown-item" >Administración de proyectos</option>
                </select>
            </div>
                

            </label >
            <br></br>
          <label>
              <div class="input-group input-group-sm mb-3" >
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Tema</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                </div>   
          </label>     
            <br></br>
            <label  >
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Horarios</span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                </div>   
          </label>  
            <br></br>
                <button onClick={()=>save()} type="button" class="btn btn-primary">Registrar</button>
          </form>
            
            
        )
    }
}


