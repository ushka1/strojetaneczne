import * as actionTypes from '../Actions/ActionTypes';

const initialState = {
  position: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_POSITION:
      return {
        position: action.position,
      };
    case actionTypes.CLEAR_POSITION:
      return {
        position: null,
      };
    default:
      return state;
  }
};

export default reducer;
