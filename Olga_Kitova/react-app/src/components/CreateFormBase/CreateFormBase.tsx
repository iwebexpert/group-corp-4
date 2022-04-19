import React from 'react'
import { FormControl, TextField } from '@mui/material'

type CreateFormBaseType = {
  arrayField: CreateFormBaseFieldType[]
}
type CreateFormBaseFieldType = {
  key?: Multiple
  label: string
  name: string
  type?: string
  value: Multiple
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
  multiline?: boolean
  minRows?: Multiple
  disabled?: boolean
}

export default function CreateFormBase(props: CreateFormBaseType) {
  const { arrayField } = props
  
  return (
    <FormControl
      fullWidth
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2 },
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {arrayField.map((obj: CreateFormBaseFieldType) => (
        <TextField
          key={obj.name}
          label={obj.label}
          name={obj.name}
          type={obj.type || 'text'}
          value={obj.value}
          onChange={obj.onChange}
          multiline={obj.multiline || false}
          minRows={obj.minRows || ''}
          disabled={obj.disabled || false}
        />
      ))}
    </FormControl>
  )
}
