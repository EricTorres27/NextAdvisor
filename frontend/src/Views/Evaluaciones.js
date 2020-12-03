import React, {useEffect} from 'react';
import { Box, Grid, Typography, Paper, makeStyles } from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link, Redirect } from 'react-router-dom';
import { useForm, Form } from '../Components/useForm';

/*
            <Typography>{match.params.cuentaId}</Typography>

*/
const useStyles = makeStyles((theme) => ( {
    Paper: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.0rem',
            height: 700,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
            overflowY: 'auto',
            align: "center"
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.0rem',
            height: 500,
            padding: 20,
            marginLeft: 100,
            marginRight: 100,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            height: 500,
            padding: 20,
            marginLeft: 100,
            marginRight: 100,
            overflowY: 'auto',
        },
    },
    Title: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.0rem',
            textAlign: 'center',
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.0rem',
        },
        [theme.breakpoints.up('lg')]: {

        },
    }
}))

const Evaluaciones = (props) => {
     const styles=useStyles();
    const { match } = props;
    useEffect(() => {
        if (localStorage.getItem("rol") != 'administrador' && localStorage.getItem("rol") != 'asesor') {
            props.history.goBack();
        }
    }, []);
    return (
        <div style={{ height: "650px" }}>
            <Box  className={styles.Title} color="primary.contrastText" mb={1}>
                <Typography className={styles.Title} color="white" align="center" variant="h3">Evaluaciones</Typography>
            </Box>
            <Paper elevation={3} className={styles.Paper}>
                <Box mt={5} ml={5}>
                    <Form>
                        <Box ml={3} mb={2}>
                            <Typography className={styles.Title} variant="h5">Ambiente Construido</Typography>
                            <Link to="/AmbienteConstruido">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography  className={styles.Title}variant="h5">Ciencias Sociales</Typography>
                            <Link to="/CienciasSociales">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography className={styles.Title} variant="h5">Estudios Creativos</Typography>
                            <Link to="/EstudiosCreativos">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography className={styles.Title} variant="h5">Ingeniería</Typography>
                            <Link to="/Ingenieria">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography className={styles.Title} variant="h5">Negocios</Typography>
                            <Link to="/Negocios">
                                Realizar evaluación
                            </Link>
                        </Box>

                        <Box ml={3} mb={2}>
                            <Typography className={styles.Title} variant="h5">Salud</Typography>
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
