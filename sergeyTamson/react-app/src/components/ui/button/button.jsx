import React from 'react'
import './styles.scss'

const Button = ({ type, onClick, text }) => (
  <button className="btn" type={type} onClick={onClick}>
    {text}
  </button>
)

export default Button
