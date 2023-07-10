import React from 'react'
import MainRoutes from './routes'

import { Components } from './components'
import './App.scss'

import axios from 'axios'

axios.defaults.baseURL = 'https://kelvinsite.pythonanywhere.com'


function App() {
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))

  React.useEffect(() => {
    !cart && localStorage.setItem('kelvin_cart', JSON.stringify([]))
    localStorage.setItem('discount', 0) 
  }, [])
  
  return (
    <div>
      <Components.Navbar />
      <MainRoutes />
      <Components.Footer/>
    </div>
  )
}

export default App