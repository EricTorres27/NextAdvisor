import React, { useEffect } from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';

const styles = {
    Paper: { height: 550, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

const AmbienteConstruido = (props) => {

    const { match } = props;
    useEffect(() => {
        if (localStorage.getItem("rol") != 'administrador' && localStorage.getItem("rol") != 'asesor') {
            props.history.goBack();
        }
    }, []);
    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Evaluación</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>

                <Link to="/Evaluaciones">
                    <ArrowBackIcon button fontSize="large" />
                </Link>

                <Box mt={5} ml={5}>
                    <Form align="center">
                        <Box ml={3} mb={2}>
                            <Typography variant="h7">“Me comprometo a realizar esta actividad de forma honesta y personal, para reflejar mi capacidad de asesorar alumnos en esta área”.
                            </Typography>
                        </Box>

                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeu0co07ERRhHj0Zk-7wAtWVJrQivM9OZe2Yzh3WR5Qryfqnw/viewform?embedded=true" width="640" height="1593" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>

                    </Form>
                </Box>
            </Paper>
        </div>
    )
}

export default AmbienteConstruido
