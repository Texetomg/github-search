import { SET_CURRENT_USER } from '../actions/types'

const loadState = stateName => {
  const data = localStorage.getItem(stateName)
  return data ? JSON.parse(data) : {}
}

const initialState = {
  user: loadState('auth')
};

export default (state = initialState, action = {}) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return action.payload
    default: return state
  }
}
