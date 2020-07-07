export interface ClientWindowResolution {
    width: number;
    height: number;
    isMobile: boolean;
    isLandscape: boolean;
}

export const getClientWindowResolution: () => ClientWindowResolution = () => {
    const body = document.getElementsByTagName('body')[0];

    return {
        width: body.clientWidth,
        height: body.clientHeight,
        isMobile: body.clientWidth < 1024,
        isLandscape: body.clientWidth > body.clientHeight
    }
}