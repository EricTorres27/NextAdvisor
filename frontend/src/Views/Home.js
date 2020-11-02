import { Box } from '@material-ui/core';
import React from 'react'
import logo from '../img/main logo-dark.png';

export default function Home() {
    return (
        <Box align="center">
            <img src={logo} alt="Logo"
                        style={{ width: "50%", margin: "30px 60px" }}
                    />
        </Box>
        
    )
}
