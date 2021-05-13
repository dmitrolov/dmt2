import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import * as ROUTES from './routes';
import Home from './pages/home/Home';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterCreate from './pages/characterCreate/CharacterCreate';
import './App.sass'
import { connect } from 'react-redux';
import { setWindowAction } from './redux/actions/windowActions';
import { ClientWindowResolution, PlayerAccount } from './types/General';
import { SignInModal } from './common/signInModal';
import { SideMenu } from './common/sideMenu';
import { setUserAction } from './redux/actions/userActions';
import { Button } from 'antd';

interface AppProps {
    windowData: ClientWindowResolution;
    userData: PlayerAccount;
    setWindow: () => void;
    setUser: (player: PlayerAccount) => void;
}

const App: React.FC<AppProps> = (props) => {
    const headerHeight = 32;
    const vh = window.innerHeight * 0.01;
    const [isMenuOpened, setIsMenuOpened] = useState(false);
    const [isSignInModalOpened, setIsSignInModalOpened] = useState(false);

    const style = {
        header: props.windowData?.isMobile
            ? { height: headerHeight }
            : { display: 'none' },
        content: {
            height: props.windowData?.isMobile ? props.windowData.height - headerHeight : props.windowData.height,
            overflow: 'auto',
        }
    }

    const onResize = () => {
        props.setWindow();
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }

    useEffect(() => {
        window.onresize = onResize;
        onResize()
        return () => { window.onresize = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <div className={'app'}>
                <SideMenu
                    windowData={props.windowData}
                    userData={props.userData}
                    isMenuOpened={isMenuOpened}
                    onSignInButtonClick={() => setIsSignInModalOpened(true)}
                    onClose={() => setIsMenuOpened(false)} />

                <div className='header' style={style.header}>
                    <Button className={'menu-button'} onClick={() => setIsMenuOpened(true)}>menu</Button>
                </div>

                <div className={'content'} style={style.content}>
                    <Route exact path={ROUTES.ROOT} component={Home} />
                    <Route exact path={ROUTES.ADVENTURE} component={AdventureList} />

                    <Route exact path={ROUTES.ADVENTURE_CREATE} component={AdventureCreate} />
                    <Route exact path={ROUTES.ADVENTURE_VIEW} component={AdventureView} />
                    <Route path={ROUTES.CHARACTER_CREATE} component={CharacterCreate} />
                </div>
            </div>
            <SignInModal
                isOpened={isSignInModalOpened}
                onOk={() => {
                    setIsSignInModalOpened(false);
                }}
                onClose={() => setIsSignInModalOpened(false)} />
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
    setWindow: setWindowAction,
    setUser: setUserAction
})(App);