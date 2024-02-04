import React from 'react'
import './style.css'
const Modal = ({isShowModal,onClose,children}) => {
    if(!isShowModal)
     return null 
  return (
    <div className='isshadow' onClick={onClose}>
       <div className='Shadow-Modal  '>{children}</div>
    </div>
  )
}

export default Modal