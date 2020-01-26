import { Dispatch } from 'redux';
import { User } from '../../types/user/User';
import { setUserActionConverter } from './index';

export const setUserAction = (user: User) => async (dispatch: Dispatch) => {
  const userData: User = {
    email: user.email,
  };
  dispatch(setUserActionConverter(userData));
};
