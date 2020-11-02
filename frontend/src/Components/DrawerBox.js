import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider,
    Paper
} from '@material-ui/core'
import UserLists from './UserLists'
import logo from '../img/mainLogo.png';
import { Link } from 'react-router-dom';

const drawerWidth = 240
const styles = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: theme.mixins.toolbar,

}))
const DrawerBox = (props) => {

    const classes = styles()
    return (
        <Drawer
            className={classes.drawer}
            classes={{
                paper: classes.drawerPaper,
            }}
            anchor="left"
            variant={props.variant}
            open={props.open}
            onClose={props.onClose ? props.onClose : null}
        >   <Paper elevation={6}>
                <div style={{ backgroundColor: '' }}>
                    <Link to="/Inicio" style={{ textDecoration: 'none' }}>
                        <img src={logo} alt="Logo"
                            style={{ width: "50%", margin: "30px 60px" }}
                        />
                    </Link>

                </div>
            </Paper>

            <Divider />
            <UserLists />
        </Drawer>
    )
}

export default DrawerBox
