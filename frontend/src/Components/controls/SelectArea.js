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
                    <MenuItem key="1" value="2">Ambiente construido</MenuItem>
                    <MenuItem key="2" value="3">Negocios</MenuItem>
                    <MenuItem key="3" value="2">Ciencias sociales</MenuItem>
                    <MenuItem key="4" value="3">Estudios creativos</MenuItem>
                    <MenuItem key="5" value="2">Salud</MenuItem>
                    <MenuItem key="6" value="3">Ingnieria</MenuItem>
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}
