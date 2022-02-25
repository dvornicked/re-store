import React, { Component } from 'react'
import { connect } from 'react-redux'
import { booksLoaded, booksRequested, booksError } from '../../actions'
import BookListItem from '../book-list-item/book-list-item'
import Spinner from '../spinner'
import ErrorIndicator from '../error-indicator'

import { withBookstoreService } from '../hoc'
import { compose } from '../../utils'


import './book-list.css'

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, booksRequested, booksError } = this.props
    booksRequested()
    bookstoreService.getBooks().then(data => booksLoaded(data)).catch(err => booksError(err))
  }

  render() {
    const { books, loading, error } = this.props
    if (loading) return <Spinner />
    if (error) return <ErrorIndicator />
    return (
      <ul className='book-list d-flex flex-wrap'>
        {books.map(book => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = { booksLoaded, booksRequested, booksError }

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
