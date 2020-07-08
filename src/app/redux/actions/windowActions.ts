import { Dispatch } from "redux";
import { setWindowActionConverter } from ".";
import { ClientWindowResolution } from "../../types/window/window";

export const setWindowAction: () => (dispatch: Dispatch) => (Promise<void>) = () => async (dispatch) => {
    document.documentElement.style.setProperty('--vh', `${document.documentElement.clientHeight * 0.01}px`);
    const body = document.getElementsByTagName('body')[0];
    
    const windowData: ClientWindowResolution = {
        width: body.clientWidth,
        height: body.clientHeight,
        isMobile: body.clientWidth < 1024,
        isLandscape: body.clientWidth > body.clientHeight
    }

    dispatch(setWindowActionConverter(windowData));
}