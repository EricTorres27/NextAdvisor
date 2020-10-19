import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios'

const EditarTarifa = () => {

    const BootstrapInput = withStyles((theme) => ({
        root: {
            'label + &': {
                marginTop: theme.spacing(3),
            },
        },
        input: {
            borderRadius: 4,
            position: 'relative',
            backgroundColor: theme.palette.background.paper,
            border: '1px solid #ced4da',
            fontSize: 16,
            padding: '9px 26px 10px 12px',
            width: '245px',
            transition: theme.transitions.create(['border-color', 'box-shadow']),
            // Use the system font instead of the default Roboto font.
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
            '&:focus': {
                borderRadius: 4,
                borderColor: '#80bdff',
                boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
            },
        },
    }))(InputBase);

    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 200, marginRight: 200, overflowY: 'auto' }
    }

    return (
        <Fragment>
            <Box color="primary.contrastText" mb={3}>
                <Typography color="white" align="center" variant="h3">Editar tarifa</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Container maxWidth="sm">
                        <form className="row">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <Box mb={2}>
                                        <Typography variant="subtitle1">Cantidad en Pesos Mexicanos</Typography>
                                        <input type="text" placeholder="100" className="form-control" name="tarifa"></input>
                                    </Box>
                                    <Box mt={5} align="left">
                                        <Button type="submit" color="primary" variant="contained">Guardar</Button>
                                    </Box>
                                </Grid>
                            </Grid>
                        </form>
                    </Container>
                </Box>
            </Paper>
        </Fragment>
    );
}

export default EditarTarifa;
