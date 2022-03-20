import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const TextArea = ({ type, value, placeholder, onChange, disabled }) => (
  <label className="field">
    <span className="field__title">{placeholder}</span>

    <textarea
      className="field__input"
      type={type}
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  </label>
)

TextArea.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
}

export default TextArea
