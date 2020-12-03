import React, { useEffect } from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import API from '../apis/api';

const initialValues = {
    materia_id: '',
    materia_nombre: '',
    administrador_id: '',
    area_id: '',
}
const styles = {
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

const EditarMateria = (props) => {
    const { match } = props;
    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('materia_nombre' in fieldValues)
            temp.materia_nombre = fieldValues.materia_nombre ? "" : "Este campo es obligatorio."
        if ('area_id' in fieldValues)
            temp.area_id = fieldValues.area_id ? "" : "Este campo es obligatorio."

        setErrors({
            ...temp
        })
        if (fieldValues == values)
            return Object.values(temp).every(x => x == "")

    }
    const validacionIgual = () => {
        let flag = 0;
        if (initialValues.materia_nombre == values.materia_nombre && initialValues.area_id == values.area_id) {
            flag = 1;
        }
        return flag;
    }
    const handleSubmitMateria = e => {
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
        await API.get('materia/' + match.params.materia_id)
            .then(response => {
                setValues(response.data);
                initialValues.area_id = response.data.area_id;
                initialValues.materia_nombre = response.data.materia_nombre;
                initialValues.materia_id = response.data.materia_id;
                initialValues.administrador_id = response.data.administrador_id;

            })
    }

    const peticionPut = async () => {
        try {
            const response = await API.put("materia/" + values.materia_id,
                {
                    "area_id": values.area_id,
                    "materia_nombre": values.materia_nombre,
                    //"materia_id": values.materia_id,
                }
            )
            if (response.data.flag == 1) {
                swal({
                    title: "La información se ha guardado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    props.history.push("/subjectAdmin");
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
            title: "¿Está seguro que desea registrar la nueva información de la materia?",
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
    }, [])

    const role = localStorage.getItem("rol");
    if (role == "administrador") {
        return (
            <div style={{ height: "650px" }}>
                <Box color="primary.contrastText" mb={1}>
                    <Typography color="white" align="center" variant="h3">Editar materia</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>
                    <Link to="/RegistrarMateria">
                        <ArrowBackIcon button fontSize="large" />
                    </Link>
                    <Box mt={5} ml={5}>
                        <Form onSubmit={handleSubmitMateria}>
                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>

                                    <Controls.Input
                                        name="materia_nombre"
                                        label="Nombre"
                                        value={values.materia_nombre}
                                        onChange={handleInputChange}
                                        error={errors.materia_nombre}
                                    />

                                </Grid>

                            </Grid>

                            <Grid container spacing={1}>
                                <Grid item xs={12} sm={6}>
                                    <Controls.SelectArea
                                        name="area_id"
                                        label="Area"
                                        value={values.area_id}
                                        onChange={handleInputChange}
                                        error={errors.area_id}
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
    } else {
        return <div>
            <Redirect to="/inicio" />
        </div>
    }
}

export default EditarMateria
