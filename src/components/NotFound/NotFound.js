import React from 'react'
import { Box } from '@material-ui/core'
import img from './404.jpeg'

const NotFound = () => {
  return (
    <Box display='flex' justifyContent='center' height='100vh' alignItems='center'>
      <img src={img} alt='404 img' height='60%'/>
    </Box>
  )
}

export default NotFound
