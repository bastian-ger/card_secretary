import * as actionTypes from '../actions/actionTypes';

const initialState = {
  value: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCLUDE_GAME_DEPENDENT_COMPONENT_VALUE:
      return {
        ...state,
        value: action.data
      }
    default:
      return state;
  }
};

export default reducer;
