import React from 'react'
import { CardHeader, Avatar } from '@material-ui/core'
import Skeleton from '@material-ui/lab/Skeleton'

const UserInfo = ({ data = {}, loading = true, error = {} }) => {
  return (
   <CardHeader
      avatar={
        loading ? (
          <Skeleton animation="wave" variant="circle" width={40} height={40} />
        ) : (
          <Avatar src={data.avatar_url }/>
        )
      }
      title={
        loading ? (
          <Skeleton animation="wave" width={50} height={10} />
        ) : (
          data.login
        ) 
      }
    />
  )
}

export default UserInfo
