import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import './App.sass';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './routes';
import { Game } from './modules/game/game';
import { ClientWindowResolution, getClientWindowResolution } from './helpers/clientWindowResolution';
import { Header } from './components/Header/Header';
import { Site } from './modules/site/site';



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
            isMobile: true,
            isLandscape: true
        }
    });

    const onWindowResize = () => {
        const resolution = getClientWindowResolution()
        setState({
            clientWindowResolution: resolution,
            menu: {
                isMenuOpened: !(resolution.isMobile),
                isMenuCollapsed: false,
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
            <SideMenu
                isMobileMenuView={state.clientWindowResolution.isMobile}
                isMenuCollapsed={state.menu.isMenuCollapsed}
                isMenuOpened={state.menu.isMenuOpened}
                onClose={() => setState({ ...state, menu: { ...state.menu, isMenuOpened: false } })} />
            <div
                style={{
                    width: state.clientWindowResolution.width,
                    height: state.clientWindowResolution.height
                }}
                className='app__content'>
                {state.clientWindowResolution.isMobile ? <Header onMenuButtonClick={onMobileMenuButtonClick} /> : null}
            
                <Redirect from={ROUTES.ROOT} to={ROUTES.SITE} />
                <Route path={ROUTES.SITE} component={Site} />
                <Route path={ROUTES.GAME} component={Game} />
            </div>
        </div>
    );
};
