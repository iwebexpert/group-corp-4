import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'

export default function CommentsInputText({control, defaultValue, name, label, type}) {
  return (
    <Controller
    control={control}
    name={name}
    defaultValue={defaultValue}
    render={({field: {onChange, value}, fieldState: {error}}) => (
      <TextField 
        type={type}
        name={name}
        margin="normal"
        helperText={error ? error.message : null}
        size="large"
        error={!!error}
        onChange={onChange}
        value={value || ''}
        fullWidth
        label={label}
        variant="outlined"
        required
      />
    )}
    />
  )
}

//Props types
CommentsInputText.defaultProps = {
  defaultValue: "",
  name: "",
  label: "",
  type: "text"
}
CommentsInputText.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}