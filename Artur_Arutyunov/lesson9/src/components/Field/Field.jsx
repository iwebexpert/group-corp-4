import React from 'react'
import PropTypes from 'prop-types'
import { TextField } from '@mui/material'

export default function Field({ label, type, keyObject, fields, setFields, disabledField }) {
  return (
    <>
      {type === 'textarea' ? (
        <TextField
          fullWidth
          disabled={disabledField}
          size="small"
          label={label}
          multiline
          rows={4}
          value={fields && fields.content ? fields.content : ''}
          onChange={(e) => setFields({ ...fields, content: e.target.value })}
          margin="dense"
        />
      ) : (
        <TextField
          fullWidth
          type={type}
          size="small"
          label={label}
          value={fields && fields[keyObject] ? fields[keyObject] : ''}
          onChange={(e) => setFields({ ...fields, [keyObject]: e.target.value })}
          margin="dense"
        />
      )}
    </>
  )
}

Field.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  fields: PropTypes.any,
  keyObject: PropTypes.string,
  setFields: PropTypes.func,
  disabledField: PropTypes.bool,
}
