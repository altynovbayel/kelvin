import React from 'react'
import MainRoutes from './routes'

import Navbar from './components/Navbar'
import './App.scss'

import axios from 'axios'
import { GetMapApi, getMapApi } from './api'

axios.defaults.baseURL = 'https://kelvinsite.pythonanywhere.com'


function App() {
  const cart = JSON.parse(localStorage.getItem('kelvin_cart'))

  React.useEffect(() => {
    if(!cart && cart?.length === 0 ){
      localStorage.setItem('kelvin_cart', JSON.stringify([]))
      localStorage.setItem('discount', 0) 
    }
  }, [])
  
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App