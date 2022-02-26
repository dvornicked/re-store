import React from 'react'
import './book-list-item.css'

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book
  return (
    <div className="book-list-item card d-flex flex-column">
      <img src={coverImage} alt="Cover" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div className="book-details">
          <div className="book-title">{title}</div>
          <div className="text-muted">{author}</div>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <span>${price}</span>
          <button onClick={onAddedToCart} className="btn btn-info btn-sm ">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default BookListItem
