import React from 'react'
import PropTypes from 'prop-types'

export default function Field({ label, type, keyObject, fields, setFields }) {
  return (
    <>
      {type === 'textarea' ? (
        <div>
          <label>{label}</label>
          <textarea
            cols="20"
            rows="6"
            value={fields && fields.content ? fields.content : ''}
            onChange={(e) => setFields({ ...fields, content: e.target.value })}
          />
        </div>
      ) : (
        <div>
          <label>{label}</label>
          <input
            type={type}
            value={fields && fields[keyObject] ? fields[keyObject] : ''}
            onChange={(e) => setFields({ ...fields, [keyObject]: e.target.value })}
          />
        </div>
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
}
