
import React, { forwardRef, useState, useEffect } from 'react';
import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem, List } from '@material-ui/core';
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


const MisAsesorias = () => {

    const styles = {
        Paper: { height: 650, padding: 20, marginLeft: 50, marginRight: 50, overflowY: 'auto' }
    }

    const columnas = [
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

    const [data, setData] = useState([]);

    const baseURL = "http://localhost:8000/api/asesoria";
    const peticionGet = async () => {
        await axios.get(baseURL)
            .then(response => {
                setData(response.data);
            })
    }
    useEffect(() => {
        peticionGet();
    }, [])

    
    return (
        <div>
            <Paper elevation={3} style={styles.Paper}>
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
                            tooltip: 'Editar'
                        },
                        {
                            icon: DeleteOutline,
                            tooltip: 'Eliminar'
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