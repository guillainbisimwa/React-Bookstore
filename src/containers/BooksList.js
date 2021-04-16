import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { CHANGE_FILTER, REMOVE_BOOK } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);
  const categories = useSelector((state) => state.filter);

  const dispatch = useDispatch();

  const handleRemoveBook = (book) => {
    dispatch(REMOVE_BOOK(book));
  };

  const handleFilterChange = (category) => {
    dispatch(CHANGE_FILTER(category));
  };

  return (
  <div>
    <CategoryFilter filterHandler={handleFilterChange} />
    <table>
      <thead>
        <tr>
          <th>Book ID</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {
          books.filter((book) => (categories === 'All'
            ? true
            : book.category === categories)).map((book) => (
            <tr key={book.id}>
              <Book
                book={book} removeBookHandler={ (book) => handleRemoveBook(book.id)}
              />
            </tr>
          ))
        }
      </tbody>
    </table>
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
