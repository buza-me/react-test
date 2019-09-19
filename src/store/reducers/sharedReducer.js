import { SET_EMAIL, SET_PASSWORD, SET_SPIN } from '../actions/actionTypes';

const initialState = {
  email: '',
  password: '',
  spin: false
};

export default function sharedReducer(state = initialState, { type, email, password, spin }) {
  const newState = {...state};

  switch (type) {
    case SET_EMAIL:
      newState.email = email;
      break;
    case SET_SPIN:
      newState.spin = spin;
      break;
    default:
      return newState;
  };

  return newState;
};