import React, {useEffect} from 'react';
import { Box, Grid, Typography, Paper, Container, TextField, Button } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';

/*
            <Typography>{match.params.cuentaId}</Typography>

*/
const styles = {
    Paper: { height: 550, padding: 20, marginLeft: 100, marginRight: 100, overflowY: 'auto' }
}

const Evaluaciones = (props) => {

    const { match } = props;
    useEffect(() => {
        if (localStorage.getItem("rol") != 'administrador' && localStorage.getItem("rol") != 'asesor') {
            props.history.goBack();
        }
    }, []);
    return (
        <div style={{ height: "650px" }}>
            <Box color="primary.contrastText" mb={1}>
                <Typography color="white" align="center" variant="h3">Evaluaciones</Typography>
            </Box>
            <Paper elevation={3} style={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Form>
                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Ambiente Construido</Typography>
                            <Link to="/AmbienteConstruido">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Ciencias Sociales</Typography>
                            <Link to="/CienciasSociales">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Estudios Creativos</Typography>
                            <Link to="/EstudiosCreativos">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Ingeniería</Typography>
                            <Link to="/Ingenieria">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Negocios</Typography>
                            <Link to="/Negocios">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography variant="h5">Salud</Typography>
                            <Link to="/Salud">
                                Realizar evaluación
                            </Link>
                        </Box>

                    </Form>
                </Box>
            </Paper>
        </div>
    )

}

export default Evaluaciones
