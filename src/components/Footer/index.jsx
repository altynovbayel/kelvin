import React from 'react'
import c from './Footer.module.scss'
import logo from '../../img/logo.svg'

const Footer = () => {
  return (
    <div className={c.footer}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={c.email}>
          <p>kelvinbrand@gmail.com</p>
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
