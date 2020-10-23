import React from 'react'
import Icon from '@material-ui/core/Icon';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import EventIcon from '@material-ui/icons/Event';
import PeopleIcon from '@material-ui/icons/People';
import AssignmentIcon from '@material-ui/icons/Assignment';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
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


const role="advisor"
const UserLists = () => {

    if (role=="student") {
        return (
            <div>

                <List component='nav'>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mi perfil' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mis asesorías' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }

    if (role=="admin") {
        return (
            <div>

                <List component='nav'>
                    <Link to="/AdminProfile" style={{ textDecoration: 'none' }} >
                        <ListItem button>
                            <ListItemIcon >
                                <AccountCircleIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Mi perfil' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/ConsultUser" style={{ textDecoration: 'none' }}>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleIcon color="primary" fontSize="large" />
                            </ListItemIcon>
                            <ListItemText primary='Usuarios' />
                        </ListItem>
                    </Link>
                    <Divider />
                    <Link to="/ConsultAdvisory" style={{ textDecoration: 'none' }}>
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
                    <Link to="/Reports" style={{ textDecoration: 'none' }}>
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

    if (role=="advisor") {
        return (
            <div>

                <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mi perfil' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="Materias">
                            <ListItemText primary='Materias' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="MisAsesorias">
                            <ListItemText primary='Asesorías' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="Tarifa">
                            <ListItemText primary='Tarifa' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="MetodoPago">
                            <ListItemText primary='Método de pago' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Evaluación' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }

}

export default UserLists
