import React from 'react'
import {
    makeStyles,
    Drawer,
    Divider
} from '@material-ui/core'
import UserLists from './UserLists'

const drawerWidth=240
const styles= makeStyles(theme =>({
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

    const classes =styles()
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
        >
            <div className={classes.toolbar}></div>
            <Divider/>
            <UserLists/>
        </Drawer>
    )
}

export default DrawerBox
