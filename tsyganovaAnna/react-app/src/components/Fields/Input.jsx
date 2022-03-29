import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import PropTypes from 'prop-types'

import TextField from '@mui/material/TextField'

export default function Input({ label, multiline, rows, value, disabled, onChange }) {
  return (
    <TextField
      id={uuidv4()}
      label={label}
      size="small"
      fullWidth
      margin="dense"
      multiline={multiline}
      rows={rows}
      value={value}
      disabled={disabled}
      onChange={onChange}
    />
  )
}
Input.defaultProps = {
  label: '',
  multiline: false,
  rows: 1,
  value: '',
  disabled: false,
  onChange: () => {},
}

Input.propTypes = {
  label: PropTypes.string,
  multiline: PropTypes.bool,
  rows: PropTypes.number,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
}
