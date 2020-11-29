import React from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import axios from 'axios';
import API from '../apis/api';
import jwt_decode from "jwt-decode";

const initialValues = {
    cuenta_nombre: '',
    cuenta_apellido_paterno: '',
    cuenta_apellido_materno: '',
    cuenta_genero: '',
    cuenta_correo: '',
    cuenta_nombre_usuario: '',
    password: '',
    passwordConfirmar: '',
    cuenta_telefono: '',
    administrador_ocupacion: '',
}

const styles = {
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}



export const CrearAdministrador = () => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('cuenta_nombre' in fieldValues)
            temp.cuenta_nombre = fieldValues.cuenta_nombre ? "" : "Este campo es obligatorio."
        if ('cuenta_apellido_paterno' in fieldValues)
            temp.cuenta_apellido_paterno = fieldValues.cuenta_apellido_paterno ? "" : "Este campo es obligatorio."
        if ('cuenta_apellido_materno' in fieldValues)
            temp.cuenta_apellido_materno = fieldValues.cuenta_apellido_materno ? "" : "Este campo es obligatorio."
        if ('cuenta_correo' in fieldValues)
            temp.cuenta_correo = (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(fieldValues.cuenta_correo) ? "" : "Cuenta de correo invalida"
        if ('cuenta_telefono' in fieldValues)
            temp.cuenta_telefono = fieldValues.cuenta_telefono.length == 10 ? "" : "Se requieren 10 digitos."
        if ('cuenta_genero' in fieldValues)
            temp.cuenta_genero = fieldValues.cuenta_genero.length != 0 ? "" : "Esta campo es requerido"
        if ('password' in fieldValues)
            temp.password = fieldValues.password.length > 6 ? "" : "La contraseña debe ser mayor 6 caracteres"
        if ('passwordConfirmar' in fieldValues)
            temp.passwordConfirmar = fieldValues.passwordConfirmar.length > 0 && values.password === fieldValues.passwordConfirmar ? "" : "La contraseña debe ser la misma"
        if ('cuenta_nombre_usuario' in fieldValues)
            temp.cuenta_nombre_usuario = fieldValues.cuenta_nombre_usuario ? "" : "Esta campo es requerido"
        if ('administrador_ocupacion' in fieldValues)
            temp.administrador_ocupacion = fieldValues.administrador_ocupacion ? "" : "Esta campo es requerido"
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")

    }

    const handleSubmitAdmin = e => {
        e.preventDefault()
        if (validate())
            confirmacion();

    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const peticionPost = async () => {
        if (revisarToken) {
            try {
                const response = await API.post('cuenta/crearAdministrador',
                    {
                        "cuenta_nombre_usuario": values.cuenta_nombre_usuario,
                        "cuenta_correo": values.cuenta_correo,
                        "password": values.password,
                        "cuenta_telefono": values.cuenta_telefono,
                        "cuenta_nombre": values.cuenta_nombre,
                        "cuenta_apellido_paterno": values.cuenta_apellido_paterno,
                        "cuenta_apellido_materno": values.cuenta_apellido_materno,
                        "cuenta_genero": values.cuenta_genero,
                        "administrador_ocupacion": values.administrador_ocupacion,
                        "rol_id": 3
                    }, { headers: { "Authorization": "Bearer " + localStorage.token } }
                )
                if (response.data.flag == 1) {
                    swal({
                        title: "El usuario se ha creado con éxito",
                        icon: "success"
                    }).then(respuesta => {
                        window.location.href = "http://www.nextadvisor.com.mx/ConsultarUsuario";
                    })
                } else {
                    swal({
                        title: response.data.message,
                        text: "Cambie la información solicitada",
                        icon: "info"
                    })
                }

            } catch (error) {
                // Error 😨
                if (error.response) {
                    /*
                     * The request was made and the server responded with a
                     * status code that falls out of the range of 2xx
                     */
                    swal({
                        title: "Error: " + error.response.status,
                        text: "Verifique la información y vuelva a intentarlo.",
                        icon: "error"
                    })
                } else if (error.request) {
                    /*
                     * The request was made but no response was received, `error.request`
                     * is an instance of XMLHttpRequest in the browser and an instance
                     * of http.ClientRequest in Node.js
                     */
                    swal({
                        title: "Error",
                        text: "No hubo respuesta, intentelo más tarde.",
                        icon: "error"
                    })
                } else {
                    // Something happened in setting up the request and triggered an Error
                    swal({
                        title: "Error",
                        text: "No hubo respuesta, intentelo más tarde.",
                        icon: "error"
                    })
                }
                console.log(error);

            }
        } else {
            swal({
                title: "Sesión expirada",
                text: "Devolviendo a la pantalla de inicio",
                icon: "info"
            }).then(respuesta => {
                localStorage.clear();
                window.location.href = "http://www.nextadvisor.com.mx";
            })
        }

    }

    const confirmacion = () => {
        swal({
            title: "¿Está seguro que desea registrar al usuario?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPost();
            }
        })
    }

    const revisarToken = () => {
        let time = Date.now()
        time = time / 1000;
        time = Math.trunc(time);
        let timeToken = jwt_decode(localStorage.token);
        let timeLeft = timeToken.exp - time
        if (timeLeft > 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Crear nuevo administrador</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Link to="/ConsultUser">
                    <ArrowBackIcon button fontSize="large" />
                </Link>
                <Box mt={5} ml={5}>
                    <Form onSubmit={handleSubmitAdmin}>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Datos generales</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_nombre"
                                        label="Nombre"
                                        value={values.cuenta_nombre}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_nombre}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_apellido_paterno"
                                        label="Apellido paterno"
                                        value={values.cuenta_apellido_paterno}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_apellido_paterno}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_apellido_materno"
                                        label="Apellido materno"
                                        value={values.cuenta_apellido_materno}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_apellido_materno}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Select
                                        name="cuenta_genero"
                                        label="Género"
                                        value={values.cuenta_genero}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_genero}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_telefono"
                                        label="Telefono(10 digitos)"
                                        value={values.cuenta_telefono}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_telefono}
                                        type="number"
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_correo"
                                        label="Correo electronico"
                                        value={values.cuenta_correo}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_correo}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="cuenta_nombre_usuario"
                                        label="Nombre de usuario"
                                        value={values.cuenta_nombre_usuario}
                                        onChange={handleInputChange}
                                        error={errors.cuenta_nombre_usuario}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="password"
                                        label="Contraseña"
                                        value={values.password}
                                        onChange={handleInputChange}
                                        type={values.showPassword ? 'text' : 'password'}
                                        error={errors.password}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="passwordConfirmar"
                                        label="Confrimar contraseña"
                                        value={values.passwordConfirmar}
                                        onChange={handleInputChange}
                                        type={values.showPassword ? 'text' : 'password'}
                                        error={errors.passwordConfirmar}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Datos administrativos</Typography>
                        </Box>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="administrador_ocupacion"
                                        label="Ocupación"
                                        value={values.administrador_ocupacion}
                                        onChange={handleInputChange}
                                        error={errors.administrador_ocupacion}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Box ml={3} mt={1} align="right">
                                    <Controls.ButtonSubmit
                                        size="large"
                                        text="Confirmar"
                                        type="submit"
                                    />
                                    <Controls.ButtonSubmit
                                        size="large"
                                        text="Reiniciar"
                                        color="default"
                                        onClick={resetForm}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Form>
                </Box>
            </Paper>
        </div>
    )
}
