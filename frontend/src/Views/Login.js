import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import logo from '../img/mainLogo.png';
import { useForm, Form } from '../Components/useForm';
import Controls from '../Components/controls/Controls';
import API from '../apis/api';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

const initialValues = {
  cuenta_correo: '',
  password: '',
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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();
  const validate = (fieldValues = values) => {
    let temp = { ...errors }
    if ('cuenta_correo' in fieldValues)
      temp.cuenta_correo = (/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/).test(fieldValues.cuenta_correo) ? "" : "Cuenta de correo invalida"
    if ('password' in fieldValues)
      temp.password = fieldValues.password ? "" : "Este campo es requerido"
    setErrors({
      ...temp
    })
    if (fieldValues == values)
      return Object.values(temp).every(x => x == "")

  }
  const handleSubmitLogin = e => {
    e.preventDefault()
    if (validate())
      peticionPost();
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
          window.location.reload();
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
  return (
    <Container component="main" maxWidth="xs">
      <Box align="center" mt={2}>
        <img src={logo} alt="Logo"
          style={{ width: "40%" }}
        />
      </Box>

      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Iniciar Sesión
        </Typography>
        <Form onSubmit={handleSubmitLogin}>
          <Controls.Input
            name="cuenta_correo"
            label="Correo"
            value={values.cuenta_correo}
            onChange={handleInputChange}
            error={errors.cuenta_correo}
          />
          <Controls.Input
            name="password"
            label="Contraseña"
            value={values.password}
            onChange={handleInputChange}
            error={errors.password}
            type={values.showPassword ? 'text' : 'password'}
          />
          <Controls.ButtonSubmit
            fullWidth
            size="large"
            text="Ingresar"
            type="submit"
          />
        </Form>

        <div className={classes.form}>

          <Grid container>
            <Grid item>
              <Link to="/Registro" variant="body2">
                <Typography>Registrarse</Typography>
              </Link>
            </Grid>
          </Grid>
        </div>

      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
