import { ActionReducer } from '../../types/General';
import { actions } from '../constants';

const initialState: any = {};

export const userDataReducer = (state = initialState, action: ActionReducer<{name: string}>) => {
  console.log('[ReducerAction]:', action);
  const { GET_USER } = actions.user;
  if (action.type === GET_USER) {
    console.log('[ReducerActionPeyload]:', { ...action.payload });
    return { ...action.payload };
  } else return state;
};
