import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';
//import axios from 'axios';

//componentDidMount(){


//}
export default function SelectMateria(props) {

    const { name, label, value, onChange, error = null } = props;

    return (
        <div>
            <FormControl variant="outlined"
                {...(error && { error: true})}
            >
                <InputLabel>{label}</InputLabel>
                <MuiSelect
                    name={name}
                    value={value}
                    onChange={onChange}>
                    <MenuItem value="">Seleccione la materia</MenuItem>
                    <MenuItem key="3" value="3">Diseño gráfico</MenuItem>
                    <MenuItem key="6" value="6">Expresión oral y escrita</MenuItem>
                   
                   
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}
