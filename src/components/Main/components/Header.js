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


const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  avatar: {
    margin: '0 12px'
  }
}));

const Header = ({ user, handleLogout }) => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' className={classes.title}>
          Github search
        </Typography>
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
