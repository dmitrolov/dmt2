import { ActionReducer } from '../../types/General';
import { actions } from '../constants';
import { User } from '../../types/user/User';

const initialState: User = {
  email: ''
};

export const userDataReducer: (state: User, action: ActionReducer<User>) => User = (state = initialState, action) => {
  const { SET_USER } = actions.userActionTypes;

  if (action.type === SET_USER) {
    return { ...action.payload };
  } else return state;
};
