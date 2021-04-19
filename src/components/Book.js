import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import {
  Box, CircularProgress, Grid, Link, Typography,
} from '@material-ui/core';

const linkButton = (e, func) => {
  e.preventDefault();
  func();
};

const useStyles = makeStyles((theme) => ({
  container: {
    background: '#fff',
  },
  title: {
    marginTop: theme.spacing(1),
    fontWeight: 'bolder',
    color: '#000',
    fontSize: '20px',
  },
  category: {
    color: '#757575',
    fontWeight: 'bolder',
  },
  author: {
    color: '#3891d8',
  },
  bottomButton: {
    marginTop: theme.spacing(2),
  },
  linkButton: {
    color: '#3891d8',
    marginRight: theme.spacing(2),
  },
  progress: {
    color: '#3891d8',
    marginRight: theme.spacing(2),
    marginTop: theme.spacing(1),
  },
  completed: {
    color: '#757575',
  },
}));

const Book = ({ book, removeBookHandler }) => {
  const classes = useStyles();

  return (
    <Box className={classes.container} p={2} mt={5} color='inherit' boxShadow={2}>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <div className={classes.category}>{ book.category }</div>
          <div className={classes.title}>{ book.title }</div>
          <div className={classes.author}>Author</div>
          <div className={classes.bottomButton}>
            <Link className={classes.linkButton} href="#">Comments</Link>
            <Link
              href="#"
              className={classes.linkButton}
              onClick={(e) => linkButton(e, () => removeBookHandler(book))}
            >
              Remove
            </Link>
            <Link className={classes.linkButton} href="#">Edit</Link>
          </div>
        </Grid>
        <Grid item xs={4} display='flex' alignItems="center">
          <Box display='flex' justifyContent="center" alignItems="center">
            <CircularProgress thickness={3} className={classes.progress} size={70} variant="determinate" value={64} />
            <Box >
              <Typography variant='h4'>64%</Typography>
              <Typography className={classes.completed} >Completed</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={4}>
          3
        </Grid>
      </Grid>
    </Box>
  );
};

Book.propTypes = {
  removeBookHandler: PropTypes.func.isRequired,
  book: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};

export default Book;
