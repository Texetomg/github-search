import React from 'react'
import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton
}  from '@material-ui/core'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { makeStyles } from '@material-ui/core/styles'
import SearchBar from 'material-ui-search-bar'

const useStyles = makeStyles((theme) => ({
  title: {
    width: 160,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  avatar: {
    margin: '0 12px'
  },
  searchContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  },
  search: {
    width: '60%',
    minWidth: '200px',
    marginRight: '10px',
  
  }
}));

const Header = ({ user, handleLogout, handleSearch }) => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Github search
        </Typography>
        <div className={classes.searchContainer}>
          <SearchBar
            onRequestSearch={handleSearch}
            className={classes.search}
          />
        </div>
        <span>{user.login}</span>
        <Avatar
          className={classes.avatar}
          src={user.avatar }
        />
        <IconButton
          aria-label='search'
          color='inherit'
          onClick={handleLogout}
        >
          <ExitToAppIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
