import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, {Component,  Fragment, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';



export default class MetodoPago extends Component {
    render() {
        
        const deleted=()=>{
            swal({
                title:"¿Seguro que desea eliminar la tarifa?",
                icon: "warning",
                buttons: ["No", "Si"]

            }).then(respuesta=>{
                if(respuesta){
                    swal({
                        title: "El registro se ha eliminado con éxito",
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
        
        const passSubject = () => {

            const BootstrapInput = withStyles((theme) => ({
                root: {
                    'label + &': {
                        marginTop: theme.spacing(3),
                    },
                },
                input: {
                    borderRadius: 4,
                    position: 'relative',
                    backgroundColor: theme.palette.background.paper,
                    border: '1px solid #ced4da',
                    fontSize: 16,
                    padding: '9px 26px 10px 12px',
                    width: '245px',
                    transition: theme.transitions.create(['border-color', 'box-shadow']),
                    // Use the system font instead of the default Roboto font.
                    fontFamily: [
                        '-apple-system',
                        'BlinkMacSystemFont',
                        '"Segoe UI"',
                        'Roboto',
                        '"Helvetica Neue"',
                        'Arial',
                        'sans-serif',
                        '"Apple Color Emoji"',
                        '"Segoe UI Emoji"',
                        '"Segoe UI Symbol"',
                    ].join(','),
                    '&:focus': {
                        borderRadius: 4,
                        borderColor: '#80bdff',
                        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
                    },
                },
            }))(InputBase);
           
       
    }
    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 200, marginRight: 200, overflowY: 'auto' }
    };
        return (
        
       
            <Fragment>
            <Box color="primary.contrastText" mb={3}>
                <Typography color="white" align="center" variant="h3">Vista general de su tarifa</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Container maxWidth="sm">
                        <form className="row" >
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12}>
                                <Box mb={2}>
                                        <Typography variant="subtitle1">Tipo de pago</Typography>
                                        <Select
                                            
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                           
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem >Efectivo</MenuItem>
                                            <MenuItem >Transferencia</MenuItem>
                                            <MenuItem >Ninguno</MenuItem>
                                        </Select>
                                    </Box>
                                    <Box mb={2}>
                                        <Typography variant="subtitle1">Tipo de moneda</Typography>
                                        <Select
                                            
                                            labelId="demo-customized-select-label"
                                            id="demo-customized-select"
                                           
                                        >
                                            <MenuItem value="">
                                                <em>None</em>
                                            </MenuItem>
                                            <MenuItem >Pesos mexicanos</MenuItem>
                                            <MenuItem >Dolares</MenuItem>
                                            
                                        </Select>
                                    </Box>
                                    <Box mb={2}>
                                        <Typography variant="subtitle1">Monto de la tarifa por hora </Typography>
                                        <input type="text"  className="form-control" ></input>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Box  ml={10} mt={10}>
                                        <Button color="primary" variant="contained" onClick={()=>save()}>Establecer</Button>        
                                    </Box >
                                    <Box ml={40} mt={-4.4}>
                                        <Button color="primary" variant="contained" onClick={()=>deleted()}>Eliminar </Button>
                                            
                                    </Box>    

                                        
                                   
                                </Grid>
                               
                            </Grid>
                        </form>
                    </Container>
                </Box>
            </Paper>
        </Fragment>
            
        )
    }
}
