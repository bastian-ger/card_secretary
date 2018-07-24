import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POINTS:
      return [...state, {round: action.round, playersObject: action.playersObject}];
    default:
      return state;
  }
}

export default reducer;
