import Login from "./Login";
import Main from './Main'

export const publicRoutes = [
  {
    path: '/login',
    Component: Login
  }
]

export const privateRoutes = [
  {
    path: '/',
    Component: Main
  }
]