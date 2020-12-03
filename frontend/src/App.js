import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles'
import theme from './ThemeConfig'
import Login from './Views/Login';
import Navbar from './Components/Navbar';
import { Hidden, makeStyles } from '@material-ui/core';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import 'fontsource-roboto';
import Registro from './Components/Registro'
import Rutas from './Components/ControlRutas';
import DrawerBox from './Components/DrawerBox';

let login = localStorage.getItem("isLoggedIn");
let administrador = localStorage.getItem("administrador");
const styles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: '#133C55',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: theme.spacing(3),
    height: 1000,
  },
}))

function App() {
  const classes = styles()
  const [stateOpen, setStateOpen] = React.useState(false)
  const openAction = () => {
    setStateOpen(!stateOpen)
  }
  return (
    <ThemeProvider theme={theme}>
      {login ? (
        <Router>
          <div className={classes.root}>
            <Navbar openAction={openAction} />
            <Hidden xsDown>
              <DrawerBox
                variant="permanent"
                open={true}
              />
            </Hidden>
            <Hidden smUp>
              <DrawerBox
                variant="temporary"
                open={stateOpen}
                onClose={openAction}
              />
            </Hidden>
            <div className={classes.content}>
              <div className={classes.toolbar}></div>
              <Route exact path=""
                render={() => {
                  return (
                    <Redirect to="/inicio" />
                  )
                }} />
              <Route exact path="/inicio" component={Rutas.Inicio} />
              <Route exact path="/ConsultarUsuario" component={Rutas.ConsultarUsuario} />
              <Route exact path="/EditarPregunta/:preguntaId" component={Rutas.EditarPregunta} />
              <Route exact path="/EditarUsuario/:cuentaId" component={Rutas.EditarUsuario} />
              <Route exact path="/HistorialAsesoria" component={Rutas.HistorialAsesoria} />
              <Route exact path="/CrearUsuario" component={Rutas.CrearUsuario} />
              <Route exact path="/CrearAdministrador" component={Rutas.CrearAdministrador} />
              <Route exact path="/PreguntasFrecuentes" component={Rutas.ConsultarPreguntas} />
              <Route exact path="/CrearPregunta" component={Rutas.CrearPreguntasFrecuentes} />
              <Route exact path="/RegistrarMateria" component={Rutas.RegistrarMateria} />
              <Route exact path="/ConsultarPerfil" component={Rutas.ConsultarPerfil} />
              <Route exact path="/subjectAdmin" component={Rutas.subjectAdmin} />
              <Route exact path="/EditarMateria/:materia_id" component={Rutas.EditarMateria} />
              <Route exact path="/EditarPerfil" component={Rutas.EditarPerfil} />
              <Route exact path="/EditarAsesoria/:oferta_id" component={Rutas.EditarAsesoria} />
              <Route exact path="/AsesoresRegistrados" component={Rutas.AsesoresRegistrados} />
              <Route exact path="/RegistrarAsesoria" component={Rutas.RegistrarAsesoria} />
              <Route exact path="/Materias" component={Rutas.subjects} />
              <Route exact path="/MisAsesorias" component={Rutas.advisoryAdv} />
              <Route exact path="/asesores/:cuenta_id" component={Rutas.advisoryAdv} />
              <Route exact path="/Evaluaciones" component={Rutas.Evaluaciones} />
              <Route exact path="/AmbienteConstruido" component={Rutas.AmbienteConstruido} />
              <Route exact path="/CienciasSociales" component={Rutas.CienciasSociales} />
              <Route exact path="/Ingenieria" component={Rutas.Ingenieria} />
              <Route exact path="/Negocios" component={Rutas.Negocios} />
              <Route exact path="/Salud" component={Rutas.Salud} />
              <Route exact path="/EstudiosCreativos" component={Rutas.EstudiosCreativos} />
            </div>
          </div>
        </Router>
      ) : (
          < Router >
            <Route exact path=""
              render={() => {
                return (
                  <Redirect to="/login" />
                )
              }} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/Registro" component={Registro} />
          </Router>
        )
      }
    </ThemeProvider >
  );
}

export default App;
