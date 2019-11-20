import * as types from './types';

export const login_username_changed = (username) => ({
  type: types.LOGIN_USERNAME_CHANGED,
  payload: username,
});

export const login_password_changed = (password) => ({
  type: types.LOGIN_PASSWORD_CHANGED,
  payload: password,
});

export const logged_in = ({token, complete}) => ({
  type: types.LOGGED_IN,
  payload: {token, complete},
});
