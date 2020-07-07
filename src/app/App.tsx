import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './routes';
import { Header } from './components/Header/Header';
import { ClientWindowResolution, clientWindowResolution } from './helpers/clientWindowResolution';
import { SideMenu } from './components/SideMenu/SideMenu';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterCreate from './pages/characterCreate/CharacterCreate';
import CharacterView from './pages/characterView/CharacterView';
import './App.sass'
import GameMenu from './components/GameMenu/GameMenu';

interface AppState {
    menu: {
        isMenuCollapsed: boolean;
        isMenuOpened: boolean;
    },
    clientWindowResolution: ClientWindowResolution
}

export const App: React.FC = () => {
    const [state, setState] = useState<AppState>({
        menu: {
            isMenuCollapsed: false,
            isMenuOpened: false
        },
        clientWindowResolution: {
            width: 0,
            height: 0,
            isLandscape: false,
            isMobile: true
        }
    });

    const onWindowResize = () => {
        const resolution = clientWindowResolution()
        setState({
            clientWindowResolution: resolution,
            menu: {
                isMenuOpened: !(resolution.isMobile),
                isMenuCollapsed: false,
            }
        });
    };

    useEffect(() => {
        window.onresize = onWindowResize;
        onWindowResize();

        return () => {
            window.onresize = null;
        };
    }, []);

    return (
        <>
            <div className={'app'}>
                <SideMenu
                    isMobileMenuView={!!state.clientWindowResolution?.isMobile}
                    isMenuCollapsed={state.menu.isMenuCollapsed}
                    isMenuOpened={state.menu.isMenuOpened}
                    onClose={() => setState({ ...state, menu: { ...state.menu, isMenuOpened: false } })} />

                <div className={'app-header'}>
                    {state.clientWindowResolution?.isMobile
                        ? <Header onMenuButtonClick={() => setState({ ...state, menu: { ...state.menu, isMenuOpened: !state.menu.isMenuOpened } })} />
                        : null}
                </div>

                <div className={'app-site'}>
                    <Route exact path={ROUTES.DASHBOARD} component={Home} />
                    <Route path={ROUTES.SIGN_IN} component={SignIn} />
                    <Route path={ROUTES.SIGN_UP} component={SignUp} />
                    <Route path={ROUTES.ADVENTURE_CREATE} component={AdventureCreate} />
                    <Route path={ROUTES.ADVENTURE_LIST} component={AdventureList} />
                    <Route exact path={ROUTES.ADVENTURE_VIEW} component={AdventureView} />
                </div>

                <div className={'app-game'}>
                    <Route path={ROUTES.CHARACTER_CREATE} component={CharacterCreate} />
                    <Route path={ROUTES.CHARACTER_VIEW} component={CharacterView} />
                    <Route path={ROUTES.GAME} component={GameMenu} />
                </div>
            </div>
        </>
    );
};
