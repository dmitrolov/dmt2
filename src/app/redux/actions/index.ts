import { User } from '../../types/user/User';
import { actions } from '../constants';
import { ClientWindowResolution } from '../../types/window/window';

const { userActionTypes, windowActionTypes } = actions;

const createAction = (type: string, payload: any = null) => {
  return {
    type,
    payload
  };
};

export const setUserActionConverter = (user: User) => createAction(userActionTypes.SET_USER, user);
export const setWindowActionConverter = (resolution: ClientWindowResolution) => createAction(windowActionTypes.GET_RESOLUTION, resolution);
