import React, { useEffect } from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import axios from 'axios';
import API from '../apis/api';

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
    cuenta_telefono: '',
    estudiante_semestre: '',
    estudiante_carrera: '',
    estudiante_calificacion: '',
    rol_id: ''
}

const EditarUsuario = (props) => {
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

    const getUsuario = async () => {
        await API.get('cuenta/obtenerCuenta/' + match.params.cuentaId)
            .then(response => {
                setValues(response.data);
                initialValues.cuenta_nombre = response.data.cuenta_nombre;
                initialValues.cuenta_apellido_paterno = response.data.cuenta_apellido_paterno;
                initialValues.cuenta_apellido_materno = response.data.cuenta_apellido_materno;
                initialValues.cuenta_genero = response.data.cuenta_genero;
                initialValues.cuenta_correo = response.data.cuenta_correo;
                initialValues.cuenta_nombre_usuario = response.data.cuenta_nombre_usuario;
                initialValues.cuenta_telefono = response.data.cuenta_telefono;
                initialValues.estudiante_semestre = response.data.estudiante_semestre;
                initialValues.estudiante_carrera = response.data.estudiante_carrera;
                initialValues.estudiante_calificacion = response.data.estudiante_calificacion;
                initialValues.rol_id = response.data.rol_id;
                console.log(initialValues);
                console.log(values);
                console.log(response.data);
            })

    }

    const peticionPutUsuario = async () => {
        try {
            const response = await API.put('cuenta/actualizarCuenta/'+match.params.cuentaId,
                {
                    "cuenta_nombre": values.cuenta_nombre,
                    "cuenta_apellido_materno": values.cuenta_apellido_materno,
                    "cuenta_apellido_paterno": values.cuenta_apellido_paterno,
                    "cuenta_genero": values.cuenta_genero,
                    "cuenta_correo": values.cuenta_correo,
                    "cuenta_nombre_usuario": values.cuenta_nombre_usuario,
                    "cuenta_telefono": values.cuenta_telefono,
                    "estudiante_semestre": values.estudiante_semestre,
                    "estudiante_carrera": values.estudiante_carrera,
                    "rol_id": values.rol_id,
                }
            )
            if (response.data.flag == 1) {
                swal({
                    title: "El usuario se ha editado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    window.location.href = "http://nextadvisor.com.mx/ConsultarUsuario";
                })
            } else {
                swal({
                    title: response.data.message,
                    text: "Cambie la información solicitada",
                    icon: "info"
                })
            }
        } catch (error) {
            if (error.response) {
                swal({
                    title: "Error: " + error.response.status,
                    text: "Verifique la información y vuelvalo a intentar",
                    icon: "error"
                })
            } else if (error.request) {
                swal({
                    title: "Error",
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error"
                })
            } else {
                swal({
                    title: "Error",
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error"
                })
            }
        }
    }

    const validacionIgual = () =>{
        let flag=0;
        if(initialValues.cuenta_nombre==values.cuenta_nombre &&
            initialValues.cuenta_apellido_paterno==values.cuenta_apellido_paterno &&
            initialValues.cuenta_apellido_materno==values.cuenta_apellido_materno &&
            initialValues.cuenta_genero==values.cuenta_genero &&
            initialValues.cuenta_correo == values.cuenta_correo &&
            initialValues.cuenta_nombre_usuario==values.cuenta_nombre_usuario &&
            initialValues.cuenta_telefono==values.cuenta_telefono &&
            initialValues.estudiante_semestre==values.estudiante_semestre &&
            initialValues.estudiante_carrera==values.estudiante_carrera &&
            initialValues.rol_id==values.rol_id
        ){
            flag=1;
        }
        return flag;
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(validacionIgual()==0){
            if (validate())
            confirmacion();
        }else{
            swal({
                title: "No se ha realizado ningun cambio",
                text: "Es necesario realizar al menos un cambio en la información",
                icon: "info"
            })
        }
    }

    const confirmacion = () => {
        swal({
            title: "¿Seguro que desea registrar al usuario?",
            text: "La información quedara guardada en la base de datos",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPutUsuario();
            }
        })
    }

    useEffect(() => {
        getUsuario();
    }, [])

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Editar usuario</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Link to="/ConsultUser">
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
                                        label="Genero"
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
                            </Grid>

                        </Grid>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Datos academicos</Typography>
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
                            <Grid item xs={12} sm={6}>
                                <Controls.SelectRol
                                    name="rol_id"
                                    label="Rol"
                                    value={values.rol_id}
                                    onChange={handleInputChange}
                                    error={errors.rol_id}
                                />
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

export default EditarUsuario
