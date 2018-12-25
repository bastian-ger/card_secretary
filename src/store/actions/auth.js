import * as actionTypes from './actionTypes';
import axios from '../../axios-database';
import { namesPatch } from './names';

export const authStart = () =>  {
  return  {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (token, userId) =>  {
  return  {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

export const authFail = (error) =>  {
  return  {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const authStop = () => {
  return {
    type: actionTypes.AUTH_STOP
  };
};

export const checkAuthTimeout = (expiresInTime) => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expiresInTime * 1000);
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
        dispatch(authSuccess(response.data.idToken, response.data.localId));
        dispatch(checkAuthTimeout(response.data.expiresIn));
        if (isSignUpMode) {
          const patchObject = {
            [response.data.localId]: {
              myName: '',
              name0: '',
              name1: '',
              name2: '',
              name3: '',
              name4: '',
              name5: '',
              name6: ''
            }
          };
          dispatch(namesPatch(response.data.idToken, patchObject));
          dispatch(authStop());
        }
        dispatch(authStop());
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
        dispatch(authStop());
      })
  };
};
