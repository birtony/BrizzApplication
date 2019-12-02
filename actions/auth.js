import * as types from './types';

export const login_username_changed = (username) => ({
  type: types.LOGIN_USERNAME_CHANGED,
  payload: username,
});

export const login_password_changed = (password) => ({
  type: types.LOGIN_PASSWORD_CHANGED,
  payload: password,
});

export const logged_in = ({ token, logged_in }) => ({
  type: types.LOGGED_IN,
  payload: { token, logged_in },
});

export const signup_password_changed = (password) => ({
  type: types.SIGNUP_PASSWORD_CHANGED,
  payload: password,
});

export const signup_passwordConf_changed = (passwordConf) => ({
  type: types.SIGNUP_PASSWORDCONF_CHANGED,
  payload: passwordConf,
});

export const signed_up = ({ token, signed_up }) => ({
  type: types.SIGNED_UP,
  payload: { token, signed_up },
});

export const logged_out = () => ({
  type: types.LOGGED_OUT,
});
