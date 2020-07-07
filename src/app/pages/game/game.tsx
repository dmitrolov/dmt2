import React, { useState } from "react"
import GameMenu from "../../components/GameMenu/GameMenu"
import { ClientWindowResolution, clientWindowResolution } from "../../helpers/clientWindowResolution"
import './game.sass';
import { Header } from "../../components/Header/Header"

interface GameState {
    clientWindowResolution: ClientWindowResolution;
}

export const Game: React.FC = (props) => {
    const [state, setState] = useState({
        clientWindowResolution: clientWindowResolution()
    })

    return (
        <div
            className={'game-container-wrap'}>
            
            <div className={'game-container'} style={{
                width: state.clientWindowResolution.width,
                height: state.clientWindowResolution.height - 60
            }}>

            </div>
            {state.clientWindowResolution.isMobile && <GameMenu onMenuButtonClick={() => { }} clientWindowResolution={state.clientWindowResolution} />}
        </div>
    )
}