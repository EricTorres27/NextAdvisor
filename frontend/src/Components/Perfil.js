import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, { Component, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';




export default class passSubject extends Component {
    render() {

        return (
        <div>
        <Box mx={35} mt={5}>

        <form>
            <h1  class="display-4" >Mi perfil</h1>
             <br></br>
            <label>
              <div class="input-group input-group-sm mb-3" >
                    <h4 >Diana Estefanía Ortiz Ledesma</h4>
              </div>
              <div class="input-group input-group-sm mb-3" >
                    <h5 >Estudiante</h5>
              </div>
          </label>
          <br></br>
          <label>
              <div class="input-group input-group-sm mb-3" >
              <Link to="EditarPerfil">
                    <Button type="submit" color="primary" variant="contained">Editar perfil</Button>
            </Link>
                </div>
          </label>
          </form>
        </Box>
        </div>


        )
    }
}
