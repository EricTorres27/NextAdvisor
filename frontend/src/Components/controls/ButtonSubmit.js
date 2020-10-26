import { Button, makeStyles } from '@material-ui/core'
import React from 'react'

export default function ButtonSubmit(props) {

    const useStyles = makeStyles(theme=>({
        root:{
            margin:theme.spacing(0.5)
        },
        label:{
            textTransform:'none'
        }
    }))
    const { text, size, color, variant, onClick, ...other} = props
    const classes= useStyles();
    return (
        <Button
            classes={{root:classes.root, label: classes.label}}
            variant={variant || "contained"}
            size={size || "medium"}
            color={color || "primary"}
            onClick={onClick }
            {...other}>
                {text}
        </Button>
    )
}
