import * as types from './types';

export const programs_received = (programs) => ({
  type: types.PROGRAMS_RECEIVED,
  payload: programs,
});
