import { FormControl, FormControlLabel, Checkbox as MuiCheckbox} from '@material-ui/core'
import React from 'react'

export default function CheckBox(props) {

    const { name, label, value, onChange,error=null, ...other} = props
    const convertToDefault =(name,value)=>({
        target:{
            name, value
        }
    })
    return (
        <FormControl>
            <FormControlLabel
                control={<MuiCheckbox
                    name={name}
                    color="primary"
                    checked={value}
                    onChange={e => onChange(convertToDefault(name,e.target.checked))}
                />}
            label={label}
            />
             {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
    )
}
