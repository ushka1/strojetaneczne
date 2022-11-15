import * as ActionTypes from './ActionTypes';
import axios from '../../api/api';

export const fetchPrices = () => {
  return (dispatch) => {
    axios.get('/.json').then((res) => {
      dispatch({
        type: ActionTypes.FETCH_PRICES,
        data: res.data.prices,
        items: res.data.items,
      });
    });
  };
};

export const updatePrices = (product, size, newValue) => {
  return {
    type: ActionTypes.UPDATE_PRICES,
    product: product,
    size: size,
    newValue: newValue,
  };
};
