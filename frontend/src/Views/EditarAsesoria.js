import React, { useState, useEffect } from 'react';
import { Box, Grid, Typography, Paper, Container, Button, Card, CardContent, CardMedia, makeStyles, TextField } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import API from '../apis/api';

const initialValues = {
    oferta_id: '',
    oferta_fecha: '',
    oferta_tarifa: '',
    materia_id: '',
    estudiante_id: '',
}

const styles = makeStyles(theme => ({
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}))

const EditarAsesoria = (props) => {


    const { match } = props;
    const classes = styles()
    const [materia, setMateria] = useState([]);

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('oferta_fecha' in fieldValues)
            temp.oferta_fecha = fieldValues.oferta_fecha ? "" : "Este campo es obligatorio."
        if ('oferta_tarifa' in fieldValues)
            temp.oferta_tarifa = fieldValues.oferta_tarifa ? "" : "Este campo es obligatorio."
        if ('materia_id' in fieldValues)
            temp.materia_id = fieldValues.materia_id ? "" : "Este campo es obligatorio."

        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")

    }

    const validacionIgual = () => {
        let flag = 0;
        if (initialValues.oferta_fecha == values.oferta_fecha && initialValues.oferta_tarifa == values.oferta_tarifa && initialValues.materia_id == values.materia_id) {
            flag = 1;
        }
        return flag;
    }
    const handleSubmitAsesoria = e => {
        e.preventDefault()
        if (validacionIgual() == 0) {
            if (validate())
                confirmacion();
        } else {
            swal({
                title: "No se ha realizado ningún cambio.",
                text: "Es necesario realizar al menos un cambio en la información.",
                icon: "info"
            })
        }
    }

    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(initialValues, true, validate);


    const peticionGetMateria = async () => {
        API.get('materias/getMateria')
            .then(response => {
                setMateria(response.data);
            })
    }

    const peticionGet = async () => {
        await API.get('/' + match.params.oferta_id)
            .then(response => {
                setValues(response.data);
                initialValues.oferta_fecha = response.data.oferta_fecha;
                initialValues.oferta_tarifa = response.data.oferta_tarifa;
                initialValues.materia_id = response.data.materia_id;
                initialValues.estudiante_id = response.data.estudiante_id;
                initialValues.oferta_id = response.data.oferta_id;


            })
    }

    const peticionPut = async () => {
        try {
            const response = await API.put("asesoria/" + values.oferta_id,
                {
                    "oferta_fecha": values.oferta_fecha,
                    "oferta_tarifa": values.oferta_tarifa,
                    "materia_id": values.materia_id,
                }
            )
            if (response.data.flag == 1) {
                swal({
                    title: "La información se ha guardado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    props.history.push("/MisAsesorias");
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
        }
    }

    const confirmacion = () => {
        swal({
            title: "¿Está seguro que desea registrar la nueva información de la Asesoria?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPut();
            }
        })
    }
    useEffect(() => {

        peticionGet();
        peticionGetMateria();
    }, [])
    const role = localStorage.getItem("rol");
    if (role == "administrador" || role=="asesor") {
        return (
            <div style={{ height: "650px" }}>
                <Box color="primary.contrastText" mb={1}>
                    <Typography color="white" align="center" variant="h3">Editar asesoría</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>
                    <Link to="/RegistrarAsesoria">
                        <ArrowBackIcon button fontSize="large" />
                    </Link>
                    <Box mt={5} ml={5}>
                        <Form onSubmit={handleSubmitAsesoria}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>

                                    <Controls.Input
                                        name="oferta_fecha"
                                        label="Fecha : AAAA-MM-DD"
                                        value={values.oferta_fecha}
                                        onChange={handleInputChange}
                                        error={errors.oferta_fecha}
                                    />

                                </Grid>

                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <Controls.SelecTarifa
                                        name="oferta_tarifa"
                                        label="Tarifa MXN"
                                        value={values.oferta_tarifa}
                                        onChange={handleInputChange}
                                        error={errors.oferta_tarifa}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl variant="outlined" className={classes.selects} >
                                        <InputLabel>Materia</InputLabel>
                                        <MuiSelect
                                            name="materia_id"
                                            value={values.materia_id}
                                            onChange={handleInputChange}
                                        >
                                            <MenuItem value=''>Elija una materia</MenuItem>
                                            {materia.map((materia) => (
                                                <MenuItem key={materia.materia_id} value={materia.materia_id}>{materia.materia_nombre}</MenuItem>
                                            ))}


                                        </MuiSelect>
                                    </FormControl>
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
    } else {
        return <div>
            <Redirect to="/inicio" />
        </div>
    }
}

export default EditarAsesoria
