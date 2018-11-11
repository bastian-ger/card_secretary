import * as actionTypes from './actionTypes';
import axios from '../../axios-database';

const namesPostStart = () => {
  return {
    type: actionTypes.NAMES_POST_START
  };
};

const namesPostSuccess = (response, names) => {
  return {
    type: actionTypes.NAMES_POST_SUCCESS,
    names: names
  };
};

const namesPostFail = (error) => {
  return {
    type: actionTypes.NAMES_POST_FAIL,
    error: error
  };
};

export const namesPost = (names, userId, token) => {
  console.log('action ', userId);

  return dispatch => {
    namesPostStart();
    axios.put(`/users/${userId}.json?auth=${token}`, names)
      .then(response => {
        console.log(response.data);
        dispatch(namesPostSuccess(response.data, names));
      })
      .catch(error => {
        console.log(error);
        dispatch(namesPostFail(error));
      });
  };
};

const namesGetStart = () => {
  return {
    type: actionTypes.NAMES_GET_START
  };
};

const namesGetSuccess = (names) => {
  return {
    type: actionTypes.NAMES_GET_SUCCESS,
    names: names
  };
};

const namesGetFAIL = (error) => {
  return {
    type: actionTypes.NAMES_GET_FAIL,
    error: error
  };
};

export const namesGet = (token, userId) => {
  return dispatch => {
    dispatch(namesGetStart());
    const url = `/users/${userId}.json?auth=${token}`;
    axios.get(url)
      .then(response => {
        console.log('namesGet', response.data);
        dispatch(namesGetSuccess(response.data));
      })
      .catch(error => {
        console.log('namesGet', error);
        dispatch(namesGetFAIL(error));
      });
  }
};

const namesPatchStart = () => {
  return {
    type: actionTypes.NAMES_PATCH_START
  };
};

const namesPatchSuccess = () => {
  return {
    type: actionTypes.NAMES_PATCH_SUCCESS
  };
};

const namesPatchFail = (error) => {
  return {
    type: actionTypes.NAMES_PATCH_FAIL,
    error: error
  };
};

export const namesPatch = (token, data) => {
  return dispatch => {
    dispatch(namesPatchStart());
    axios.patch(`users.json?auth=${token}`, data)
      .then(response => {
        dispatch(namesPatchSuccess());
      })
      .catch(error => {
        dispatch(namesPatchFail(error));
      });
  }
};
