import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import API from '../apis/api';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import swal from 'sweetalert';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

const valoresInicialesRegistro = {
  cuenta_nombre: '',
  cuenta_apellido_paterno: '',
  cuenta_apellido_materno: '',
  cuenta_genero: '',
  cuenta_correo: '',
  cuenta_nombre_usuario: '',
  password: '',
  passwordConfirmar: '',
  cuenta_telefono: '',
  estudiante_semestre: '',
  estudiante_carrera: '',
  estudiante_calificacion: '',
  asesor_calificacion: '',
  rol_id: ''
}
const styles = {
  Paper: { height: 500, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Next Advisor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
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
  } = useForm(valoresInicialesRegistro, true, validate);

  const handleSubmit = e => {
    e.preventDefault()
    if (validate())
      confirmacion();
  }
  const loginUsuario = async () => {
    const response = await API.post('auth/login',
      {
        "cuenta_correo": values.cuenta_correo,
        "password": values.password,
      },
      { headers: { "Accept": "application/json" } },
    ).then(res => {
      localStorage.setItem("token",res.data['access_token']);
      API.get('/auth/profile',{ headers: { "Authorization": "Bearer " + localStorage.token } })
        .then(res => {
          switch (res.data['rol_id']) {
            case 1:
              console.log("estudiante")
              localStorage.setItem("rol", "estudiante")
              break;
            case 2:
              console.log("asesor")
              localStorage.setItem("rol", "asesor")
              break;
            case 3:
              console.log("administrador")
              localStorage.setItem("rol", "administrador")
              break;
          }
          localStorage.setItem("isLoggedIn", true);
          localStorage.setItem("nombreCuenta",res.data['cuenta_nombre_usuario'])
          localStorage.setItem("cuentaId", res.data['cuenta_id']);
          window.location.href = "http://nextadvisor.com.mx";
        })
        .catch(err => {
          console.log(err);
        })
    })
      .catch(err => {
        console.log(err)
        swal({
          title: "Error",
          text: "Usuario o contraseña incorrectos",
          icon: "error"
      })
      })
  }

  const peticionRegistro = async () => {
    try {
      const response = await API.post('cuenta/crearEstudiante',
        {
          "cuenta_nombre_usuario": values.cuenta_nombre_usuario,
          "cuenta_correo": values.cuenta_correo,
          "password": values.password,
          "cuenta_telefono": values.cuenta_telefono,
          "cuenta_nombre": values.cuenta_nombre,
          "cuenta_apellido_paterno": values.cuenta_apellido_paterno,
          "cuenta_apellido_materno": values.cuenta_apellido_materno,
          "cuenta_genero": values.cuenta_genero,
          "estudiante_semestre": values.estudiante_semestre,
          "estudiante_carrera": values.estudiante_carrera,
          "estudiante_calificacion": 0,
          "rol_id": values.rol_id
        }
      )
      console.log(response.data);
      if (response.data.flag == 1) {
        loginUsuario();
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
  const confirmacion = () => {
    swal({
      title: "¿Registrar con los datos ingresados?",
      text: "Podra editar la información cuando lo necesite",
      buttons: ["No", "Si"]
    }).then(respuesta => {
      if (respuesta) {
        peticionRegistro();
      }
    })
  }


  return (
    <div>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h3">
          Registrarse
        </Typography>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6}>
            <Box ml={50} mt={1} align="left">
              <Link to="/login">
                <ArrowBackIcon button fontSize="large" />
              </Link>
            </Box>
          </Grid>
        </Grid>
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
                    label="Confirmar contraseña"
                    value={values.passwordConfirmar}
                    onChange={handleInputChange}
                    type={values.showPassword ? 'text' : 'password'}
                    error={errors.passwordConfirmar}
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
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}
