import { Box, makeStyles } from '@material-ui/core';
import React from 'react'
import logo from '../img/main logo-dark.png';

const styles = makeStyles((theme) => ( {
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
    return (
        <div>
            <Box align="center" mt={7}>
                <img
                    src={logo}
                />
            </Box>
        </div>
    )
}
export default Inicio
