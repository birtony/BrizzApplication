import * as types from '../actions/types';

export const reducer = (state, action) => {
  switch (action.type) {
  case types.LOGIN_USERNAME_CHANGED:
    return {
      ...state,
      user: {...state.user, email: action.payload},
    };
  case types.LOGIN_PASSWORD_CHANGED:
    return {
      ...state,
      user: {...state.user, password: action.payload},
    };
  case types.LOGGED_IN:
    return {
      ...state,
      user: {
        ...state.user,
        token: action.payload.token,
        complete: action.payload.complete,
      },
    };
  default:
    return state;
  }
};

export const initialState = {
  token: '',
};
