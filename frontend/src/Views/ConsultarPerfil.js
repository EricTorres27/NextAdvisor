import React from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import axios from 'axios';

/*
            <Typography>{match.params.cuentaId}</Typography>

*/
const styles = {
    Paper: { height: 550, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

const initialValues = {
    cuenta_nombre: '',
    cuenta_apellido_paterno: '',
    cuenta_apellido_materno: '',
    cuenta_genero: '',
    cuenta_correo: '',
    cuenta_nombre_usuario: '',
    contraseña: '',
    contraseñaConfirmar: '',
    cuenta_telefono: '',
    estudiante_semestre: '',
    estudiante_carrera: '',
}

const ConsultarPerfil = (props) => {

    const {
        values,
        setValues
    } = useForm(initialValues);

    // const baseURL = "http://localhost:8000/api/cuenta/";

    const peticionGet = async () => {
        try {
            await axios.get(baseURL)
            .then(response => {
                setValues(response.data);
            })
        } catch (error) {

        }
    }

    const { match } = props;

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Consultar perfil</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Form>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Datos generales</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_nombre"
                                        label="Nombre"
                                        value={values.cuenta_nombre}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_apellido_paterno"
                                        label="Apellido paterno"
                                        value={values.cuenta_apellido_paterno}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_apellido_materno"
                                        label="Apellido materno"
                                        value={values.cuenta_apellido_materno}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_genero"
                                        label="Género"
                                        value={values.cuenta_genero}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_telefono"
                                        label="Telefono (10 digitos)"
                                        value={values.cuenta_telefono}
                                        type="number"
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_correo"
                                        label="Correo electronico"
                                        value={values.cuenta_correo}
                                    />
                                </Box>
                            </Grid>
                            <Box ml={3} mb={2}>
                                <Typography variant="h5">Datos de la cuenta</Typography>
                            </Box>
                            <Grid item xs={12} sm={12}>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="cuenta_nombre_usuario"
                                        label="Nombre de usuario"
                                        value={values.cuenta_nombre_usuario}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="contraseña"
                                        label="Contraseña"
                                        value={values.contraseña}
                                        type={values.showPassword ? 'text' : 'password'}
                                    />
                                </Box>

                            </Grid>

                        </Grid>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Datos académicos</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="estudiante_carrera"
                                        label="Carrera"
                                        value={values.estudiante_carrera}
                                    />
                                </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <TextField
                                        disabled
                                        variant="outlined"
                                        name="estudiante_semestre"
                                        label="Semestre"
                                        value={values.estudiante_semestre}
                                        type="number"
                                        pattern="[0-9]*"
                                    />
                                </Box>
                          </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Box ml={3} mt={1} align="right">
                                    <Button size="large" href="/EditarPerfil">
                                      Editar
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Paper>
        </div>
    )
}

export default ConsultarPerfil
