import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem, List } from '@material-ui/core';
import React, { Fragment, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import EditIcon from '@material-ui/icons/Edit';
import SearchIcon from '@material-ui/icons/Search';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Link } from 'react-router-dom';

const FrecuentQS = () => {

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

    function createData(idPregunta, pregunta, respuesta) {
        return { idPregunta, pregunta, respuesta };
    }

    const rows = [
        createData(1, '¿Como doy una asesoria?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
        createData(2, '¿Como me inscribo a una sesoria?', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
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
                    <Typography color="white" align="center" variant="h3">Preguntas frecuentes</Typography>
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
                                <Link to="/CrearPregunta">
                                    <AddCircleIcon button fontSize="large" />
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box mt={5}>
                        <TableContainer component={Paper}>
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <StyledTableCell>Id Pregunta</StyledTableCell>
                                        <StyledTableCell>Pregunta</StyledTableCell>
                                        <StyledTableCell >Respuesta</StyledTableCell>
                                        <StyledTableCell ></StyledTableCell>
                                        <StyledTableCell ></StyledTableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <StyledTableRow key={row.idPregunta}>
                                            <StyledTableCell component="th" scope="row">
                                                {row.idPregunta}
                                            </StyledTableCell>
                                            <StyledTableCell >{row.pregunta}</StyledTableCell>
                                            <StyledTableCell >{row.respuesta}</StyledTableCell>
                                            <StyledTableCell ><EditIcon fontSize="large" color="primary" /></StyledTableCell>
                                            <StyledTableCell ><DeleteForeverIcon fontSize="large" color="primary" /></StyledTableCell>
                                        </StyledTableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                </Paper>
            </div>
        </Fragment >
    )
}

export default FrecuentQS
