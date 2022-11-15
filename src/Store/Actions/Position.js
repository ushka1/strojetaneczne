import * as actionTypes from './ActionTypes';

export const clearPosition = () => ({ type: actionTypes.CLEAR_POSITION });

export const setPosition = (distance) => ({
  type: actionTypes.SET_POSITION,
  position: distance,
});
