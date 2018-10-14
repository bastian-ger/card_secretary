import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () =>  {
  return  {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (authData) =>  {
  return  {
    type: actionTypes.AUTH_SUCCESS,
    authData: authData
  };
};

export const authFail = (error) =>  {
  return  {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const auth = (email, password, isSignUpMode) =>  {
  let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=' + process.env.REACT_APP_FIREBASE;
  const authData = {
    email: email,
    password: password,
    returnSecureToken: true
  };
  if (!isSignUpMode) {
    url = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${process.env.REACT_APP_FIREBASE}`;
  }
  return dispatch => {
    dispatch(authStart());
    axios.post(url, authData)
      .then(response => {
        console.log(response);
        dispatch(authSuccess(response.data));
      })
      .catch(error => {
        console.log(error);
        dispatch(authFail());
      })
  };
};
