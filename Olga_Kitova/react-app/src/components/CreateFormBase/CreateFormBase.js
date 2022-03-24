import React from 'react'
import { FormControl, TextField } from '@mui/material'
import PropTypes from 'prop-types'

export default function CreateFormBase(props) {
// Array with objects [{label,name,type,value,onChange, multiline, minRows, disabled},{},...]
    const {arrayField} = props
  return (
    <FormControl fullWidth component="form"
    sx={{
      '& .MuiTextField-root': { m: 2 },
      'display':'flex', 'flexDirection': 'column'
    }}>
       { arrayField.map((obj) => (
           <TextField 
           key={obj.name} 
           label={obj.label} 
           name={obj.name} 
           type={obj.type || 'text'}
           value={obj.value}
           onChange={obj.onChange}
           multiline={obj.multiline || false}
           minRows={obj.minRows || ''}
           disabled={obj.disabled || false}/>
       ))}
    </FormControl>
  )
}
//Props types
CreateFormBase.defaultProps = {
arrayField: [],
}
CreateFormBase.propTypes = {
arrayField: PropTypes.arrayOf(PropTypes.shape({
          label:PropTypes.string.isRequired,
          name: PropTypes.string.isRequired,
          type: PropTypes.string,
          value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
          onChange: PropTypes.func,
          multiline: PropTypes.bool,
          minRows: PropTypes.string,
          disabled: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
}))
}