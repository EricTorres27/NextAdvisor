import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem} from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';


const CreateUser = () => {

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


    const [genero, setGenero] = React.useState('');
    const handleChange = (event) => {
        setGenero(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };
    const [role, setRole] = React.useState('');
    const handleChangeRole = (event) => {
        setRole(event.target.value);
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    };

    return (
        <Fragment>
            <div style={{height:"650px"}}>
                <Box color="primary.contrastText" mb={3}>
                    <Typography color="white" align="center" variant="h3">Crear nuevo usuario</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>
                    <Link to="/ConsultUser">
                    <ArrowBackIcon button fontSize="large"/>
                    </Link>
                    <Box mt={5} ml={5}>
                        <Container maxWidth="sm">
                            <form className="row" onSubmit={enviarDatos}>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={6}>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1"> Nombre</Typography>
                                            <input type="text" placeholder="Gustavo" className="form-control" onChange={handleInputChange} name="nombre"></input>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Apellido Paterno</Typography>
                                            <input type="text" placeholder="Rivera" className="form-control" onChange={handleInputChange} name="apellidoPaterno"></input>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Apellido Materno</Typography>
                                            <input type="text" placeholder="Martínez" className="form-control" onChange={handleInputChange} name="apellidoMaterno"></input>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Genero</Typography>
                                            <Select
                                                name="genero"
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={genero}
                                                onChange={handleChange}
                                                input={<BootstrapInput />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="Hombre">Hombre</MenuItem>
                                                <MenuItem value="Mujer">Mujer</MenuItem>
                                                <MenuItem value="Otro">Otro</MenuItem>
                                            </Select>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Correo</Typography>
                                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="correo"></input>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Telefono</Typography>
                                            <input type="text" placeholder="Nombre" className="form-control" onChange={handleInputChange} name="telefono"></input>
                                        </Box>
                                    </Grid>
                                    <Divider />
                                    <Grid item xs={12} sm={12}>
                                        <Typography variant="subtitle1">Datos administrativos</Typography>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1"> Nombre de usuario</Typography>
                                            <input type="text" placeholder="TrainerGus" className="form-control" onChange={handleInputChange} name="nombreUsuario"></input>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Carrera</Typography>
                                            <input type="text" placeholder="ISC" className="form-control" onChange={handleInputChange} name="carrera"></input>
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Semestre</Typography>
                                            <input type="text" placeholder="1" className="form-control" onChange={handleInputChange} name="semestre"></input>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Box mb={2}>
                                            <Typography variant="subtitle1">Rol</Typography>
                                            <Select
                                                name="role"
                                                labelId="demo-customized-select-label"
                                                id="demo-customized-select"
                                                value={role}
                                                onChange={handleChangeRole}
                                                input={<BootstrapInput />}
                                            >
                                                <MenuItem value="">
                                                    <em>None</em>
                                                </MenuItem>
                                                <MenuItem value="Estudiante">Estudiante</MenuItem>
                                                <MenuItem value="Asesor">Asesor</MenuItem>
                                            </Select>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} sm={4}>

                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box mt={5} align="center">
                                            <Button type="submit" color="primary" variant="contained">Enviar</Button>
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

export default CreateUser;
