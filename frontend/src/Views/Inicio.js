import { Box } from '@material-ui/core';
import React from 'react'
import logo from '../img/main logo-dark.png';

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
