import { Dispatch } from 'redux';
import { User } from '../../types/user/User';
import { setUserActionConverter } from './index';

export const setUserAction: (user: User) => (dispatch: Dispatch) => Promise<void> = (user) => async (dispatch) => {
  const userData: User = {
    email: user.email,
  };
  dispatch(setUserActionConverter(userData));
};
