import React, { Component } from 'react'
import { connect } from 'react-redux'
import { booksLoaded } from '../../actions'
import BookListItem from '../book-list-item/book-list-item'

import { withBookstoreService } from '../hoc'
import { compose } from '../../utils'

import './book-list.css'

class BookList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props
    const data = bookstoreService.getBooks()

    this.props.booksLoaded(data)
  }

  render() {
    const { books } = this.props
    return (
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    )
  }
}

const mapStateToProps = ({ books }) => {
  return { books }
}

const mapDispatchToProps = { booksLoaded }

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
