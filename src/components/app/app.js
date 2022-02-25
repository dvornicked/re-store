import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShopHeader from '../shop-header'
import { CartPage, HomePage } from '../pages'

import './app.css'

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader numItems={5} total={210} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
      </Routes>
    </main>
  )
}

export default App
