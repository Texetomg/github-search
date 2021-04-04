import React from 'react'
import Box from '@material-ui/core/Box';
import { loginUser } from '../../redux/actions/authActions'
import firebase from '../../config/firebase-config'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import LoginForm from './LoginForm'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import toast from 'react-hot-toast'

const Login = () => {
  const dispatch = useDispatch()
  const isValid = (login, password) => login === 'admin' && password === '123'
  const history = useHistory()
  
  const onSubmit = ({ login, password }) => {
    if (isValid(login, password)) {
      dispatch(loginUser({
        user: {
          login,
          avatar: null
        }
      }, history))
    } else {
      toast.error('This is an error!');
    }
  }
  
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: ({ displayName, photoURL }) => {
        dispatch(loginUser({
          user: {
            login: displayName,
            avatar: photoURL
          }
        }, history))
      },
      signInFailure: () => {
        toast.error('This is an error!')
      }
    }
  }

  return (
    <Box
      display='flex'
      justifyContent='center'
      flexDirection='column'
      height='90vh'
    >
      <LoginForm onSubmit={onSubmit}/>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    </Box>
  )
}

export default Login
