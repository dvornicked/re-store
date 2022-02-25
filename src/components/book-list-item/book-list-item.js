import React from 'react'
import './book-list-item.css'

const BookListItem = ({ book }) => {
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
          <button className="btn btn-info btn-sm ">Add to cart</button>
        </div>
      </div>
    </div>
  )
}

export default BookListItem

/* <div className='book-cover'>
        <img src={coverImage} alt='cover' />
        <a href='/' className='book-title'>{title}</a>
        <div className='book-author'>{author}</div>
      </div>
      <div className='book-details'>
        <span className='book-price'>${price}</span>
        <button className='btn btn-info add-to-cart'>Add to cart</button>
      </div>*/
