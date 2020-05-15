import * as types from './types';

export const first_name_changed = (firstName) => ({
  type: types.FIRST_NAME_CHANGED,
  payload: firstName,
});

export const last_name_changed = (lastName) => ({
  type: types.LAST_NAME_CHANGED,
  payload: lastName,
});

export const birth_date_changed = (birthDate) => ({
  type: types.BIRTH_DATE_CHANGED,
  payload: birthDate,
});

export const city_changed = (city) => ({
  type: types.CITY_CHANGED,
  payload: city,
});

export const gpa_changed = (gpa) => ({
  type: types.GPA_CHANGED,
  payload: gpa,
});

export const gender_changed = (gender) => ({
  type: types.GENDER_CHANGED,
  payload: gender,
});

export const user_interests_changed = (interests) => ({
  type: types.USER_INTERESTS_CHANGED,
  payload: interests,
});
