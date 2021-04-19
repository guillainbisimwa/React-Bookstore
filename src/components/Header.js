import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(5),
    color: '#000',
    fontSize: '14px',
  },
  title: {
    fontWeight: 'bolder',
    color: '#0091ff',
    fontSize: '30px',

  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static" color="inherit">
          <Toolbar justifyContent="flex-start" >
            <Typography variant="h5" className={classes.title}>
            Bookstore CMS
            </Typography>
            <p className={classes.menuButton} >BOOKS</p>
            <p className={classes.menuButton} >CATEGORIES</p>
          </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;
