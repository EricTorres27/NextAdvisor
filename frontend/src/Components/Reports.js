import { Box, Button, Divider, Grid, Typography, Paper, Container, Select, MenuItem } from '@material-ui/core';
import React, { Fragment, useState } from 'react';

const Reports = () => {
    const styles = {
        Paper: { height: 500, padding: 20, marginLeft: 200, marginRight: 200, overflowY: 'auto' }
    }

    return (
        <Fragment>
            <div style={{ height: "650px" }}>

                <Box color="primary.contrastText" mb={3}>
                    <Typography color="white" align="center" variant="h3">Reportes</Typography>
                </Box>
                <Paper elevation={3} style={styles.Paper}>

                </Paper>
            </div>
        </Fragment>
    )
}

export default Reports
