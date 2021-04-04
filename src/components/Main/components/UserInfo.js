import React from 'react'
import { CardHeader, Avatar } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'
import { makeStyles } from '@material-ui/core/styles'
import toast from 'react-hot-toast'

const useStyles = makeStyles({
  avatar: {
    width: 60,
    height: 60
  },
  login: {
    fontSize: 20,
  }
})

const UserInfo = ({ data = {}, loading = true, usererror }) => {
  const classes = useStyles()
  console.log(usererror)
  return (
   <CardHeader
      avatar={
        loading ? (
          <Skeleton animation="wave" variant="circle" width={60} height={60} />
        ) : (
          <Avatar className={classes.avatar} src={data.avatar_url }/>
        )
      }
      title={
        loading ? (
          <Skeleton animation="wave" width={50} height={20} />
        ) : (
          <span className={classes.login}>
            {data.login}
          </span>
        ) 
      }
    />
  )
}

export default UserInfo
