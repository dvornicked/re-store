import React from 'react'
import { Link } from 'react-router-dom'

import './shop-header.css'

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className='shop-header'>
      <Link to='/' className="logo text-dark">
        re:Store
      </Link>
      <Link to='cart' className='shopping-cart'>
        <i className="bi bi-cart4 cart-icon"></i>
        {numItems} items (${total})
      </Link>
    </header>
  )
}

export default ShopHeader
