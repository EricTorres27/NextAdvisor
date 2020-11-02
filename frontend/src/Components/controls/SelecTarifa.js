import React from 'react'
import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from '@material-ui/core';

export default function SelectTarifa(props) {

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
                    <MenuItem value="">Seleccione la tarifa por hora</MenuItem>
                    <MenuItem key="1" value="10">10</MenuItem>
                    <MenuItem key="2" value="20">20</MenuItem>
                    <MenuItem key="3" value="30">30</MenuItem>
                    <MenuItem key="4" value="40">40</MenuItem>
                    <MenuItem key="5" value="50">50</MenuItem>
                    <MenuItem key="6" value="60">60</MenuItem>
                    <MenuItem key="7" value="70">70</MenuItem>
                    <MenuItem key="8" value="80">80</MenuItem>
                    <MenuItem key="9" value="90">90</MenuItem>
                    <MenuItem key="10" value="100">100 </MenuItem>
                </MuiSelect>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </div>
    )
}
