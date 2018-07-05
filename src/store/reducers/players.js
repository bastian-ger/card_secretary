import * as actionTypes from '../actions/actionTypes';

const initialState = {
  players: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_PLAYERS:
      return {
        ...state,
        players: action.players
      }
    default:
      return state;
  }
};

export default reducer;
