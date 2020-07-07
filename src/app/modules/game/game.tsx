import React, { useState } from "react"
import GameMenu from "../../components/GameMenu/GameMenu"
import { ClientWindowResolution, getClientWindowResolution } from "../../helpers/clientWindowResolution"
import CharacterCreate from "./pages/characterCreate/CharacterCreate"
import { Route } from "react-router"
import CharacterView from "./pages/characterView/CharacterView"
import * as ROUTES from './../../routes';
import './game.sass';
import { Header } from "../../components/Header/Header"

interface GameState {
    clientWindowResolution: ClientWindowResolution;
}

export const Game: React.FC = (props) => {
    const [state, setState] = useState({
        clientWindowResolution: getClientWindowResolution()
    })

    return (
        <div
            className={'game-container-wrap'}
            style={{
                width: state.clientWindowResolution.width,
                height: state.clientWindowResolution.height
            }}>
            <Header onMenuButtonClick={() => { }}></Header>
            <div className={'game-container'} style={{
                width: state.clientWindowResolution.width,
                height: state.clientWindowResolution.height - 60
            }}>
                <Route path={ROUTES.CHARACTER_CREATE} component={CharacterCreate} />
                <Route path={ROUTES.CHARACTER_VIEW} component={CharacterView} />
            </div>
            {state.clientWindowResolution.isMobile && <GameMenu onMenuButtonClick={() => { }} clientWindowResolution={state.clientWindowResolution} />}
        </div>
    )
}