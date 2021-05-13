import { ActionReducer, PlayerAccount } from "../../types/General";
import { actions } from "../constants";

const initialState: PlayerAccount = {
    email: ''
  };
  
  export const userDataReducer: (state: PlayerAccount, action: ActionReducer<PlayerAccount>) => PlayerAccount = (state = initialState, action) => {
    const { SET_USER } = actions.userActionTypes;
  
    if (action.type === SET_USER) {
      return { ...action.payload };
    } else return state;
  };