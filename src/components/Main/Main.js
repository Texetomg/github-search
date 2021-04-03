import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  },
}));

const Main = () => {
  const classes = useStyles();

  return (
    <div>
       <AppBar position="static">
        <Toolbar justifyContent='end' display='flex'>
        <Typography variant="h6" className={classes.title}>
          Github search
        </Typography>
          <Avatar
            src={AccountCircle}
          />
         <IconButton aria-label="search" color="inherit">
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Main
