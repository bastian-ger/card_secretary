import * as actionTypes from '../actions/actionTypes';

// I deleted "loading: false" in AUTH_SUCCESS and put it to AUTH_STOP
// in order to correct the problem that two loading states from auth and namesPost
// have a tiny gap in between them that makes it impossible to use this if-statement:
// "if (this.props.authLoading || this.props.namesGetLoading) ..."

const initialState =  {
  token: null,
  userid: null,
  error: null,
  loading: false,
  changePasswordLoading: false,
  changePasswordError: null,
  changePasswordSuccess: false,
  deleteAccountLoading: false,
  deleteAccountError: null,
  deleteAccountSuccess: false
}

const reducer = (state = initialState, action) =>  {
  switch (action.type)  {
    case actionTypes.AUTH_START:
      return {
        ...state,
        error: null,
        loading: true
      };
    case actionTypes.AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
        userId: action.userId,
        error: null
      };
    case actionTypes.AUTH_FAIL:
      return {
        ...state,
        error: action.error,
        loading: false
      };
    case actionTypes.AUTH_LOGOUT:
      return {
        ...state,
        token: null,
        userId: null,
        error: null,
        loading: false
      }
    case actionTypes.AUTH_STOP:
      return {
        ...state,
        loading: false
      };
    case actionTypes.CHANGE_PASSWORD_START:
      return {
        ...state,
        changePasswordError: null,
        changePasswordLoading: true,
        changePasswordSuccess: false
      };
    case actionTypes.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordError: null,
        changePasswordSuccess: true
      };
    case actionTypes.CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordError: action.error,
        changePasswordSuccess: false
      };
    case actionTypes.CHANGE_PASSWORD_RESET:
      return {
        ...state,
        changePasswordLoading: false,
        changePasswordError: null,
        changePasswordSuccess: false
      };
    case actionTypes.DELETE_ACCOUNT_START:
      return {
        ...state,
        deleteAccountLoading: true,
        deleteAccountError: null,
        deleteAccountSuccess: false
      };
    case actionTypes.DELETE_ACCOUNT_SUCCESS:
      return {
        ...state,
        deleteAccountLoading: false,
        deleteAccountError: null,
        deleteAccountSuccess: true
      };
    case actionTypes.DELETE_ACCOUNT_FAIL:
      return {
        ...state,
        deleteAccountLoading: false,
        deleteAccountError: action.error,
        deleteAccountSuccess: false
      };
    case actionTypes.DELETE_ACCOUNT_RESET:
      return {
        ...state,
        deleteAccountLoading: false,
        deleteAccountError: null,
        deleteAccountSuccess: false
      };
    default:
      return state;
  }
}

export default reducer;
