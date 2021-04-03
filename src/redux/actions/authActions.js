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
  }
}

export const loginUser = data => {
  return dispatch => {
    dispatch(setCurrentUser(data));
    localStorage.setItem('auth', JSON.stringify(data))
  }
}
