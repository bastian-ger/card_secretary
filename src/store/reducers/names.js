import * as actionTypes from '../actions/actionTypes';

const initialState = {
  names: null,
  namesPostLoading: false,
  namesPostError: null,
  namesGetLoading: false,
  namesGetError: null,
  namesPatchLoading: false,
  namesPatchError: null,
  namesDeleteDatabaseLoading: false,
  namesDeleteDatabaseError: null
};

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case actionTypes.NAMES_POST_SUCCESS:
      return {
        ...state,
        names: action.names,
        namesPostLoading: false,
        namesPostError: null
      };
    case actionTypes.NAMES_POST_FAIL:
      return {
        ...state,
        namesPostLoading: false,
        namesPostError: action.error
      };
    case actionTypes.NAMES_POST_START:
      return {
        ...state,
        namesPostLoading: true,
        namesPostError: null
      };
    case actionTypes.NAMES_GET_START:
      return {
        ...state,
        namesGetLoading: true,
        namesGetError: null
      };
    case actionTypes.NAMES_GET_SUCCESS:
      return {
        ...state,
        names: action.names,
        namesGetLoading: false,
        namesGetError: null
      };
    case actionTypes.NAMES_GET_FAIL:
      return {
        ...state,
        namesGetLoading: false,
        namesGetError: action.error
      };
    case actionTypes.NAMES_PATCH_START:
      return {
        ...state,
        namesPatchLoading: true,
        namesPatchError: null
      };
    case actionTypes.NAMES_PATCH_SUCCESS:
      return {
        ...state,
        namesPatchLoading: false,
        namesPatchError: null
      };
    case actionTypes.NAMES_PATCH_FAIL:
      return {
        ...state,
        namesPatchLoading: false,
        namesPatchError: action.error
      };
    case actionTypes.NAMES_DELETE:
      return {
        ...state,
        names: null
      }
    case actionTypes.NAMES_DELETE_DATABASE_START:
      return {
        ...state,
        namesDeleteDatabaseLoading: true,
        namesDeleteDatabaseError: null
      };
    case actionTypes.NAMES_DELETE_DATABASE_SUCCESS:
      return {
        ...state,
        namesDeleteDatabaseLoading: false,
        namesDeleteDatabaseError: null
      };
    case actionTypes.NAMES_DELETE_DATABASE_FAIL:
      return {
        ...state,
        namesDeleteDatabaseLoading: false,
        namesDeleteDatabaseError: action.error
      };
    case actionTypes.NAMES_DELETE_DATABASE_RESET:
      return {
        ...state,
        namesDeleteDatabaseLoading: false,
        namesDeleteDatabaseError: null
      };
    default:
      return state;
  }
};

export default reducer;
