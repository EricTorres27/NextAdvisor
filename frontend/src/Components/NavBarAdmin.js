import React from 'react'
import {AppBar, Icon, IconButton, makeStyles, Toolbar, Typography} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'


const drawerWidth = 240;
const useStyles= makeStyles(theme => ({
    user:{
        flexGrow: 1
    },
    menuButton:{
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
          },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
    },
}))

const Navbar = (props) => {
    const classes = useStyles()
    return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton 
                    color="inherit" 
                    aria-label="menu" 
                    className={classes.menuButton}
                    onClick={() => props.openAction()}
                    >
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant='h6' className={classes.user}>
                    </Typography>
                    <Typography variant='h6'>
                       Administrador
                    </Typography>
                </Toolbar>
            </AppBar>
    )
}
export default Navbar