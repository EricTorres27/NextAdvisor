import { Box, makeStyles } from '@material-ui/core';
import React, { useEffect } from 'react'
import logo from '../img/main logo-dark.png';

const useStyles = makeStyles((theme) => ({
    Paper: {
        [theme.breakpoints.down('sm')]: {
            height: 100,
        },
        [theme.breakpoints.up('md')]: {
        },
        [theme.breakpoints.up('lg')]: {

        },
    }
}));

export const Inicio = () => {
    const style = useStyles();

    return (
        <div>
            <Box align="center" mt={7}>
                <img
                    className={style.useStyles}
                    src={logo}
                />
            </Box>
        </div>
    )
}
export default Inicio
