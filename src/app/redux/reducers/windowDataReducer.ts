import { ActionReducer } from "../../types/General";
import { actions } from "../constants";

interface ClientWindowResolution {
    width: number;
    height: number;
    isMobile: boolean;
    isLandscape: boolean;
}

const initialState: ClientWindowResolution = {
    width: 0,
    height: 0,
    isMobile: false,
    isLandscape: false
}

export const windowDataReducer: (state: ClientWindowResolution, action: ActionReducer<ClientWindowResolution>) => ClientWindowResolution = (state = initialState, action) => {
    const { GET_RESOLUTION } = actions.windowActionTypes

    if (action.type === GET_RESOLUTION) {
        return { ...action.payload }
    } else return state
}