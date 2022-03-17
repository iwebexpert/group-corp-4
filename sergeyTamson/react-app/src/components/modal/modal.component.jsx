import React from 'react'
import { createPortal } from 'react-dom'
import './styles.scss'

const Modal = ({ children, open, setOpen }) => {
  const onOverlayClick = (e) => {
    if (e.target.className === 'root') {
      setOpen(false)
    }
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

export default Modal
