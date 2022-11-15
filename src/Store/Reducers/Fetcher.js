import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
  prices: null,
  items: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_PRICES:
      return {
        ...state,
        items: action.items,
        prices: action.data,
      };
    case ActionTypes.UPDATE_PRICES:
      // eslint-disable-next-line no-case-declarations
      const stateCopy = {
        ...state,
      };
      stateCopy.prices[action.product].prices[action.size] = action.newValue;
      return stateCopy;
    default:
      return state;
  }
};

export default reducer;
