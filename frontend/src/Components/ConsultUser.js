import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem, List } from '@material-ui/core';
import React, { Fragment, useState, useEffect } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import axios from 'axios'


const ConsultUser = () => {
    const baseURL='http://localhost:8000/api/cuenta';
    const [data, setData]=useState([]);
    const peticionGet=async()=>{
        await axios.get(baseURL)
        .then(response=>{
            setData(response.data);
        })
    }
    useEffect(()=>{
        peticionGet();
    },[])

    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 50, marginRight: 50, overflowY: 'auto' }
    }
    const StyledTableCell = withStyles((theme) => ({
        head: {
            backgroundColor: "#59A5D8",
            color: theme.palette.common.white,
        },
        body: {
            fontSize: 14,
        },
    }))(TableCell);

    const StyledTableRow = withStyles((theme) => ({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }))(TableRow);

    function createData(idCuenta, nombre, apellidoP, apellidoM, rol) {
        return { idCuenta, nombre, apellidoP, apellidoM, rol };
    }

    const rows = [
        createData(1,'Eric', 'Torres', 'Rodríguez', 'Estudiante'),
        createData(2,'Eric', 'Torres', 'Rodríguez', 'Estudiante'),
        createData(3,'Eric', 'Torres', 'Rodríguez', 'Estudiante'),
        createData(4,'Eric', 'Torres', 'Rodríguez', 'Estudiante'),
    ];

    const useStyles = makeStyles({
        table: {
            minWidth: 700,
        },
    });
    const classes = useStyles();

    return (
        <Fragment>
            <div style={{ height: "650px" }}>
                <Box color="primary.contrastText" mb={3}>
                    <Typography color="white" align="center" variant="h3">Usuarios</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>
                    <Box>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={1}>
                                <SearchIcon />
                            </Grid>
                            <Grid item xs={12} sm={10}>
                                <input type="text" placeholder="Buscar" className="form-control" name="busqueda"></input>
                            </Grid>
                            <Grid item xs={12} sm={1}>
                                <Link to="/CrearUsuario">
                                <PersonAddIcon button fontSize="large"/>
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={5}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Id Cuenta</StyledTableCell>
                                        <StyledTableCell>Nombre</StyledTableCell>
                                        <StyledTableCell >Apellido P.</StyledTableCell>
                                        <StyledTableCell >Apellido M.</StyledTableCell>
                                        <StyledTableCell >Rol</StyledTableCell>
                                        <StyledTableCell ></StyledTableCell>
                                        <StyledTableCell ></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.idCuenta}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.idCuenta}
                                            </StyledTableCell>
                                            <StyledTableCell >{row.nombre}</StyledTableCell>
                                            <StyledTableCell >{row.apellidoP}</StyledTableCell>
                                            <StyledTableCell >{row.apellidoM}</StyledTableCell>
                                            <StyledTableCell >{row.rol}</StyledTableCell>
                                            <StyledTableCell ><EditIcon fontSize="large" color="primary"/></StyledTableCell>
                                            <StyledTableCell ><DeleteForeverIcon fontSize="large" color="primary"/></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Paper>
            </div>
        </Fragment>
    )
}
export default ConsultUser
