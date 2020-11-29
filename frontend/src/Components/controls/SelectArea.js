import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function SelectArea(props) {

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
                    <MenuItem value="">Seleccione una opción</MenuItem>
                    <MenuItem key="1" value="1">Ambiente construido</MenuItem>
                    <MenuItem key="2" value="2">Negocios</MenuItem>
                    <MenuItem key="3" value="3">Ciencias sociales</MenuItem>
                    <MenuItem key="4" value="4">Estudios creativos</MenuItem>
                    <MenuItem key="5" value="5">Salud</MenuItem>
                    <MenuItem key="6" value="6">Ingeniería</MenuItem>
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}
