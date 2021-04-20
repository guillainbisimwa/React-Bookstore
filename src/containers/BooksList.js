import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import Book from '../components/Book';
import { changeFilter, removeBook } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);
  const categories = useSelector((state) => state.filterReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(removeBook(book));
  };

  const handleFilterChange = (category) => dispatch(changeFilter(category));

  return (
  <div>
    <CategoryFilter filterHandler={handleFilterChange} />
      <Box>
        {
          books.filter((book) => (categories === 'All'
            ? books
            : book.category === categories)).map((book, index) => (
            <Box key={book.id}>
              <Book
                book={book} id={index + 1} removeBookHandler={ (book) => handleRemoveBook(book)}
              />
            </Box>
          ))
        }
      </Box>
  </div>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
