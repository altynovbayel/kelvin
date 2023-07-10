import React from 'react'
import MainRoutes from './routes'

import Navbar from './components/Navbar'
import './App.scss'
import Lenis from '@studio-freight/lenis'

import axios from 'axios'

axios.defaults.baseURL = 'https://kelvinsite.pythonanywhere.com'


function App() {
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))

  const lenis = new Lenis()

  function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
  }

  raf(10000)
  

  React.useEffect(() => {
    !cart && localStorage.setItem('kelvin_cart', JSON.stringify([]))
    localStorage.setItem('discount', 0) 

    navigator.geolocation.getCurrentPosition(location => {
      localStorage.setItem('location', JSON.stringify([location.coords.latitude, location.coords.longitude]))
    })
  }, [])
  
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App