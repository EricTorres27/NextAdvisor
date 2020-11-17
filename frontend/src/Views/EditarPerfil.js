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

const EditarPerfil = (props) => {
    const { match } = props;
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
        if ('contraseña' in fieldValues)
            temp.contraseña = fieldValues.contraseña.length > 6 ? "" : "La contraseña debe ser mayor 6 caracteres"
        if ('contraseñaConfirmar' in fieldValues)
            temp.contraseñaConfirmar = fieldValues.contraseñaConfirmar.length > 0 && values.contraseña === fieldValues.contraseñaConfirmar ? "" : "La contraseña debe ser la misma"
        if ('rol_id' in fieldValues)
            temp.rol_id = fieldValues.rol_id.length != 0 ? "" : "Esta campo es requerido"
        if ('cuenta_nombre_usuario' in fieldValues)
            temp.cuenta_nombre_usuario = fieldValues.cuenta_nombre_usuario ? "" : "Esta campo es requerido"
        if ('estudiante_carrera' in fieldValues)
            temp.estudiante_carrera = fieldValues.estudiante_carrera.length < 5 && fieldValues.estudiante_carrera.length > 0 ? "" : "Esta campo debe ser menor a 5 caracteres"
        if ('estudiante_semestre' in fieldValues)
            temp.estudiante_semestre = fieldValues.estudiante_semestre < 11 && fieldValues.estudiante_semestre > 1 ? "" : "El semestre debe ser mayor a 1 o menor a 10"
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);

    const handleSubmit = e => {
        e.preventDefault()
        if (validate())
            confirmacion();
    }

    const confirmacion = () => {
        swal({
            title: "¿Seguro que desea registrar al usuario?",
            text: "La información quedara guardada en la base de datos",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                //peticionPost();
            }
        })
    }
     const baseURL = "http://localhost:8000/api/cuenta/";

    const peticionGet = async () => {
        try {
            await axios.get(baseURL)
            .then(response => {
                setValues(response.data);
            })
        } catch (error) {

        }
    }

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Editar perfil</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Link to="/ConsultarPerfil">
                    <ArrowBackIcon button fontSize="large" />
                </Link>
                <Box mt={5} ml={5}>
                    <Form onSubmit={handleSubmit}>
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
                                        label="Telefono (10 digitos)"
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
                            <Box ml={3} mb={2}>
                                <Typography variant="h5">Datos de la cuenta</Typography>
                            </Box>
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
                                        name="contraseña"
                                        label="Contraseña"
                                        value={values.contraseña}
                                        onChange={handleInputChange}
                                        type={values.showPassword ? 'text' : 'password'}
                                        error={errors.contraseña}
                                    />
                                </Box>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="contraseñaConfirmar"
                                        label="Confirmar contraseña"
                                        value={values.contraseñaConfirmar}
                                        onChange={handleInputChange}
                                        type={values.showPassword ? 'text' : 'password'}
                                        error={errors.contraseñaConfirmar}
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
                                    <Controls.Input
                                        name="estudiante_carrera"
                                        label="Carrera"
                                        value={values.estudiante_carrera}
                                        onChange={handleInputChange}
                                        error={errors.estudiante_carrera}
                                    />
                                </Box>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="estudiante_semestre"
                                        label="Semestre"
                                        value={values.estudiante_semestre}
                                        type="number"
                                        pattern="[0-9]*"
                                        onChange={handleInputChange}
                                        error={errors.estudiante_semestre}
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

export default EditarPerfil
