import React from 'react'
import { AppBar, Icon, IconButton, makeStyles, Toolbar, Typography, Button, Menu, MenuItem, Box } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import Avatar from '@material-ui/core/Avatar';
import API from '../apis/api';


const drawerWidth = 240;
const useStyles = makeStyles(theme => ({
    user: {
        flexGrow: 1
    },
    menuButton: {
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
const nombre= localStorage.getItem("nombreCuenta");
const Navbar = (props) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const logOut = async () => {
        try {
            const response = await API.post('auth/logout',
            { headers: { "Authorization": "Bearer " + localStorage.token } }
            );
            console.log(response);
            localStorage.clear();
            window.location.href="http://nextadvisor.com.mx"
        } catch (error) {
            console.log(error);
            localStorage.clear();
            window.location.href="http://nextadvisor.com.mx"

        }
    }

    const handleLogOut = () => {
        logOut();
        setAnchorEl(null);
    };
    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="menu"
                    className={classes.menuButton}
                    onClick={() => props.openAction()}
                >
                    <MenuIcon />
                </IconButton>
                <Typography className={classes.user}>

                </Typography>
                <Box mr={3} align="right">
                <Typography variant='h6' >
                    {nombre}
                </Typography>
                </Box>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" onClick={handleClick} className={classes.large}/>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem></MenuItem>
                    <MenuItem ></MenuItem>
                    <MenuItem onClick={handleLogOut}>Cerrar sesión</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar
