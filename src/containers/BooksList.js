import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ books }) => (
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
              id={book.id}
              title={book.title}
              category={book.category}
            />
          </tr>
        ))
      }
    </tbody>
  </table>
);

const mapStateToProps = (state) => ({
  books: state.bookReducer,
});

BooksList.propTypes = {
  books: PropTypes.oneOfType(['string', 'array', 'object']),
};

BooksList.defaultProps = {
  books: {},
};

export default connect(mapStateToProps, null)(BooksList);
