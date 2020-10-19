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

const AdminLists = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <Link to="/ConsultarUsuario">
                        <ListItemText primary='Usuarios'/>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <Link to="/CrearUsuario">
                        <ListItemText primary='Crear usuario' />
                    </Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleIcon />
                    </ListItemIcon>
                    <Link to="/PrecuntasFrecuentes">
                        <ListItemText primary='Preguntas frecuentes' />
                    </Link>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default AdminLists
