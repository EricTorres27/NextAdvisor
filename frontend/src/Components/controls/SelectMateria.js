import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

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
                    <MenuItem key="1" value="3">Diseño gráfico</MenuItem>
                    <MenuItem key="2" value="6">Expresión oral y escrita</MenuItem>
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}
