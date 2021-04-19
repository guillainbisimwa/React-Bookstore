import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';
import BooksList from '../containers/BooksList';
import BooksForm from '../containers/BooksForm';
import Header from './Header';

const useStyles = makeStyles(() => ({
  container: {
    background: '#fafafa',
  },
}));

const App = () => {
  const classes = useStyles();

  return (
  <Box className={classes.container}>
    <Header />
    <BooksList />
    <BooksForm />
  </Box>
  );
};

export default App;
