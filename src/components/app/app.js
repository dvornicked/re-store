import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { CartPage, HomePage } from '../pages'

import './app.css'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  )
}

export default App
