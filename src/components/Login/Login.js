import React, {useEffect, useState} from 'react'
import firebase from "firebase"
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import LoginForm from './LoginForm'

firebase.initializeApp({
  apiKey: "AIzaSyA7L0aDWHAUoAQD86LKFxu6aE5_QUWOcms",
  authDomain: "interfax-git-search.firebaseapp.com",
})

const Login = () => {
  const [isSignedIn, setIsSignedIn] = useState(false)
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user)
      console.log("user", user)
    })
  }, [])
  const uiConfig = {
    signInFlow: 'popup',
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  return (
    <div>
      <LoginForm/>
      <StyledFirebaseAuth
        uiConfig={uiConfig}
        firebaseAuth={firebase.auth()}
      />
    
    </div>
  )
}

export default Login