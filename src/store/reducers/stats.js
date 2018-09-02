import * as actionTypes from '../actions/actionTypes';

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_POINTS:
      return [...state, {round: action.round, playersObject: action.playersObject}];
    case actionTypes.DELETE_POINTS:
      let newArray = [...state];
      // a new array with a new first object has to be generated in case of
      // state.length === 0
      if (state.length === 1) {
        let justAnotherArray = [];
        const round = state[0].round;
        const playersObject = state[0].playersObject;
        for (let key in playersObject) {
          playersObject[key] = 0;
        }
        justAnotherArray.push({round: round, playersObject: playersObject});
        return justAnotherArray;
      }
      else {
        newArray.pop();
        return newArray;
      }
    case actionTypes.DELETE_STATS:

      const anotherArray = [];
      return anotherArray;
    default:
      return state;
  }
}

export default reducer;
