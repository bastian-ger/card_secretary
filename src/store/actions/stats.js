import * as actionTypes from './actionTypes';

export const storePoints = (playersObject, round) => {
  return {
    type: actionTypes.STORE_POINTS,
    playersObject: playersObject,
    round: round
  };
};

export const deletePoints = () => {
  return {
    type: actionTypes.DELETE_POINTS
  };
};

export const deleteStats = () => {
  return {
    type: actionTypes.DELETE_STATS
  };
};
