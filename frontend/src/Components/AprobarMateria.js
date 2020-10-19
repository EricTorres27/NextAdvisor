import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'





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
                    <button onClick={()=>save()} type="button" class="btn btn-primary">Aprobar</button>
                </div>   
          </label>
          </form>
        </Box>
        </div>
            
            
        )
    }
}
