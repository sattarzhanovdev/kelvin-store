import React from 'react'
import c from './Logo.module.scss'
import logo from '../../img/kelvin.svg'
 
const Logo = () => {
  return (
    <div className={c.logo}>
      <img src={logo} alt="logo" />
    </div>
  )
}

export default Logo
