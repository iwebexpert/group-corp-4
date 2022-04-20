import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import { TextField } from '@mui/material'
export default function Input({
  label,
  name,
  value,
  required,
  type,
  error,
  helperText,
  disabled,
  multiline,
  rows,
  onChange,
}) {
  const id = uuidv4()
  return (
    <TextField
      id={id}
      label={label}
      name={name}
      value={value}
      required={required}
      type={type}
      error={error}
      helperText={helperText}
      disabled={disabled}
      multiline={multiline}
      rows={rows}
      onChange={onChange}
      size="small"
      fullWidth
      margin="dense"
    />
  )
}
Input.defaultProps = {
  label: '',
  name: '',
  value: '',
  required: false,
  type: 'text',
  error: false,
  multiline: false,
  rows: 1,
  disabled: false,
  errorLabel: '',
  onChange: () => {},
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  multiline: PropTypes.bool,
  required: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  errorLabel: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}