import React, { useState } from 'react';
import {
  Box, Button, Divider, Grid, makeStyles, MenuItem, TextField, withStyles,
} from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { createBook } from '../actions';

const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const ColorButton = withStyles(() => ({
  root: {
    color: '#eee',
    backgroundColor: '#0091ff',
    '&:hover': {
      backgroundColor: '#0091cc',
    },
    padding: '15px',
  },
}))(Button);

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#fff',
  },
  addBookText: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
    color: '#757575',
    fontWeight: 'bolder',
    fontSize: '20px',
  },
}));

const BooksForm = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const [bookName, setBookName] = useState('');
  const [bookCategory, setBookCategory] = useState('Action');

  const handleInput = ({ target: { value } }) => setBookName(value);
  const handleSelect = ({ target: { value } }) => setBookCategory(value);

  const handleSubmit = () => {
    dispatch(createBook({
      id: uuidv4(),
      title: bookName,
      category: bookCategory,
    }));
    setBookName('');
    setBookCategory('Action');
  };

  return (
    <Box mt={5} >
      <Divider/>
      <form>
        <Box mt={5}>
          <div className={classes.addBookText}>ADD NEW BOOK</div>
          <Grid container spacing={3}>
            <Grid item xs={8}>
              <TextField
                fullWidth
                onChange={handleInput} value={bookName}
                id="outlined-required"
                label="Book title"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                select
                fullWidth
                label="Select"
                onChange={handleSelect}
                value={bookCategory}
                variant="outlined"
              >
                {categories.map((category) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={2}>
              <ColorButton fullWidth type="button" onClick={handleSubmit} variant="contained" color="primary" className={classes.margin}>
                ADD BOOK
              </ColorButton>
            </Grid>
          </Grid>
        </Box>
      </form>
    </Box>
  );
};

export default BooksForm;
