import * as actionTypes from './actionTypes';

export const storePoints = (playersObject, round) => {
  return {
    type: actionTypes.STORE_POINTS,
    playersObject: playersObject,
    round: round
  }
}
