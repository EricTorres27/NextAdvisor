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
import AprobarMateria from './AprobarMateria';
import subjectAdmin from './subjectAdmin';
import EditarRegistroAsesoria from './EditarRegistroAsesoria';
import MetodoPago from './MetodoPago';
import DrawerBox from './DrawerBox';
import passSubject from './passSubject';
import ConsultUser from './ConsultUser';
import RegistrarAsesoria from './RegistrarAsesoria';
import Registro from './Registro';
import subjects from './subjects';
import Perfil from './Perfil';
import Tarifa from './Tarifa';
import EditarPerfil from './EditarPerfil';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import ConsultAdvisory from './ConsultAdvisory';
import ConsultTopic from './ConsultTopic';
import Reports from './Reports';
import AdminProfile from './AdminProfile';
import ConsultarUsuario from '../Views/ConsultarUsuario';
import { CrearUsuario } from '../Views/CrearUsuario';
import { RegistrarMateria } from './RegistrarMateria';
import { CrearAdministrador } from '../Views/CrearAdministrador';
import EstablecerTarifa from './EstablecerTarifa';
import ConsultarPreguntas from '../Views/ConsultarPreguntas';
import CrearPreguntasFrecuentes from '../Views/CrearPreguntasFrecuentes';
import EditarUsuario from '../Views/EditarUsuario';
import EditarPregunta from '../Views/EditarPregunta';
import Cookies from 'js-cookie';
import logo from '../img/main logo-dark.png';

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
                        <Route exact path="/AprobarMateria" component={AprobarMateria} />
                        <Route exact path="/EditarAsesoria" component={EditarRegistroAsesoria} />
                        <Route exact path="/MetodoPago" component={MetodoPago} />
                        <Route exact path="/Perfil" component={Perfil} />
                        <Route exact path="/EditarPerfil" component={EditarPerfil} />
                        <Route exact path="/Tarifa" component={Tarifa} />
                        <Route exact path="/EstablecerTarifa" component={EstablecerTarifa} />
                        <Route exact path="passSubject" component={passSubject} />
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
                        <Route exact path="/AdminProfile" component={AdminProfile} />
                        <Route exact path="/ConsultarUsuario" component={ConsultarUsuario} />
                        <Route exact path="/EditarUsuario/:cuentaId" component={EditarUsuario} />
                        <Route exact path="/EditarPregunta/:preguntaId" component={EditarPregunta} />
                        <Route exact path="/ConsultAdvisory" component={ConsultAdvisory} />
                        <Route exact path="/Reports" component={Reports} />
                        <Route exact path="/ConsultTopic" component={ConsultTopic} />
                        <Route exact path="/CrearUsuario" component={CrearUsuario} />
                        <Route exact path="/CrearAdministrador" component={CrearAdministrador} />
                        <Route exact path="/PreguntasFrecuentes" component={ConsultarPreguntas} />
                        <Route exact path="/CrearPregunta" component={CrearPreguntasFrecuentes} />
                        <Route exact path="/Materias" component={subjects} />
                        <Route exact path="/RegistrarMateria" component={RegistrarMateria} />
                        <Route exact path="/passSubject" component={passSubject} />
                        <Route exact path="/MateriaAdmin" component={subjectAdmin} />
                        <Route exact path="/subjectAdmin" component={subjectAdmin} />
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
                        <Route exact path="/RegistrarAsesoria" component={RegistrarAsesoria} />
                        <Route exact path="/Materias" component={subjects} />
                        <Route exact path="/Perfil" component={Perfil} />
                        <Route exact path="/EditarPerfil" component={EditarPerfil} />
                    </div>
                </div>
            </Router>

        )
    }
}

export default PrincipalContainer
