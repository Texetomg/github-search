import toast from 'react-hot-toast'

import { SET_CURRENT_USER } from './types';

export const setCurrentUser = (payload) => {
  return {
    type: SET_CURRENT_USER,
    payload
  };
}

export const logoutUser = () => {
  return dispatch => {
    dispatch(setCurrentUser({}));
    localStorage.removeItem('auth')
  }
}

export const loginUser = (data, history) => {
  return dispatch => {
    dispatch(setCurrentUser(data));
    localStorage.setItem('auth', JSON.stringify(data))
    toast.success('Success!')
    history.push('/')
  }
}
