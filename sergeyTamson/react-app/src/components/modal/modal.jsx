import React from 'react'
import { createPortal } from 'react-dom'
import PropTypes from 'prop-types'
import './styles.scss'

const Modal = ({ children, open, onClose }) => {
  const onOverlayClick = (e) => {
    // if (e.target.className === 'container') {
    //   onClose(false)
    // }
  }

  return (
    open &&
    createPortal(
      <div className="root" onClick={onOverlayClick}>
        <div className="container">
          <div className="content">{children}</div>
        </div>
      </div>,
      document.body,
    )
  )
}

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
}

export default Modal
