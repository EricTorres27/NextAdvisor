import React from 'react'

import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import Navbar from './Navbar'
import NavBarAdmin from './NavBarAdmin'
import NavBarStudent from './NavBarStudent'
import advisoryAdv from './advisoryAdv'
import AprobarMateria from './AprobarMateria'
import subjectAdmin from './subjectAdmin'
import EditarRegistroAsesoria from './EditarRegistroAsesoria'
import MetodoPago from './MetodoPago'
import DrawerBox from './DrawerBox'
import Button from '@material-ui/core/Button'
import CreateUser from './CreateUser'
import passSubject from './passSubject'

import ConsultUser from './ConsultUser'
import RegistrarAsesoria from './RegistrarAsesoria'
import RegistrarMateria from './RegistrarMateria'
import subjects from './subjects'
import Perfil from './Perfil'
import EditarPerfil from './EditarPerfil'
import Tarifa from './Tarifa'
import EditarTarifa from './EditarTarifa'
import { BrowserRouter as Router, Route } from 'react-router-dom';


const styles = makeStyles(theme => ({
    root: {
        display: 'flex'
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))
const PrincipalContainer = () => {
    const classes = styles()
    const [stateOpen, setStateOpen] = React.useState(false)
    const openAction = () => {
        setStateOpen(!stateOpen)
    }
        const isAdv=true;
        const isAdmin=false;
        const isStudent=false;
        if(isAdv){
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
                        <div className={classes.content} style={{backgroundColor: '#133C55'}}>
                            <div className={classes.toolbar}></div>
                            <Route exact path="/ConsultarUsuario" component={ConsultUser}/>
                            <Route exact path="/CrearUsuario" component={CreateUser}/>
                            <Route exact path="/RegistrarAsesoria" component={RegistrarAsesoria}/>
                            <Route exact path="/Materias" component={subjects}/>
                            <Route exact path="/RegistrarMateria" component={RegistrarMateria}/>
                            <Route exact path="/MisAsesorias" component={advisoryAdv}/>
                            <Route exact path="/AprobarMateria" component={AprobarMateria}/>

                            <Route exact path="/EditarAsesoria" component={EditarRegistroAsesoria}/>
                            <Route exact path="/MetodoPago" component={MetodoPago}/>
                            <Route exact path="/Perfil" component={Perfil}/>
                            <Route exact path="/EditarPerfil" component={EditarPerfil}/>
                            <Route exact path="/Tarifa" component={Tarifa}/>
                            <Route exact path="/EditarTarifa" component={EditarTarifa}/>
                            <Route exact path="passSubject" component={passSubject}/>
                        </div>
                    </div>
                </Router>

            )
        }

        if(isAdmin){
        return (
            <Router>
                <div className={classes.root}>
                    <NavBarAdmin openAction={openAction} />
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
                    <div className={classes.content} style={{backgroundColor: '#133C55'}}>
                        <div className={classes.toolbar}></div>
                        <Route exact path="/ConsultarUsuario" component={ConsultUser}/>
                        <Route exact path="/CrearUsuario" component={CreateUser}/>
                        <Route exact path="/RegistrarAsesoria" component={RegistrarAsesoria}/>
                        <Route exact path="/Materias" component={subjects}/>
                        <Route exact path="/RegistrarMateria" component={RegistrarMateria}/>
                        <Route exact path="/passSubject" component={passSubject}/>
                        <Route exact path="/MateriaAdmin" component={subjectAdmin}/>
                    </div>
                </div>
            </Router>

        )
        }
        if(isStudent){
        return (
            <Router>
                <div className={classes.root}>
                    <NavBarStudent openAction={openAction} />
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
                    <div className={classes.content} style={{backgroundColor: '#133C55'}}>
                        <div className={classes.toolbar}></div>
                        <Route exact path="/ConsultarUsuario" component={ConsultUser}/>
                        <Route exact path="/CrearUsuario" component={CreateUser}/>
                        <Route exact path="/RegistrarAsesoria" component={RegistrarAsesoria}/>
                        <Route exact path="/Materias" component={subjects}/>
                        <Route exact path="/RegistrarMateria" component={RegistrarMateria}/>
                        <Route exact path="/Perfil" component={Perfil}/>
                        <Route exact path="/EditarPerfil" component={EditarPerfil}/>
                    </div>
                </div>
            </Router>

        )}
    }

export default PrincipalContainer
