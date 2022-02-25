import React from 'react'
import './shopping-cart-table.css'

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className='table table-hover'>
        <thead>
          <tr className='table-dark'>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className='table-light'>
            <td>1</td>
            <td>Site Reability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button className="btn btn-outline-success btn-sm">
                <i className="bi bi-plus-circle action-icon"> </i>
              </button>
              <button className="btn btn-outline-info btn-sm">
                <i className="bi bi-dash-circle action-icon"> </i>
              </button>
              <button className="btn btn-outline-danger btn-sm">
                <i className="bi bi-trash action-icon"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='total'>
        Total: $201
      </div>
    </div>
  )
}

export default ShoppingCartTable
