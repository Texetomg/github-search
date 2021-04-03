import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { privateRoutes, publicRoutes } from './routes'

const AppRouter = () => {
  const user = false
  return user ? (
    <Switch>
      {privateRoutes.map(({path, Component}) => (
        <Route
          key={path}
          path={path}
          component={Component}
          exact={true}
        />
      ))}
      <Redirect to='/'/>
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({path, Component}) => (
        <Route
          key={path}
          path={path}
          component={Component}
        />
      ))}
      <Redirect to='/login'/>
    </Switch>
  )
}

export default AppRouter