import { Dispatch } from 'redux';
import { getUserData } from './index';

export const fetchUserData = (data: {name: string}) => async (dispatch: Dispatch) => {
  console.log('[ActionData]:', data);
  const userData: {name: string} = {
    name: data.name,
  };
  dispatch(getUserData(userData));
};
