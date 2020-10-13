import React from 'react'
import Icon from '@material-ui/core/Icon';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom'



import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
    Menu,
    MenuList,
    MenuItem
}from '@material-ui/core'

const Lists = () => {
    return (
        <div>
        
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleOutlineIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Materias'/>
                </ListItem>
                <Divider/>
                <ListItem button>
                    <ListItemIcon>
                        <AddCircleIcon/>
                    </ListItemIcon>
                    <ListItemText primary='Mis asesorias'/>
                </ListItem>
            </List>
        </div>
    )
}

export default Lists
