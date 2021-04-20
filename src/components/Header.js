import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { Box, IconButton } from '@material-ui/core';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';

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
  userIcon: {
    fontWeight: 'bolder',
    color: '#0091ff',
    fontSize: '30px',
  },
  linkContainer: {
    flexGrow: 1,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="inherit">
        <Toolbar>
          <Box display="flex" flexDirection="row" alignItems="center" className={classes.linkContainer}>
            <Box variant="h5" className={classes.title}>Bookstore CMS </Box>
            <Box className={classes.menuButton} >BOOKS</Box>
            <Box className={classes.menuButton} >CATEGORIES</Box>
          </Box>
          <IconButton edge="start" className={classes.userIcon} color="inherit" aria-label="menu">
              <AccountCircleRoundedIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
