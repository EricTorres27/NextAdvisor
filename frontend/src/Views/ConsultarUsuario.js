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
    modal: {
        position: "absolute",
        width: 500,
        height: 300,
        backgroundColor: "white",
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
    },
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
            height: 650,
            padding: 20,
            marginLeft: 50,
            marginRight: 50,
            overflowY: 'auto',
        },
        [theme.breakpoints.up('lg')]: {
            height: 630,
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

const ConsultarUsuario = (props) => {

    const [modalCrearUsuario, setModalCrearusuario] = useState(false);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState({
        cuenta_apellido_materno: "",
        cuenta_apellido_paterno: "",
        cuenta_correo: "",
        cuenta_id: "",
        cuenta_nombre: "",
        cuenta_nombre_usuario: "",
        rol_nombre: "",
    })
    const selecionarUsuario = (cuenta, caso) => {
        setUsuarioSeleccionado(cuenta);
        (caso === "Eliminar") ? confirmacionEliminar(cuenta)
            :
            props.history.push("/EditarUsuario/" + cuenta.cuenta_id);
    }
    const abirCerrarModalCrear = () => {
        setModalCrearusuario(!modalCrearUsuario);
    }

    const styles = useStyles();
    const bodyCrear = (
        <Box className={styles.modal} align="right">
            <Button onClick={() => abirCerrarModalCrear()} variant="contained" color="secondary">X</Button>
            <Container>
                <Box align="center" mt={5} mb={10}>
                    <Typography variant="h5">¿Que desea crear?</Typography>
                </Box>
                <Box ml={3} mt={1} align="center">
                    <Link to="/CrearUsuario" style={{ textDecoration: 'none' }}>
                        <Button onClick={() => abirCerrarModalCrear()} className={styles.Button} variant="contained" color="primary">Estudiante</Button>

                    </Link>
                    <Link to="/CrearAdministrador" style={{ textDecoration: 'none' }}>
                        <Button onClick={() => abirCerrarModalCrear()} className={styles.Button} variant="contained" color="primary">Administrador</Button>
                    </Link>
                </Box>
            </Container>
        </Box>
    )
    const columnas = [
        {
            title: 'Id',
            field: 'cuenta_id',
            type: 'numeric'
        },
        {
            title: 'Nombre Usuario',
            field: 'cuenta_nombre_usuario'
        },
        {
            title: 'Correo',
            field: 'cuenta_correo'
        },
        {
            title: 'Nombre',
            field: 'cuenta_nombre'
        },
        {
            title: 'Apellido Paterno',
            field: 'cuenta_apellido_paterno'
        },
        {
            title: 'Apellido Materno',
            field: 'cuenta_apellido_materno'
        },
        {
            title: 'Rol',
            field: 'rol_nombre'
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

    const peticionGet = async () => {
        await API.get("cuenta/listarCuentas", { headers: { "Authorization": "Bearer " + localStorage.token } })
            .then(response => {
                setData(response.data);
            })
    }
    const peticionDelete = async (cuentaId) => {
        try {
            const response = await API.delete('cuenta/eliminarUsuario/' + cuentaId, { headers: { "Authorization": "Bearer " + localStorage.token } })
            if (response.data.flag == 1) {
                swal({
                    title: "El usuario se ha eliminado con éxito",
                    icon: "success"
                }).then(respuesta => {
                    window.location.href = "http://nextadvisor.com.mx/ConsultarUsuario";
                })
            } else {
                swal({
                    title: response.data.message,
                    text: "Error interno, intentelo más tarde.",
                    icon: "info"
                })
            }

        } catch (error) {
            if (error.response) {
                swal({
                    title: "Error: " + error.response.status,
                    text: "Verifique la información y vuelva a intentarlo.",
                    icon: "error"
                })
            } else if (error.request) {
                swal({
                    title: "Error",
                    text: "No hubo respuesta, intentelo más tarde.",
                    icon: "error"
                })
            } else {
                swal({
                    title: "Error",
                    text: "No hubo respuesta, intentelo más tarde.",
                    icon: "error"
                })
            }
            console.log(error);

        }
    }
    useEffect(() => {
        peticionGet();
    }, [])


    const confirmacionEliminar = (cuentaSeleccionada) => {
        swal({
            title: "¿Está seguro que desea eliminar al usuario " + cuentaSeleccionada.cuenta_nombre_usuario + " del sistema?",
            text: "La información quedara guardada en la base de datos.",
            buttons: ["No", "Si"]
        }).then(respuesta => {
            if (respuesta) {
                peticionDelete(cuentaSeleccionada.cuenta_id);
            }
        })
    }
    const role = localStorage.getItem("rol");
    if (role == "administrador") {
        return (
            <div>
                <Paper elevation={3} className={styles.Paper}>
                    <Box align="right" mb={2}>
                        <Button onClick={() => abirCerrarModalCrear()} variant="contained" color="primary">Crear usuario</Button>
                    </Box>
                    <MaterialTable
                        title="Usuarios"
                        columns={columnas}
                        data={data}
                        icons={tableIcons}
                        actions={[
                            {
                                icon: Edit,
                                tooltip: 'Editar',
                                onClick: (event, rowData) => selecionarUsuario(rowData, "Editar")
                            },
                            {
                                icon: DeleteOutline,
                                tooltip: 'Eliminar',
                                onClick: (event, rowData) => selecionarUsuario(rowData, "Eliminar")
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
                <Modal
                    open={modalCrearUsuario}
                    onClose={abirCerrarModalCrear}
                >
                    {bodyCrear}
                </Modal>
            </div>
        )
    } else {
        return <div>
            <Redirect to="/inicio" />
        </div>
    }
}

export default ConsultarUsuario
