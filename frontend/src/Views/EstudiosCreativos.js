import React from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';

const styles = {
    Paper: { height: 550, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

const AmbienteConstruido = (props) => {

    const { match } = props;

    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Evaluación Ambiente Construido</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>

                <Link to="/Evaluaciones">
                    <ArrowBackIcon button fontSize="large" />
                </Link>

                <Box mt={5} ml={5}>
                    <Form align="center">
                        <Box ml={3} mb={2}>
                            <Typography variant="h7">“Apegándome al Código de Ética de los Estudiantes del Tecnológico de Monterrey,
                            me comprometo a que mi actuación en esta actividad de evaluación esté regida por la honestidad académica.
                            En congruencia con el mismo, realizaré esta actividad de forma honesta y personal, para reflejar a través
                            de ella mis conocimientos y competencias”.
                            </Typography>
                        </Box>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeiqmdW_QIpJJANJowoNDwYpcnxiRy_WvXH786Qd5fHuji0xQ/viewform?embedded=true" width="640" height="1583" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
                      </Form>
                </Box>
            </Paper>
        </div>
    )
}

export default AmbienteConstruido
