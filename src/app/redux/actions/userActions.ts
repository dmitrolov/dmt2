import { Dispatch } from 'redux';
import { PlayerAccount } from '../../types/General';
import { setUserActionConverter } from './index';

export const setUserAction: (user: PlayerAccount) => (dispatch: Dispatch) => Promise<void> = (user) => async (dispatch) => {
  const userData: PlayerAccount = {
    displayName: user.displayName,
    email: user.email,
    emailVerified: user.emailVerified,
    photoURL: user.photoURL
  };
  dispatch(setUserActionConverter(userData));
};
