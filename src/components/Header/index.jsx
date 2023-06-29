import React from 'react'
import c from './Header.module.scss'
import logo from '../../img/logo.svg'
import cartLogo from '../../img/cart.svg'
import { navList } from '../../utils'

const Header = () => {
  const [activeNav, setActiveNav] = React.useState(false)
  return (
    <div className={c.header}>
      <div className={c.container}>
        <div className={c.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={c.navbar}>
          <ul className={activeNav ? c.navlist : c.disActive}>
            <div 
              className={c.active_menu} 
              onClick={() => setActiveNav(!activeNav)}
            >
              <div></div>
              <p>Меню</p>
            </div>
            {
              navList.map(item => (
                <li key={item.id}>
                  <p>
                    {item.title}
                  </p>
                </li>
              ))
            }
          </ul>
          <div 
            className={c.menu} 
            onClick={() => setActiveNav(!activeNav)}
          >
            <div></div>
            <p>Меню</p>
          </div>
        </div>
        <div className={c.products}>
          <button>
            Перейти к товарам
          </button>
          <div className={c.cart}>
            <span className={c.count}>2</span>
            <img src={cartLogo} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
