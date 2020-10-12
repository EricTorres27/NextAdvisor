import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';




export default class MetodoPago extends Component {
    render() {
        
        return (
        
         
        <form>
            <h1  class="display-4" >Vista general de su tarifa</h1> 
             <br></br>
            <label  >
             
            <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Tipo de pago</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Efectivo</option>
                    <option value="2"class="dropdown-item" >Transferencia</option>
                    <option value="3" class="dropdown-item" >Ninguno</option>
                </select>
            </div>
                

            </label >
            <br></br>
          <label>
          <div class="input-group mb-3" >
                <div class="input-group-prepend">
                    <label class="input-group-text" for="inputGroupSelect01" >Tipo de moneda</label>
                </div>
                <select class="custom-select" id="inputGroupSelect01">
                    <option selected>Seleccione una opción</option>
                    <option value="1" class="dropdown-item" >Pesos mexicanos</option>
                    <option value="2"class="dropdown-item" >Dolares</option>
                </select>
            </div>
                
          </label>     
            <br></br>
            <label  >
              <div class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                    <span class="input-group-text" id="inputGroup-sizing-sm">Monto de la tarifa </span>
                </div>
                    <input type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm"></input>
                </div>   
          </label>
          <br></br>  
             <button type="button" class="btn btn-primary">Establecer</button>
             <br></br>  <br></br> 
            <button type="button" class="btn btn-primary">Eliminar tarifa</button>
          </form>
            
            
        )
    }
}
