
import React, { forwardRef, useState, useEffect } from 'react';
import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem, List , makeStyles} from '@material-ui/core';
import axios from 'axios';
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
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    Paper: { height: 650, padding: 20, marginLeft: 50, marginRight: 50, overflowY: 'auto' },
    Button: {
        textTransform: 'none',
        margin: theme.spacing(3)
    }
}))

const MisAsesorias = () => {
    const styles = useStyles();
    const [data, setData] = useState([]);
    const [asesoriaSeleccionada, setAsesoriaSeleccionada] = useState({
        oferta_id: "",
        oferta_fecha: "",
        oferta_tarifa: "",
        materia_nombre: "",

    })
    const selecionarAsesoria=(oferta_asesoria,caso)=>{
        setAsesoriaSeleccionada(oferta_asesoria);
        (caso==="Eliminar")?confirmacionEliminar(oferta_asesoria)
        :
        window.location.href = "http://localhost:3000/EditarAsesoria/"+oferta_asesoria.oferta_id;
    }

    const columnas = [
        {
            title: 'Id',
            field: 'oferta_id',
            
        },
        {
            title: 'Fecha',
            field: 'oferta_fecha',
            type: 'date'
        },
        {
            title: 'Tarifa',
            field: 'oferta_tarifa'
        },
        {
            title: 'Materia',
            field: 'materia_nombre'
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

    

    const baseURL = "http://localhost:8000/api/asesoria";
    const peticionGet = async () => {
        await axios.get(baseURL)
            .then(response => {
                setData(response.data);
            })
    }

    const peticionDelete = async (asesoriaId) => {
        try {
            
            const response = await axios.delete("http://localhost:8000/api/asesoria/"+ asesoriaId)
            if (response.data.flag == 1) {
                swal({
                    title: "La asesoría se ha eliminado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    window.location.reload();
                })
            } else {
                swal({
                    title: response.data.message,
                    text: "Error interno, intentelo más tarde",
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
                    text: "Verifique la información y vuelvalo a intentar",
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
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error"
                })
            } else {
                // Something happened in setting up the request and triggered an Error
                swal({
                    title: "Error",
                    text: "No hubo respuesta intentelo mas tarde",
                    icon: "error"
                })
            }
        }
    }
    useEffect(() => {
        peticionGet();
    }, [])

    const confirmacionEliminar = (asesoriaSeleccionada) => {
        swal({
            title: "¿Seguro que desea eliminar la asesoria "+asesoriaSeleccionada.materia_nombre+" del sistema?",
            text: "La información quedara guardada en la base de datos",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionDelete(asesoriaSeleccionada.oferta_id);
            }
        })
    }    
    return (
        <div>
            <Paper elevation={3} sclassName={styles.Paper}>
                <Link to="/RegistrarAsesoria" style={{ textDecoration: 'none' }}>
                    <Box align="right" mb={2}>

                        <Button variant="contained" color="primary">Registrar asesoría</Button>
                    </Box>
                </Link>
                <MaterialTable
                    title="Asesorías"
                    columns={columnas}
                    data={data}
                    icons={tableIcons}
                    actions={[
                        {
                            icon: Edit,
                            tooltip: 'Editar',
                            onClick: (event, rowData)=>selecionarAsesoria(rowData,"Editar")
                        },
                        {
                            icon: DeleteOutline,
                            tooltip: 'Eliminar',
                            onClick: (event, rowData)=>selecionarAsesoria(rowData,"Eliminar")
                        },
                    ]}
                    options={{
                        actionsColumnIndex: -1
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

export default MisAsesorias