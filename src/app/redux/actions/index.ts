import { User } from '../../types/user/User';
import { actions } from '../constants';

const { userActionTypes } = actions;

const createAction = (type: string, payload: any = null) => {
  return {
    type,
    payload
  };
};

export const setUserActionConverter = (user: User) => createAction(userActionTypes.SET_USER, user);
