import * as actionTypes from './actionTypes';

export const addPlayers = (players) => {
  return {
    type: actionTypes.ADD_PLAYERS,
    players: players
  };
};
