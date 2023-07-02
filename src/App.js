import React from 'react'
import MainRoutes from './routes'

import Navbar from './components/Navbar'
import './App.scss'

import axios from 'axios'

axios.defaults.baseURL = 'https://kelvinsite.pythonanywhere.com'


function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App