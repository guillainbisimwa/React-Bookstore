import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  container: {
    background: '#fff',
  },
}));

const Book = ({ book, removeBookHandler, id }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} p={1} mt={5} color='inherit' boxShadow={2}>
      <div>{ id }</div>
      <div>{ book.title }</div>
      <div>{ book.category }</div>
      <div>
      <button
          type="button"
          onClick={() => removeBookHandler(book)}
        >
          Remove Book
        </button>
      </div>
    </Box>
  );
};

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
