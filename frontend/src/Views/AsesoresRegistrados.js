import { Bar } from 'react-chartjs-2'
import { Box, Paper, makeStyles } from '@material-ui/core';
import React, { forwardRef, useState, useEffect } from 'react';
import API from '../apis/api';
import { Link, Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({

    Paper: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
            height: 980,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.5rem',
            height: 650,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '2rem',
            height: 650,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
    },
    Button: {
        textTransform: 'none',
        margin: theme.spacing(3)
    }
}))

function AsesoresRegistrados() {

    const [Asesor, setAsesor] = useState([]);
    const [Ambiente, setAmbiente] = useState([]);
    const [Negocios, setNegocios] = useState([]);
    const [Ciencias, setCiencias] = useState([]);
    const [Creativos, setCreativos] = useState([]);
    const [Salud, setSalud] = useState([]);
    const [Ingenieria, setIngenieria] = useState([]);
    const [Estudiante, setEstudiante] = useState([]);
    const styles = useStyles();

    const data = {
        labels: ['Asesores', 'Estudiantes'],
        datasets: [{
            label: 'Usuarios registrados',
            backgroundColor: '#386fa4',
            borderColor: 'black',
            borderWidht: 1,
            hoverBackgroundColor: '#59a5d8',
            hoverBorderColor: 'pink',
            data: [Asesor, Estudiante, 0]
        }]


    };
    const datas = {
        labels: ['Ambiente construido', 'Negocios', 'Ciencias', 'Estudios creativos', 'Salud', 'Ingenieria'],
        datasets: [{
            label: 'Materias registradas',
            backgroundColor: '#386fa4',
            borderColor: 'black',
            borderWidht: 1,
            hoverBackgroundColor: '#59a5d8',
            hoverBorderColor: 'pink',
            data: [Ambiente, Negocios, Ciencias, Creativos, Salud, Ingenieria, 0]
        }]
    };


    const opciones = {
        maintainAspectRatio: false,
        responsive: true
    }
    useEffect(() => {
        peticionAsesor();
        peticionEstudiante();
        peticionAmbiente();
        peticionNegocios();
        peticionCiencias();
        peticionCreativos();
        peticionSalud();
        peticionIngenieria();

    }, [])
    const peticionAmbiente = async () => {
        var valor = await API.get('area/ambiente')
            .then(response => {
                setAmbiente(response.data);
            })
    }
    const peticionNegocios = async () => {
        var valor = await API.get('area/negocios')
            .then(response => {
                setNegocios(response.data);
            })
    }
    const peticionCiencias = async () => {
        var valor = await API.get('area/ciencias')
            .then(response => {
                setCiencias(response.data);
            })
    }
    const peticionCreativos = async () => {
        var valor = await API.get('area/creativos')
            .then(response => {
                setCreativos(response.data);
            })
    }
    const peticionSalud = async () => {
        var valor = await API.get('area/salud')
            .then(response => {
                setSalud(response.data);
            })
    }
    const peticionIngenieria = async () => {
        var valor = await API.get('area/ingenieria')
            .then(response => {
                setIngenieria(response.data);
            })
    }

    const peticionAsesor = async () => {
        var valor = await API.get('asesor')
            .then(response => {
                setAsesor(response.data);
            })
    }
    const peticionEstudiante = async () => {
        var valor = await API.get('estudiante')
            .then(response => {
                setEstudiante(response.data);
            })
    }
    const role = localStorage.getItem("rol");
    if (role == "administrador") {
        return (
            <Paper elevation={3} className={styles.Paper}>
                <Box align="center" mb={2}>
                    <div className='App' style={{ width: '80%', height: '400px' }}>
                        <h2>Número de usuarios registrados</h2>
                        <Bar data={data} options={opciones} />
                    </div>
                </Box>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <Box align="center" mb={2}>
                    <div className='App' style={{ width: '80%', height: '400px' }}>
                        <h2>Número de materias registradas por área</h2>
                        <Bar data={datas} options={opciones} />
                    </div>
                </Box>

            </Paper>


        );
    } else {
        return <div>
            <Redirect to="/inicio" />
        </div>
    }

}

export default AsesoresRegistrados;