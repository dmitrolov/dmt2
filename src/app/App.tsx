import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './routes';
import { Header } from './common/navigation/Header/Header';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterCreate from './pages/characterCreate/CharacterCreate';
import CharacterView from './pages/characterView/CharacterView';
import './App.sass'
import GameMenu from './common/navigation/GameMenu/GameMenu';
import { connect } from 'react-redux';
import { setWindowAction } from './redux/actions/windowActions';
import { ClientWindowResolution } from './types/window/window';
import SideMenu from './common/navigation/SideMenu/SideMenu';

interface AppProps {
    windowData: ClientWindowResolution;
    userData: string;
    setWindow: () => void;
}

interface AppState {
    isMenuOpened: boolean;
}

const App: React.FC<AppProps> = (props) => {
    const [state, setState] = useState<AppState>({
        isMenuOpened: false
    });

    useEffect(() => {
        window.onresize = props.setWindow;
        props.setWindow();

        return () => {
            window.onresize = null;
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={'app'}>
                <SideMenu
                    isMenuOpened={state.isMenuOpened}
                    onClose={() => setState({ isMenuOpened: false })} />

                <div className={'app-header'}>
                    {props.windowData?.isMobile
                        ? <Header onMenuButtonClick={() => setState({ isMenuOpened: true })} />
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

const mapStateToProps = (state: AppProps) => {
    return ({
        windowData: state.windowData,
        userData: state.userData
    })
}

export default connect(mapStateToProps, {
    setWindow: setWindowAction
})(App);