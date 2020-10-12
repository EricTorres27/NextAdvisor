import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import swal from 'sweetalert';




export default class EditarRegistroAsesoria extends Component {
    render() {
        
        const showAlert=()=>{
            swal({
                title:"¿Seguro que desea eliminar el registro de asesoría?",
                icon: "warning",
                buttons: ["No", "Si"]

            }).then(respuesta=>{
                if(respuesta){
                    swal({
                        text: "El registro se ha eliminado con éxito",
                        icon: "success"})

                }
            })
        }
        const save=()=>{
            swal({
                title:"Cambios guardados exitosamente",
                
                icon: "success",
                button: "Aceptar"
            });
           
        }
        return (
        
         
        <form>
            <h1  class="display-4" >Editar asesoría</h1> 
             <br></br>
            <label  >
             
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Materia</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Matematicas</option>
                    <option value="2"class="dropdown-item" >Español</option>
                    <option value="3" class="dropdown-item" >Historia</option>
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
             <button onClick={()=>save()} type="button" class="btn btn-primary">Guardar</button>
             <br></br>  <br></br> 
            <button type="button" class="btn btn-primary">Cancelar</button>
            <br></br>   <br></br>  
             <button onClick={()=>showAlert()} type="button" class="btn btn-primary">Eliminar registro</button>
          </form>
            
            
        )
    }
}
