import React from "react"
import GameMenu from "../../components/GameMenu/GameMenu"
import { ClientWindowResolution } from "../../helpers/clientWindowResolution"
import CharacterCreate from "./pages/characterCreate/CharacterCreate"
import { Route } from "react-router"
import CharacterView from "./pages/characterView/CharacterView"
import * as ROUTES from './../../routes';

interface GameProps {
    onMenuButtonClick: () => {};
    clientWindowResolution: ClientWindowResolution;
    isMobileMenu: boolean;
}

export const Game: React.FC<GameProps> = (props) => {
    return (
        <>
            <Route path={ROUTES.CHARACTER_CREATE} component={CharacterCreate} />
            <Route path={ROUTES.CHARACTER_VIEW} component={CharacterView} />
            {props.isMobileMenu ? <GameMenu onMenuButtonClick={props.onMenuButtonClick} clientWindowResolution={props.clientWindowResolution} /> : null}
        </>
    )
}