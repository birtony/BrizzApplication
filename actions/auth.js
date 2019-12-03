import * as types from './types';

export const login_username_changed = (username) => ({
  type: types.LOGIN_USERNAME_CHANGED,
  payload: username,
});

export const login_password_changed = (password) => ({
  type: types.LOGIN_PASSWORD_CHANGED,
  payload: password,
});

export const signup_passwordConf_changed = (passwordConf) => ({
  type: types.SIGNUP_PASSWORDCONF_CHANGED,
  payload: passwordConf,
});

export const logged_in = ({ token, logged_in, complete }) => ({
  type: types.LOGGED_IN,
  payload: { token, logged_in, complete },
});

export const logged_out = () => ({
  type: types.LOGGED_OUT,
});
