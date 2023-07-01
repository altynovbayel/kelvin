import React from 'react'
import c from './Navbar.module.scss'
import logo from '../../img/logo.svg'
import cartLogo from '../../img/cart.svg'
import { navList } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState(false)

  const Navigate = useNavigate()

  return (
    <div className={c.header}>
      <div className={c.container}>
        <div className={c.logo} onClick={() => Navigate('/')}>
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
          <div 
            className={c.cart}
            onClick={() => Navigate('/cart/')}
          >
            <div className={c.count}>
              <span>
                2
              </span>
            </div>
            <img src={cartLogo} alt="cart" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
