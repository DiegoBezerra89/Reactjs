'use strict'

import React from 'react'

const Button = ({ children, handleClick }) => (
  <button
    className='main-button'
    onClick={handleClick}
    style={{
      marginTop: '30px',
      padding: '10px 15px',
      backgroundColor: { children }
    }}
  >{children}
  </button>
)

export default Button
