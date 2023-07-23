import React from 'react'
import MainRoutes from './routes'

import { Components } from './components'
import './App.scss'
import Lenis from '@studio-freight/lenis'

import axios from 'axios'
import { json, useLocation } from 'react-router-dom'

axios.defaults.baseURL = 'https://kelvinsite.pythonanywhere.com'


function App() {
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))
  const location = JSON.parse(localStorage.getItem('location'))
  const path = useLocation().pathname
  const lenis = new Lenis()
  const [footerState, setFooterState] = React.useState(false)
 
  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  raf(10000)
  

  React.useEffect(() => {
    !cart && localStorage.setItem('kelvin_cart', JSON.stringify([]))
    localStorage.setItem('discount', 0) 

    !location && navigator.geolocation.getCurrentPosition(location => {
      localStorage.setItem('location', JSON.stringify([location.coords.latitude, location.coords.longitude]))
    })
    localStorage.setItem('scroll', false)

  }, [])

  React.useEffect(() => {
    if (path === '/' && window.innerWidth <= 500) {
      setFooterState(true)
    } else if (window.innerWidth <= 500){
      setFooterState(false)
    }
  }, [path])


  return (
    <div>
      <Components.Navbar />
      <div style={{
        minHeight: 'calc(100vh - 80px)'
      }}>
        <MainRoutes />
      </div>
      {
        footerState ? <Components.Footer /> : window.innerWidth >= 500 ? <Components.Footer /> : null
      }
    </div>
  )
}

export default App