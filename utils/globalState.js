/* eslint-disable max-lines-per-function */
/* eslint-disable default-case */
import * as types from '../actions/types';

// eslint-disable-next-line complexity
export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOGIN_USERNAME_CHANGED:
      return {
        ...state,
        user: { ...state.user, email: action.payload },
      };
    case types.LOGIN_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, password: action.payload },
      };
    case types.LOGGED_IN:
      return {
        ...state,
        user: { ...state.user, token: action.payload },
      };
    case types.SIGNUP_PASSWORD_CHANGED:
      return {
        ...state,
        user: { ...state.user, signup_password: action.payload },
      };
    case types.SIGNUP_PASSWORDCONF_CHANGED:
      return {
        ...state,
        user: { ...state.user, signup_passwordConf: action.payload },
      };
    case types.SIGNED_UP:
      return {
        ...state,
        user: {
          ...state.user,
          signup_password: '',
          signup_passwordConf: '',
          token: action.payload.token,
        },
      };
    case types.LOGGED_OUT:
      return {
        ...state,
        user: {
          ...state.user,
          password: '',
          token: '',
        },
      };
    case types.FIRST_NAME_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          firstName: action.payload,
        },
      };
    case types.LAST_NAME_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          lastName: action.payload,
        },
      };
    case types.BIRTH_DATE_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          birthDate: action.payload,
        },
      };
    case types.CITY_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          city: action.payload,
        },
      };
    case types.GPA_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          gpa: action.payload,
        },
      };
    case types.GENDER_CHANGED:
      return {
        ...state,
        user: {
          ...state.user,
          gender: action.payload,
        },
      };
    case types.PROGRAMS_RECEIVED:
      return {
        ...state,
        programs: action.payload,
      };
    case types.CURR_PROG_ID_CHANGED:
      return {
        ...state,
        currProgId: action.payload,
      };
    case types.default:
      return state;
  }
};

export const initialState = {
  user: {
    token: '',
    email: '',
    password: '',
    signup_password: '',
    signup_passwordConf: '',
    statusActivated: false,
    firstName: '',
    lastName: '',
    birthDate: new Date(),
    city: '',
    gpa: '',
    gender: '',
    complete: false,
  },
  programs: [],
  currProgId: '',
};
