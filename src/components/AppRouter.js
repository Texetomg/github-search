import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty';
import Login from './Login';
import Main from './Main'
import NotFound from './NotFound'
import { createBrowserHistory } from 'history'

export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector(state => state.auth)
  const isAuth = !isEmpty(auth?.user)

  return (
    <Route {...rest} component={(props) => (
      isAuth ? (
        <Component {...props} />    
      ) : (
        <Redirect to='/login' />
      )
    )} />
  )
}

export const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Switch>
      <Route path='/login' component={Login} />
      <PrivateRoute path='/' exact component={Main} />
      <PrivateRoute component={NotFound} />
    </Switch>
  )
}

export default AppRouter