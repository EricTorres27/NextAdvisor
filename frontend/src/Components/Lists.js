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

const Lists = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleOutlineIcon />
                    </ListItemIcon>
                    <Link to="/ConsultarUsuario">
                        <ListItemText primary='contenido dinamico' />
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
            </List>
        </div>
    )
}

export default Lists
