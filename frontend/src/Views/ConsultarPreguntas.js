import React, { forwardRef, useState, useEffect } from 'react';
import { Box, Button, Grid, Typography, Paper, Container, Select, MenuItem, List, makeStyles, Modal } from '@material-ui/core';
import MaterialTable from 'material-table'
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import { Link, Redirect } from 'react-router-dom';
import swal from 'sweetalert';
import API from '../apis/api';

const useStyles = makeStyles((theme) => ({
    Paper: {
        [theme.breakpoints.down('sm')]: {
            fontSize: '0.5rem',
            height: 700,
            padding: 5,
            marginLeft: 10,
            marginRight: 10,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('md')]: {
            height: 550,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
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
    },
    BoxStyle: {
        [theme.breakpoints.down('sm')]: {
            textAlign:"center",
            justifyContent: 'center'
        },
        [theme.breakpoints.up('md')]: {
            fontSize: '1.0rem',
            
        },
        [theme.breakpoints.up('lg')]: {

        },
    }
}))

const ConsultarPreguntas = (props) => {
    const styles = useStyles();
    const [data, setData] = useState([]);
    const [preguntaSeleccionada, setPreguntaSeleccionada] = useState({
        pregunta_pregunta: "",
        pregunta_respuesta: "",
        pregunta_id: "",

    })
    const selecionarPregunta = (pregunta, caso) => {
        setPreguntaSeleccionada(pregunta);
        (caso === "Eliminar") ? confirmacionEliminar(pregunta)
            :
            props.history.push("/EditarPregunta/" + pregunta.pregunta_id);
    }
    const columnas = [

        {
            title: 'Id Pregunta',
            field: 'pregunta_id',
            width: 100,
            maxWidth: 100

        },
        {
            title: 'Pregunta',
            field: 'pregunta_pregunta',
            width: 200,
            maxWidth: 200

        },
        {
            title: 'Respuesta',
            field: 'pregunta_respuesta',

        },

    ];
    const tableIcons = {
        Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
        Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
        Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
        DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
        Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
        Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
        FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
        LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
        NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
        PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
        ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
        Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
        SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
        ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
        ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };

    const peticionGet = async () => {
        await API.get("pregunta")
            .then(response => {
                setData(response.data);
            })
    }

    const peticionDelete = async (preguntaId) => {
        try {
            const response = await API.delete('pregunta/' + preguntaId,)
            if (response.data.flag == 1) {
                swal({
                    title: "La pregunta se ha eliminado con éxito.",
                    icon: "success"
                }).then(respuesta => {
                    window.location.reload();
                })
            } else {
                swal({
                    title: response.data.message,
                    text: "Error interno, intentelo más tarde.",
                    icon: "info"
                })
            }

        } catch (error) {
            // Error 😨
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                swal({
                    title: "Error: " + error.response.status,
                    text: "Verifique la información y vuelva a intentarlo.",
                    icon: "error"
                })
            } else if (error.request) {
                /*
                 * The request was made but no response was received, `error.request`
                 * is an instance of XMLHttpRequest in the browser and an instance
                 * of http.ClientRequest in Node.js
                 */
                swal({
                    title: "Error",
                    text: "No hubo respuesta, intentelo más tarde.",
                    icon: "error"
                })
            } else {
                // Something happened in setting up the request and triggered an Error
                swal({
                    title: "Error",
                    text: "No hubo respuesta, intentelo más tarde.",
                    icon: "error"
                })
            }
        }
    }

    useEffect(() => {
        if(localStorage.getItem("rol") != 'administrador' )
        {
            props.history.goBack();
        }
        peticionGet();
    }, [])

    const confirmacionEliminar = (preguntaSeleccionada) => {
        swal({
            title: "¿Está seguro que desea eliminar la pregunta del sistema?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionDelete(preguntaSeleccionada.pregunta_id);
            }
        })
    }
        return (
            <div>
                <Paper elevation={3} className={styles.Paper}>
                    <Box className={styles.BoxStyle} align="right" mb={2}>
                        <Link to="/CrearPregunta">
                            <Button variant="contained" color="primary">Crear pregunta</Button>
                        </Link>
                    </Box>
                    <MaterialTable
                        title="Preguntas"
                        columns={columnas}
                        data={data}
                        icons={tableIcons}
                        actions={[
                            {
                                icon: Edit,
                                tooltip: 'Editar',
                                onClick: (event, rowData) => selecionarPregunta(rowData, "Editar")
                            },
                            {
                                icon: DeleteOutline,
                                tooltip: 'Eliminar',
                                onClick: (event, rowData) => selecionarPregunta(rowData, "Eliminar")
                            },
                        ]}
                        options={{
                            actionsColumnIndex: -1,

                        }}
                        localization={{
                            header: {
                                actions: 'Acciones'
                            }
                        }}
                    />
                </Paper>
            </div>
        )
}

export default ConsultarPreguntas
