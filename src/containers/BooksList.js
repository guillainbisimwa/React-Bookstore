import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const BooksList = () => {
  const books = useSelector((state) => state.bookReducer);

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(REMOVE_BOOK(id));
  };

  return (
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
          books.map((book) => (
            <tr key={book.id}>
              <Book
                book={book} removeBookHandler={ (book) => handleRemoveBook(book)}
              />
            </tr>
          ))
        }
      </tbody>
    </table>
  );
};

BooksList.propTypes = {
  books: PropTypes.array,
};

BooksList.defaultProps = {
  books: [],
};

export default BooksList;
