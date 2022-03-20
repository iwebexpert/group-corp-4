import React from 'react'
import PropTypes from 'prop-types'
import './styles.scss'

const TextField = ({ type, value, placeholder, onChange }) => (
  <label className="field">
    <span className="field__title">{placeholder}</span>

    <input className="field__input" type={type} value={value} onChange={onChange} />
  </label>
)

TextField.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string || PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
}

export default TextField
