import * as actionTypes from './actionTypes';

export const addPlayers = (players) => {
  return {
    type: actionTypes.ADD_PLAYERS,
    players: players
  };
};

export const updatePoints = (players) => {
  return {
    type: actionTypes.UPDATE_POINTS,
    players: players
  };
};

export const deletePlayers = () => {
  return {
    type: actionTypes.DELETE_PLAYERS
  };
};
