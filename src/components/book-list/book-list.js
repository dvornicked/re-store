import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchBooks, bookAddedToCart } from '../../actions'
import { bindActionCreators } from 'redux'
import BookListItem from '../book-list-item/book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import { withBookstoreService } from '../hoc'
import { compose } from '../../utils'

import './book-list.css'

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list d-flex flex-wrap">
      {books.map(book => (
        <li key={book.id}>
          <BookListItem
            onAddedToCart={() => onAddedToCart(book.id)}
            book={book}
          />
        </li>
      ))}
    </ul>
  )
}

class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props
    if (loading) return <Spinner />
    if (error) return <ErrorIndicator />
    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({ bookList: { books, loading, error } }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, { bookstoreService }) => bindActionCreators({
  fetchBooks: () => fetchBooks(bookstoreService)(),
  onAddedToCart: id => bookAddedToCart(id)
}, dispatch)

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
