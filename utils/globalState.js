import * as types from "../actions/types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USERNAME_CHANGED:
      return {
        ...state,
        user: { ...state.user, email: action.payload }
      };
    case types.LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, password: action.payload }
      };
    case types.LOGGED_IN:
      return {
        ...state,
        token: action.payload.token,
        user: {
          ...state.user,
          complete: action.payload.complete,
          logged_in: true
        }
      };
    case types.LOGGED_OUT:
      return {
        ...state,
        token: "",
        user: {
          ...state.user,
          logged_in: false
        }
      };
    default:
      return state;
  }
};

export const initialState = {
  token: "",
  user: {
    email: "",
    password: "",
    statusActivated: false
  }
};
