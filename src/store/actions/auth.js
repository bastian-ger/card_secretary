import * as actionTypes from './actionTypes';
import axios from 'axios';

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
            [response.data.localId]: { myName: '' }
          }
          axios.patch('https://card-secretary.firebaseio.com/users.json', patchObject)
            .then(response => {
              console.log('patch successful', response);
            })
            .catch(err => {
              console.log('patch failed', err);
            });
        }
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error));
      })
  };
};
