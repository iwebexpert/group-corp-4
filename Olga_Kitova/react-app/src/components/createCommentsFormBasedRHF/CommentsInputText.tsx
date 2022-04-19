import React from 'react'
import { TextField } from '@mui/material'
import { Control, Controller } from 'react-hook-form'

type CommentsInputText = {
  control: Control
  defaultValue?: string
  name: string
  label: string
  type: string
}

export default function CommentsInputText({
  control,
  defaultValue,
  name,
  label,
  type,
}: CommentsInputText) {
  return (
    <Controller
      control={control}
      name={name}
      //defaultValue={defaultValue}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <TextField
          type={type}
          name={name}
          margin="normal"
          helperText={error ? error.message : null}
          size="medium"
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
