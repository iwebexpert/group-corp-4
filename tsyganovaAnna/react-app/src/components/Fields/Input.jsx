import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import { TextField, FormHelperText } from '@mui/material'
export default function Input({
  label,
  multiline,
  rows,
  value,
  error,
  errorLabel,
  disabled,
  type,
  onChange,
}) {
  const id = uuidv4()
  return (
    <>
      <TextField
        id={id}
        label={label}
        size="small"
        fullWidth
        margin="dense"
        type={type}
        error={error}
        multiline={multiline}
        rows={rows}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {errorLabel && (
        <FormHelperText id={id} error>
          {errorLabel}
        </FormHelperText>
      )}
    </>
  )
}
Input.defaultProps = {
  label: '',
  multiline: false,
  rows: 1,
  value: '',
  error: false,
  disabled: false,
  errorLabel: '',
  type: 'text',
  onChange: () => {},
}

Input.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  errorLabel: PropTypes.string,
  error: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
