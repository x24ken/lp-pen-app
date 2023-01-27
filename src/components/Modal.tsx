import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 1;
    }
    .modal-content {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        padding: 1rem;
        z-index: 2;
    }
`

interface Props {
  onClose: () => void
  children: React.ReactNode
}

const Modal: React.FC<Props> = ({ children, onClose }) => {
  return (
    <>
      <GlobalStyle />
      <div className='modal-overlay' onClick={onClose} />
      <div className='modal-content'>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </>
  )
}

export default Modal
