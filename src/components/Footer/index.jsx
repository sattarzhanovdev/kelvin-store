import React from 'react'
import c from './Footer.module.scss'
import logo from '../../img/logo.svg'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
  return (
    <div className={c.footer}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={c.email}>
          <p onClick={() => navigate('confidentiality')}>ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</p>
          <p onClick={() => navigate('privacy-policy')}>ДОГОВОР ОФЕРТЫ</p>
          <p onClick={() => navigate('pay-info')}>ДОСТАВКА & ВОЗВРАТ</p>
        </div>
        <div className={c.links}>
          <a href="">INSTAGRAM</a>
          <a href="">VK</a>
          <a href="">TELEGRAM</a>
        </div>
      </div>
    </div>
  )
}

export default Footer
