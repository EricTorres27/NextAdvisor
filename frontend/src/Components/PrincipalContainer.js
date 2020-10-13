import React from 'react'

import {
    Hidden,
    makeStyles
} from '@material-ui/core'
import Navbar from './Navbar'
import DrawerBox from './DrawerBox'
import Button from '@material-ui/core/Button'
import RegistrarAsesoria from './RegistrarAsesoria'


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
const PrincipalContainer = (props) => {
    const classes = styles()
    const [stateOpen, setStateOpen]= React.useState(false)
    const openAction =() =>{
        setStateOpen(!stateOpen)
    }
    return (
        <div className={classes.root}>
            <Navbar openAction ={openAction}/>
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
                {props.texto}
                 <RegistrarAsesoria/>
                
            </div>
        </div>
    )
}

export default PrincipalContainer
