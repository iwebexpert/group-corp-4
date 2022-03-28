import React from 'react'
import PropTypes from 'prop-types'
import './index'

export default function Field({ label, type, keyObject, fields, setFields, disabledField }) {
  return (
    <>
      {type === 'textarea' ? (
        <div className='wrapperInput'>
          <label>{label}</label>
          <textarea
            rows="6"
            value={fields && fields.content ? fields.content : ''}
            onChange={(e) => setFields({ ...fields, content: e.target.value })}
            disabled={disabledField}
          />
        </div>
      ) : (
        <div className='wrapperInput'>
          <label>{label}</label>
          <input
            className="inputStyle"
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
  disabledField: PropTypes.bool,
}
