import React, { useEffect } from 'react';
import { Box, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import API from '../apis/api';
import { Link, Redirect } from 'react-router-dom';

const initialValues = {
    administrador_id: '',
    pregunta_pregunta: '',
    pregunta_respuesta: '',
    pregunta_id: '',

}

const useStyles = makeStyles((theme) => ({
    Paper: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
            height: 700,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            height: 500,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            height: 500,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
    },
    Title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.0rem',
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.0rem',
        },
        [theme.breakpoints.up('lg')]: {

        },
    }
}))
const EditarPregunta = (props) => {
    const styles = useStyles();
    const { match } = props;
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
    const validacionIgual = () => {
        let flag = 0;
        if (initialValues.pregunta_pregunta == values.pregunta_pregunta && initialValues.pregunta_respuesta == values.pregunta_respuesta) {
            flag = 1;
        }
        return flag;
    }
    const handleSubmitPregunta = e => {
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

    const peticionGet = async () => {
        await API.get('pregunta/' + match.params.preguntaId)
            .then(response => {
                setValues(response.data);
                initialValues.administrador_id = response.data.administrador_id;
                initialValues.pregunta_pregunta = response.data.pregunta_pregunta;
                initialValues.pregunta_respuesta = response.data.pregunta_respuesta;
                initialValues.pregunta_id = response.data.pregunta_id;
            })
    }

    const peticionPut = async () => {
        try {
            const response = await API.put('pregunta/' + values.pregunta_id,
                {
                    "pregunta_pregunta": values.pregunta_pregunta,
                    "pregunta_respuesta": values.pregunta_respuesta,
                    "administrador_id": values.administrador_id,
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
        }
    }

    const confirmacion = () => {
        swal({
            title: "¿Está seguro que desea registrar la nueva información de la pregunta?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPut();
            }
        })
    }


    useEffect(() => {
        if (localStorage.getItem("rol") != 'administrador') {
            props.history.goBack();
        }
        peticionGet();
    }, [])

    return (
        <div style={{ height: "650px" }}>
            <Box className={styles.Title} color="primary.contrastText" mb={1}>
                <Typography className={styles.Title} color="white" align="center" variant="h3">Editar pregunta</Typography>
            </Box>
            <Paper elevation={3} className={styles.Paper}>
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

export default EditarPregunta
