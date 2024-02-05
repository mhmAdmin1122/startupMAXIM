import React from 'react'

const Button = ({dynamicText}:any) => {
  return (
    <button className="dynamic-button">{dynamicText}</button>
  )
}

export default Button;