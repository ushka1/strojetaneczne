import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
  auth: false,
  token: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.LOG_IN:
      return {
        auth: true,
        token: action.token,
      };
    case ActionTypes.LOG_OUT:
      console.log('mew');
      return {
        auth: false,
        token: null,
      };
    case ActionTypes.AUTO_AUTH:
      return {
        auth: true,
        token: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
