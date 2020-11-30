import React, { useEffect } from 'react'
import {
    Hidden,
    makeStyles,
    Typography
} from '@material-ui/core'
import Navbar from './Navbar';
import NavBarAdmin from './NavBarAdmin';
import NavBarStudent from './NavBarStudent';
import advisoryAdv from './advisoryAdv';
import subjectAdmin from './subjectAdmin';
import DrawerBox from './DrawerBox';
import ConsultUser from './ConsultUser';
import RegistrarAsesoria from './RegistrarAsesoria';
import Registro from './Registro';
import subjects from './subjects';
import AsesoresRegistrados from '../Views/AsesoresRegistrados';

import { BrowserRouter as Router, Route, Redirect  } from 'react-router-dom';
import HistorialAsesoria from '../Views/HistorialAsesoria';
import ConsultarUsuario from '../Views/ConsultarUsuario';
import { CrearUsuario } from '../Views/CrearUsuario';
import { RegistrarMateria } from './RegistrarMateria';
import { CrearAdministrador } from '../Views/CrearAdministrador';
import EstablecerTarifa from './EstablecerTarifa';
import ConsultarPreguntas from '../Views/ConsultarPreguntas';
import CrearPreguntasFrecuentes from '../Views/CrearPreguntasFrecuentes';
import EditarUsuario from '../Views/EditarUsuario';
import EditarMateria from '../Views/EditarMateria';
import EditarAsesoria from '../Views/EditarAsesoria';
import EditarPregunta from '../Views/EditarPregunta';
import EditarPerfil from '../Views/EditarPerfil';
import logo from '../img/main logo-dark.png';
import ConsultarPerfil from '../Views/ConsultarPerfil';
import Evaluaciones from '../Views/Evaluaciones';
import Ingenieria from '../Views/Ingenieria'
import CienciasSociales from '../Views/CienciasSociales';
import Negocios from '../Views/Negocios';
import Salud from '../Views/Salud';
import AmbienteConstruido from '../Views/AmbienteConstruido';
import EstudiosCreativos from '../Views/EstudiosCreativos';

const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: '#133C55',
        backgroundImage: logo,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: theme.spacing(3),
        height: 1000,
    },
}))

const PrincipalContainer = () => {

    const classes = styles()
    const [stateOpen, setStateOpen] = React.useState(false)
    const openAction = () => {
        setStateOpen(!stateOpen)
    }

   const role = localStorage.getItem("rol");
   // const role = "administrador";
    if (role == "asesor") {
        return (
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
                        <Route exact path="/Homepage"
                            render={() => {
                                return (
                                    <Redirect to="/Inicio" />
                                )
                            }} />
                        <Route exact path="/Registro" component={Registro} />
                        <Route exact path="/ConsultUser" component={ConsultUser} />
                        <Route exact path="/RegistrarAsesoria" component={RegistrarAsesoria} />
                        <Route exact path="/Materias" component={subjects} />
                        <Route exact path="/RegistrarMateria" component={RegistrarMateria} />
                        <Route exact path="/MisAsesorias" component={advisoryAdv} />
                        <Route exact path="/EditarAsesoria/:oferta_id" component={EditarAsesoria} />
                        <Route exact path="/EditarPerfil" component={EditarPerfil} />
                        <Route exact path="/EstablecerTarifa" component={EstablecerTarifa} />
                        <Route exact path="/ConsultarPerfil" component={ConsultarPerfil} />
                        <Route exact path="/asesores/:cuenta_id" component={advisoryAdv} />
                        <Route exact path="/Evaluaciones" component={Evaluaciones} />
                        <Route exact path="/AmbienteConstruido" component={AmbienteConstruido} />
                        <Route exact path="/CienciasSociales" component={CienciasSociales} />
                        <Route exact path="/Ingenieria" component={Ingenieria} />
                        <Route exact path="/Negocios" component={Negocios} />
                        <Route exact path="/Salud" component={Salud} />
                        <Route exact path="/EstudiosCreativos" component={EstudiosCreativos} />
                    </div>
                </div>
            </Router>

        )
    }

    if (role == "administrador") {
        return (
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
                        <Route exact path="/Homepage"
                            render={() => {
                                return (
                                    <Redirect to="/Inicio" />
                                )
                            }} />
                        <Route exact path="/Registro" component={Registro} />
                        <Route exact path="/ConsultarUsuario" component={ConsultarUsuario} />
                        <Route exact path="/EditarUsuario/:cuentaId" component={EditarUsuario} />
                        <Route exact path="/EditarPregunta/:preguntaId" component={EditarPregunta} />
                        <Route exact path="/HistorialAsesoria" component={HistorialAsesoria} />
                        <Route exact path="/CrearUsuario" component={CrearUsuario} />
                        <Route exact path="/CrearAdministrador" component={CrearAdministrador} />
                        <Route exact path="/PreguntasFrecuentes" component={ConsultarPreguntas} />
                        <Route exact path="/CrearPregunta" component={CrearPreguntasFrecuentes} />
                        <Route exact path="/Materias" component={subjectAdmin} />
                        <Route exact path="/RegistrarMateria" component={RegistrarMateria} />
                        <Route exact path="/ConsultarPerfil" component={ConsultarPerfil} />
                        <Route exact path="/MateriaAdmin" component={subjectAdmin} />
                        <Route exact path="/subjectAdmin" component={subjectAdmin} />
                        <Route exact path="/EditarMateria/:materia_id" component={EditarMateria} />
                        <Route exact path="/EditarPerfil" component={EditarPerfil} />
                        <Route exact path="/EditarAsesoria/:oferta_id" component={EditarAsesoria} />
                        <Route exact path="/AsesoresRegistrados" component={AsesoresRegistrados} />
                    </div>
                </div>
            </Router>

        )
    }
    if (role == "estudiante") {
        return (
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
                        <Route exact path="/Registro" component={Registro} />
                        <Route exact path="/HistorialAsesoria" component={HistorialAsesoria} />
                        <Route exact path="/Materias" component={subjects} />
                        <Route exact path="/EditarPerfil" component={EditarPerfil} />
                        <Route exact path="/ConsultarPerfil" component={ConsultarPerfil} />
                    </div>
                </div>
            </Router>

        )
    }
}

export default PrincipalContainer
