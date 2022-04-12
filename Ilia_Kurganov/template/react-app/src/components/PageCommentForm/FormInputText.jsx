import { TextField } from '@mui/material'
import { Controller } from 'react-hook-form'
import React from 'react'

function FormInputText({ control, name, label, onBlurCustom, defaultValue }) {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { onChange, value, onBlur }, fieldState: { error } }) => (
        <TextField
          name={name}
          margin="normal"
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value || ''}
          fullWidth
          onBlur={(event) => {
            onBlur(event)
            onBlurCustom(event)
          }}
          label={label}
          minRows={3}
          required
        />
      )}
    />
  )
}

export default FormInputText
