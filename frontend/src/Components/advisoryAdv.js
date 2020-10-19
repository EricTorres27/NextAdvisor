
import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, {Component,  Fragment, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import { spacing } from '@material-ui/system';


export default class passSubject extends Component {
    render() {

            const passSubject = () => {


               
                
                

                const BootstrapInput = withStyles((theme) => ({
                    root: {
                        '& > *': {
                            marginTop: theme.spacing(10),
                            margin: theme.spacing(10),
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
                            borderRadius: 10,
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
                <Typography color="white" align="center" variant="h3">Mis asesorias</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Container maxWidth="sm">
                        <form className="row" >
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={12}>
                                    <Typography variant="subtitle1">Cálculo diferencial</Typography>
                                    <Typography variant="subtitle1">Fundamentos de ingeniería de software</Typography>
                                    <Typography variant="subtitle1">Sistemas inteligentes</Typography>
                                    <Typography variant="subtitle1">Finanzas personales</Typography>
                                    <Typography variant="subtitle1">Administración de proyectos</Typography>
                                    <Typography variant="subtitle1">Microcontroladores</Typography>
                                    <Typography variant="subtitle1">Interconexión de redes</Typography>
                                    <Typography variant="subtitle1">Diseño gráfico</Typography>
                                    <Typography variant="subtitle1">FIS</Typography>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Box  ml={5} mt={10}>
                                        
                                    <Link to="RegistrarAsesoria">
                                        <Button color="primary" variant="contained">Registrar Asesoría</Button>
                                    </Link>     
                                    </Box >
                                    <Box ml={35} mt={-4.4}>
                                    <Link to="EditarAsesoria">
                                        <Button color="primary" variant="contained">Editar Asesoría</Button>
                                    </Link>   

                                    </Box>  
                                   
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Box>
            </Paper>
        </Fragment>
        );
    }
    }


