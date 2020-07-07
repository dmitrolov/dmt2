import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
// import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './routes';
import AdventureCreate from './modules/site/pages/adventureCreate/AdventureCreate';
import AdventureList from './modules/site/pages/adventureList/AdventureList';
import AdventureView from './modules/site/pages/adventureView/AdventureView';
import CharacterCreate from './modules/game/pages/characterCreate/CharacterCreate';
import CharacterView from './modules/game/pages/characterView/CharacterView';
import Home from './modules/site/pages/home/Home';
import SignIn from './modules/site/pages/signIn/SignIn';
import SignUp from './modules/site/pages/signUp/SignUp';
import GameMenu from './components/GameMenu/GameMenu';
import { Game } from './modules/game/game';

export interface ClientWindowResolution {
    width: number
    height: number
}

interface AppState {
    menu: {
        isMobileMenu: boolean;
        isMenuCollapsed: boolean;
        isMenuOpened: boolean;
    },
    clientWindowResolution: ClientWindowResolution
}

export const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        menu: {
            isMobileMenu: true,
            isMenuCollapsed: false,
            isMenuOpened: false
        },
        clientWindowResolution: {
            width: 0,
            height: 0
        }
    });

    const onWindowResize = () => {
        const body = document.getElementsByTagName('body')[0];
        setState({
            clientWindowResolution: {
                width: body.clientWidth,
                height: body.clientHeight
            },
            menu: {
                isMenuOpened: !(body.clientWidth < 1024),
                isMenuCollapsed: false,
                isMobileMenu: body.clientWidth < 1024
            }
        });
    };

    const onMobileMenuButtonClick = () => {
        setState({ ...state, menu: { ...state.menu, isMenuOpened: !state.menu.isMenuOpened } });
    };

    useEffect(() => {
        window.onresize = onWindowResize;
        onWindowResize();

        return () => {
            window.onresize = null;
        };
    }, []);

    return (
        <div
            className='app'
            style={
                state.clientWindowResolution.height < state.clientWindowResolution.width
                    ? {
                        width: state.clientWindowResolution.width,
                        height: state.clientWindowResolution.height,
                        flexDirection: 'row'
                    }
                    : {
                        width: state.clientWindowResolution.width,
                        height: state.clientWindowResolution.height,
                        flexDirection: 'column'
                    }}>
            {/* {state.menu.isMobileMenu ? <Header onMenuButtonClick={onMobileMenuButtonClick} /> : null} */}
            <SideMenu
                isMobileMenuView={state.menu.isMobileMenu}
                isMenuCollapsed={state.menu.isMenuCollapsed}
                isMenuOpened={state.menu.isMenuOpened}
                onClose={() => setState({ ...state, menu: { ...state.menu, isMenuOpened: false } })} />
            <div
                style={state.clientWindowResolution.height > state.clientWindowResolution.width
                    ? {
                        width: state.clientWindowResolution.width,
                        height: state.clientWindowResolution.height - 60
                    } : {
                        width: state.clientWindowResolution.width - 60,
                        height: state.clientWindowResolution.height
                    }}
                className='app__content'>
                <Route exact path={ROUTES.HOME} component={Home} />
                <Route path={ROUTES.SIGN_IN} component={SignIn} />
                <Route path={ROUTES.SIGN_UP} component={SignUp} />
                <Route path={ROUTES.ADVENTURE_CREATE} component={AdventureCreate} />
                <Route path={ROUTES.ADVENTURE_LIST} component={AdventureList} />
                <Route exact path={ROUTES.ADVENTURE_VIEW} component={AdventureView} />
                <Route path={ROUTES.CHARACTER_CREATE} component={CharacterCreate} />
                <Route path={ROUTES.CHARACTER_VIEW} component={CharacterView} />
                <Route path={ROUTES.GAME} component={Game} />
            </div>
            {state.menu.isMobileMenu ? <GameMenu onMenuButtonClick={onMobileMenuButtonClick} clientWindowResolution={state.clientWindowResolution} /> : null}
        </div>
    );
};
