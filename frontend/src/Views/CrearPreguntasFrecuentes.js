import React from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import API from '../apis/api';

const cuentaId=localStorage.getItem("cuentaId");
const initialValues = {
    administrador_id: cuentaId,
    pregunta_pregunta: '',
    pregunta_respuesta: '',

}

const styles = {
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}
const CrearPreguntasFrecuentes = (props) => {

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('pregunta_pregunta' in fieldValues)
            temp.pregunta_pregunta = fieldValues.pregunta_pregunta ? "" : "Este campo es obligatorio."
        if ('pregunta_respuesta' in fieldValues)
            temp.pregunta_respuesta = fieldValues.pregunta_respuesta ? "" : "Este campo es obligatorio."
        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")
    }
    const handleSubmitPregunta = e => {
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
        try {
            const response = await API.post('pregunta',
                {
                    "pregunta_pregunta": values.pregunta_pregunta,
                    "pregunta_respuesta": values.pregunta_respuesta,
                    "administrador_id": cuentaId,
                }
            )
            if (response.data.flag == 1) {
                swal({
                    title: "La pregunta se ha creado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    props.history.push("/PreguntasFrecuentes");
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
    }

    const confirmacion = () => {
        swal({
            title: "¿Está seguro que desea registrar la nueva pregunta?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPost();
            }
        })
    }

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Crear nuevo pregunta</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Link to="/PreguntasFrecuentes">
                    <ArrowBackIcon button fontSize="large" />
                </Link>
                <Box mt={5} ml={5}>
                    <Form onSubmit={handleSubmitPregunta}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="pregunta_pregunta"
                                        label="Pregunta"
                                        value={values.pregunta_pregunta}
                                        onChange={handleInputChange}
                                        error={errors.pregunta_pregunta}
                                    />
                                </Box>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <Box mb={2} mr={2} ml={2}>
                                    <Controls.Input
                                        name="pregunta_respuesta"
                                        label="Respuesta"
                                        value={values.pregunta_respuesta}
                                        onChange={handleInputChange}
                                        error={errors.pregunta_respuesta}
                                        multiline
                                        inputProps={{
                                            style: {
                                                height: 100,
                                                padding: '0 14px',
                                            },
                                        }}
                                    />
                                </Box>
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
                        </Grid>
                    </Form>
                </Box>
            </Paper>
        </div>
    )
}

export default CrearPreguntasFrecuentes
