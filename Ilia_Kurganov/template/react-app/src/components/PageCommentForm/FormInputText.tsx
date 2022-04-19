import { TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'
import React from 'react'

export type FormInputTextType = {
  control: Control
  name: string
  label: string
  defaultValue: string
  onBlurCustom: (event: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>) => void
}

function FormInputText({ control, name, label, onBlurCustom, defaultValue }:FormInputTextType) {
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
            onBlur()
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
