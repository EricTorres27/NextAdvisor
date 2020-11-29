import React from 'react'
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import GradeIcon from '@material-ui/icons/Grade';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import HelpIcon from '@material-ui/icons/Help';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'


const role = localStorage.getItem("rol");
// const role = "administrador";
const UserLists = () => {

    if (role=="estudiante") {
        return (
            <div>

                <List component='nav'>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="/ConsultarPerfil">
                            <ListItemText primary='Mi perfil' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <EventIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mis asesorías' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }

    if (role=="administrador") {
        return (
            <div>

                <List component='nav'>
                    <Link to="/ConsultarPerfil" style={{ textDecoration: 'none' }} >
                        <ListItem button>
                            <ListItemIcon >
                                <AccountCircleIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Mi perfil' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/ConsultarUsuario" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Usuarios' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/HistorialAsesoria" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <EventIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Asesorías' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/subjectAdmin" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <AssignmentIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Materias' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/AsesoresRegistrados" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <AssessmentIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Reportes' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/PreguntasFrecuentes" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <HelpIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Preguntas frecuentes' />
                        </ListItem>
                    </Link>
                    <Divider />
                </List>
            </div >
        )
    }

    if (role=="asesor") {
        return (
            <div>

                <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="/ConsultarPerfil">
                            <ListItemText primary='Mi perfil' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AssignmentIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="Materias">
                            <ListItemText primary='Materias' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <EventIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="MisAsesorias">
                            <ListItemText primary='Asesorías' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <GradeIcon color="primary" fontSize="large" />
                        </ListItemIcon>
                        <Link to="/Evaluaciones">
                            <ListItemText primary='Evaluaciones' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }

}

export default UserLists
