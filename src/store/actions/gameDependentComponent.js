import * as actionTypes from './actionTypes';

export const includeGameDependentComponentValue = (data) => {
  return {
    type: actionTypes.INCLUDE_GAME_DEPENDENT_COMPONENT_VALUE,
    data: data
  };
};
