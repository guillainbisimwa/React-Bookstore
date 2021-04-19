import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, removeBookHandler, id }) => (
  <>
    <td>{ id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
    <td>
    <button
        type="button"
        onClick={() => removeBookHandler(book)}
      >
        Remove Book
      </button>
    </td>
  </>
);

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
