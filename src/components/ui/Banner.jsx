import React from 'react'

export const Banner = ({title, subtitle, children}) => {
  return (
    <div className="banner">
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
    </div>
  )
}
