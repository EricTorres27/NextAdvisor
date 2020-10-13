import React from 'react'

import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import Navbar from './Navbar'
import DrawerBox from './DrawerBox'
import Button from '@material-ui/core/Button'
import CreateUser from './CreateUser'
import ConsultUser from './ConsultUser'
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
                    <Route exact path="/ConsultarUsuario" component={ConsultUser}/>
                    <Route exact path="/CrearUsuario" component={CreateUser}/>
                </div>
            </div>
        </Router>

    )
}

export default PrincipalContainer
