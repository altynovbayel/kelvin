import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Pages } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Pages.Main/>}/>
      </Routes>
    </div>
  )
}

export default App