import { actions } from '../constants';

const { user } = actions;

const createAction = (type: string, payload: any = null) => {
  return {
    type,
    payload
  };
};

export const getUserData = (data: {name: string}) => createAction(user.GET_USER, data);
