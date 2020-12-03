import React, { useState, useEffect } from 'react'
import { Grid, makeStyles,Typography, Paper,Box } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import swal from 'sweetalert';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import jwt_decode from "jwt-decode";
import API from '../apis/api';
let s;

const initialValues = {
    materia_nombre: '',
    area_id: '',
    estudiante_id:'',
    administrador_id: ''
}

const useStyles =  makeStyles(theme => ( {
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}));


export const RegistrarMateria = (props) => {

    const styles= useStyles();

    const [data, setData] = useState([]);

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
    const peticionPost = async () => {
        if (revisarToken) {
        try {
            const response = await API.post('materia',
                {

                    "materia_nombre":values.materia_nombre,
                    "area_id":values.area_id,

                }
            )
            if (response.data.flag == 0) {
                swal({
                    title: "La materia se ha registrado con éxito.",
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
                    icon: "error",
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
    }}

    const confirmacion = () => {
        swal({
            title: "¿Está seguro que desea registrar la materia?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionPost();
            }
        })
    }
    useEffect(() => {
        if(localStorage.getItem("rol") != 'administrador' && localStorage.getItem("rol") != 'asesor' )
        {
            props.history.goBack();
        }
    }, [])

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Registrar materia</Typography>
            </Box>
            <Paper elevation={3} className={styles.Paper}>
                <Link to="/RegistrarMateria">
                    <ArrowBackIcon button fontSize="large" />
                </Link>
                <Box mt={5} ml={5}>
                    <Form onSubmit={handleSubmit}>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Registro</Typography>
                        </Box>


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
}
export default RegistrarMateria
