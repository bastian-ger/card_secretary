import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POINTS:
      return [...state, {round: action.round, playersObject: action.playersObject}];
    case actionTypes.DELETE_POINTS:
      const newArray = [...state];
      newArray.pop();
      return newArray;
    case actionTypes.DELETE_STATS:
      const anotherArray = [];
      return anotherArray;
    default:
      return state;
  }
}

export default reducer;
