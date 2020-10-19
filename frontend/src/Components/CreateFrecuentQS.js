import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';


const CreateFrecuentQS = () => {
    const [datos, setDatos] = useState({
        nombre: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        genero: '',
        correo: '',
        telefono: ''
    })
    const handleInputChange = (event) => {
        // console.log(event.target.name)
        // console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        event.preventDefault();
        console.log('enviando datos...' + datos)
    }

    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 200, marginRight: 200, overflowY: 'auto' }
    }
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
    return (
        <Fragment>
            <div style={{ height: "650px" }}>
                <Box color="primary.contrastText" mb={3}>
                    <Typography color="white" align="center" variant="h3">Crear pregunta frecuente</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>
                    <Link to="/PreguntasFrecuentes">
                        <ArrowBackIcon button fontSize="large" />
                    </Link>
                    <Box mt={5} ml={5}>
                        <Container maxWidth="sm">
                            <form className="row" onSubmit={enviarDatos}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Box mb={1}>
                                            <Typography variant="subtitle1">Pregunta</Typography>
                                            <input type="text" placeholder="¿Como inicio sesión" className="form-control" onChange={handleInputChange} name="nombre"></input>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12}>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Respuesta</Typography>
                                            <input type="text" placeholder="Texto" className="form-control" onChange={handleInputChange} name="apellidoPaterno"></input>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>

                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box mt={5} align="center">
                                            <Button type="submit" color="primary" variant="contained">Crear</Button>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                    </Grid>
                                </Grid>
                            </form>
                        </Container>
                    </Box>
                </Paper>
            </div>
        </Fragment>
    );
}

export default CreateFrecuentQS
