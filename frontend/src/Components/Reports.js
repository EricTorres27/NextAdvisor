
import React, { forwardRef, useState, useEffect } from 'react';
import { Box, label, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem, List , makeStyles} from '@material-ui/core';
import { Link } from 'react-router-dom';



const Reports = () => {
    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 200, marginRight: 200, overflowY: 'auto' }
    }

    return (
      
        <Paper elevation={3} sclassName={styles.Paper}>
            <Box align="left" ml={3} mt={3}>
            <Typography variant="h5" >Reportes</Typography>
            </Box>
        <Link to="" style={{ textDecoration: 'none' }}>
            <Box align="left" ml={3} mt={3}>
                <Button variant="contained" color="primary">Asesores</Button>
            </Box>
        </Link>
        <Link to="" style={{ textDecoration: 'none' }}>
            <Box align="left" ml={3} mt={3} >
                <Button variant="contained" color="primary">Estudiantes</Button>
            </Box>
        </Link>
        <Link to="" style={{ textDecoration: 'none' }}>
            <Box align="left" ml={3} mt={40} >
            <Typography variant="h5" >Consulta los asesores y alumnos dados de alta en el sistema</Typography>
            </Box>
        </Link>
    </Paper>
            
      
    )
}

export default Reports

