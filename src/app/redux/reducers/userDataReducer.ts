import { ActionReducer } from '../../types/General';
import { User } from '../../types/user/User';
import { actions } from '../constants';

const initialState: User = {
  email: ''
};

export const userDataReducer = (state: User = initialState, action: ActionReducer<User>) => {
  const { SET_USER } = actions.userActionTypes;

  if (action.type === SET_USER ) {
    return { ...action.payload };
  } else return state;
};
