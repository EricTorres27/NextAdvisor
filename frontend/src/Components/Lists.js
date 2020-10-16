import React from 'react'
import Icon from '@material-ui/core/Icon';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core'


        const isAdv=true;
        const isAdmin=false;
        const isStudent=false;

const Lists = () => {

    if(isStudent){
    return (
        <div>
        
            <List component='nav'>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleIcon />
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

    if(isAdmin){
        return (
            <div>
            
                <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mi perfil'/>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Preguntas frecuentes' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Usuarios' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Asesorías' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Asesores' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="MateriasAdmin">
                            <ListItemText primary='Materias' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Reportes' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Calendario' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
    }

    if(isAdv){
        return (
            <div>
            
                <List component='nav'>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleOutlineIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mi perfil'/>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="">
                            <ListItemText primary='Mi Evaluación' />
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="MisAsesorias">
                            <ListItemText primary='Mis asesorías' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="MetodoPago">
                            <ListItemText primary='Mi método de pago' />
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <ListItemIcon>
                            <AddCircleIcon />
                        </ListItemIcon>
                        <Link to="Materias">
                            <ListItemText primary='Materias' />
                        </Link>
                    </ListItem>
                </List>
            </div>
        )
        }

}

export default Lists
