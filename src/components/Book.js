import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <>
    <td>{ book.id }</td>
    <td>{ book.title }</td>
    <td>{ book.category }</td>
  </>
);

Book.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Book;
