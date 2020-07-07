import React from "react"
import GameMenu from "../../components/GameMenu/GameMenu"
import { ClientWindowResolution } from "../../App"

interface GameProps {
    onMenuButtonClick: () => {};
    clientWindowResolution: ClientWindowResolution;
    isMobileMenu: boolean;
}

export const Game: React.FC<GameProps> = (props) => {
    return (
        <>
            <div>hello</div>
            {props.isMobileMenu ? <GameMenu onMenuButtonClick={props.onMenuButtonClick} clientWindowResolution={props.clientWindowResolution} /> : null}
        </>
    )
}