import * as ActionTypes from './ActionTypes';

export const logIn = (token) => {
  return { type: ActionTypes.LOG_IN, token: token };
};

export const logOut = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expires');
  return { type: ActionTypes.LOG_OUT };
};

export const checkAuth = () => {
  return (dispatch) => {
    if (localStorage.getItem('expires') && localStorage.getItem('token')) {
      const token = localStorage.getItem('token');
      const expires = localStorage.getItem('expires');

      if (expires > new Date().getTime()) {
        dispatch({ type: ActionTypes.AUTO_AUTH, token });
      }
    }
  };
};
