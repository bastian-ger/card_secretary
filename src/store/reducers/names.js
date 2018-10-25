import * as actionTypes from '../actions/actionTypes';

const initialState = {
  names: null,
  loading: false
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.NAMES_POST_SUCCESS:
      return {
        ...state,
        names: action.names,
        loading: false
      };
    case actionTypes.NAMES_POST_FAIL:
      return {
        ...state,
        loading: false
      };
    case actionTypes.NAMES_POST_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.NAMES_GET_START:
      return {
        ...state,
        loading: true
      };
    case actionTypes.NAMES_GET_SUCCESS:
      return {
        ...state,
        names: action.names,
        loading: false
      };
    case actionTypes.NAMES_GET_FAIL:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};

export default reducer;
