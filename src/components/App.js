import { Box, Container } from '@material-ui/core';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const App = () => (
  <Box>
    <Header />
    <Container>
      <BooksList />
      <BooksForm />
    </Container>
  </Box>
);

export default App;
