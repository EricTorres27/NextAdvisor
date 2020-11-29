import React, { useState, useEffect } from 'react'
import { Box, Grid, Typography, Paper, Container,  Button,Card, CardContent, CardMedia, makeStyles, TextField} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from './useForm';
import Controls from './controls/Controls';
import axios from 'axios';
import swal from 'sweetalert';
import { FormControl, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
import API from '../apis/api';

const cuentaId=localStorage.getItem("cuentaId");

const initialValues = {
   oferta_fecha: '',
   oferta_tarifa: '',
   materia_id: '',
   estudiante_id:cuentaId 
}

const styles = makeStyles(theme =>({
    Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}))

export const RegistrarAsesoria = () => {
    const classes = styles()
    const [materia, setMateria] = useState([]);
   

    const validate = (fieldValues = values) => {
        let temp = { ...errors }
        if ('oferta_fecha' in fieldValues)
            temp.oferta_fecha = fieldValues.oferta_fecha ? "" : "Este campo es obligatorio."
        if ('oferta_tarifa' in fieldValues)
            temp.oferta_tarifa = fieldValues.oferta_tarifa ? "" : "Este campo es obligatorio."
        


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
   

   // const baseURL = "http://localhost:8000/api/asesoria";
    
   
    const peticionPost = async () => {
        
        try {
            console.log(cuentaId)
            const response = await API.post('asesoria',
                {
                    "oferta_fecha": values.oferta_fecha,
                    "oferta_tarifa":values.oferta_tarifa,
                    "materia_id":values.materia_id,
                    "estudiante_id":cuentaId
                },{ headers: { "Authorization": "Bearer " + localStorage.token } }
                            
            )
            console.log(response.data)
            if (response.data.flag == 0) {
                swal({
                    title: "La asesoria se ha registrado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    window.location.href = "http://www.nextadvisor.com.mx/MisAsesorias";
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
                    text: "Verifique la información y vuelvalo a intentar",
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
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error",
                })
            } else {
                // Something happened in setting up the request and triggered an Error
                swal({
                    title: "Error",
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error"
                })
            }
            console.log(error);

        }
    }
   // const base = "http://localhost:8000/api/";

    const peticionGetMateria = async () => {
         API.get( 'materias/getMateria')
            .then(response => {
                setMateria(response.data);
            })
    }
    
    useEffect(() => {
        peticionGetMateria();
    }, [])

    const confirmacion = () => {
        swal({
            title: "¿Seguro que desea registrar la asesoría?",
            text: "La información quedara guardada en la base de datos",
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
                <Typography color="white" align="center" variant="h3">Registrar asesoría</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Link to="/RegistrarAsesoria">
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
                                <FormControl variant="outlined"  className={classes.selects} >
                                    <InputLabel>Materia</InputLabel>
                                    <MuiSelect
                                    name="materia_id"
                                    value={values.materia_id}
                                    onChange={handleInputChange}
                                    >
                                        <MenuItem value=''>Elija una materia</MenuItem>
                                        {materia.map((materia)=> (
                                            <MenuItem key={materia.materia_id} value={materia.materia_id}>{materia.materia_nombre}</MenuItem>  
                                         ) )}

                                        
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
}

export default RegistrarAsesoria;
