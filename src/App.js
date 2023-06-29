import React from 'react'
import MainRoutes from './routes'

import './App.scss'
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header/>
      <MainRoutes />
    </div>
  )
}

export default App