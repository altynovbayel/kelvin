import React from 'react'
import MainRoutes from './routes'

import './App.scss'
import Navbar from './components/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  )
}

export default App