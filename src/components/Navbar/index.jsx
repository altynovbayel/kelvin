import React from 'react'
import c from './Navbar.module.scss'
import logo from '../../img/logo.svg'
import cartLogo from '../../img/cart.svg'
import { navList } from '../../utils'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const [activeNav, setActiveNav] = React.useState(false)
  const [ dep, setDep ] = React.useState('')

  const Navigate = useNavigate()

  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))

  React.useEffect(() => {
    setTimeout(() => {
      setDep(Math.random())
    }, 100)
  }, [dep])

  const checkMenu = () => {
    if(activeNav){
      setActiveNav(false)
    }else{
      setActiveNav(true)
    }
  }

  return (
    <div className={c.header}>
      <div className={c.container}>
        <div className={c.logo} onClick={() => Navigate('/')}>
          <img src={logo} alt="logo" />
        </div>
        <div className={c.navbar}>
          <div className={activeNav ? c.navlist : c.disActive}>
            <ul >
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
          </div>
          <div 
            className={c.menu} 
            onClick={checkMenu}
          >
            <div></div>
            <p>Меню</p>
          </div>
        </div>
        <div className={c.products}>
          <button onClick={() => Navigate('/products')}>
            Перейти к товарам
          </button>
          <div 
            className={c.cart}
            onClick={() => Navigate('/cart/')}
          >
            <div className={c.count}>
              <span>
                {cart.length}
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
