import * as types from './types';

export const programs_received = (programs) => ({
  type: types.PROGRAMS_RECEIVED,
  payload: programs,
});

export const curr_prog_id_changed = (id) => ({
  type: types.CURR_PROG_ID_CHANGED,
  payload: id,
});
