import { ClientWindowResolution, PlayerAccount } from '../../types/General';
import { actions } from '../constants';

const { userActionTypes, windowActionTypes } = actions;

const createAction = (type: string, payload: any = null) => {
  return {
    type,
    payload
  };
};

export const setUserActionConverter = (user: PlayerAccount) => createAction(userActionTypes.SET_USER, user);
export const setWindowActionConverter = (resolution: ClientWindowResolution) => createAction(windowActionTypes.GET_RESOLUTION, resolution);
