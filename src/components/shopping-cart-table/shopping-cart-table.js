import React from 'react'
import { connect } from 'react-redux'

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart
} from '../../actions'

import './shopping-cart-table.css'

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item
    return (
      <tr key={id} className="table-light">
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm"
          >
            <i className="bi bi-plus-circle action-icon"> </i>
          </button>
          <button
            onClick={() => onDecrease(id)}
            className="btn btn-outline-info btn-sm"
          >
            <i className="bi bi-dash-circle action-icon"> </i>
          </button>
          <button
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm"
          >
            <i className="bi bi-trash action-icon"></i>
          </button>
        </td>
      </tr>
    )
  }
  return (
    <div className="shopping-cart-table">
      <h2>Your order</h2>
      <table className="table table-hover">
        <thead>
          <tr className="table-dark">
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    items: state.shoppingCart.cartItems,
    total: state.shoppingCart.orderTotal
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable) 
