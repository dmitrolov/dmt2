import React, { useState, useEffect } from "react"
import { Route } from "react-router"
import Home from "./pages/home/Home"
import SignIn from "./pages/signIn/SignIn"
import SignUp from "./pages/signUp/SignUp"
import AdventureCreate from "./pages/adventureCreate/AdventureCreate"
import AdventureList from "./pages/adventureList/AdventureList"
import AdventureView from "./pages/adventureView/AdventureView"
import * as ROUTES from './../../routes';
import { ClientWindowResolution, getClientWindowResolution } from "../../helpers/clientWindowResolution"
import { SideMenu } from "../../components/SideMenu/SideMenu"
import { Header } from "../../components/Header/Header"

interface SiteState {
    menu: {
        isMenuCollapsed: boolean;
        isMenuOpened: boolean;
    },
    clientWindowResolution: ClientWindowResolution
}

export const Site: React.FC = (props) => {
    const [state, setState] = useState<SiteState>({
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
        <>
            <SideMenu
                isMobileMenuView={state.clientWindowResolution.isMobile}
                isMenuCollapsed={state.menu.isMenuCollapsed}
                isMenuOpened={state.menu.isMenuOpened}
                onClose={() => setState({ ...state, menu: { ...state.menu, isMenuOpened: false } })} />
            {state.clientWindowResolution.isMobile ? <Header onMenuButtonClick={onMobileMenuButtonClick} /> : null}

            <Route exact path={ROUTES.SITE} component={Home} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.ADVENTURE_CREATE} component={AdventureCreate} />
            <Route path={ROUTES.ADVENTURE_LIST} component={AdventureList} />
            <Route exact path={ROUTES.ADVENTURE_VIEW} component={AdventureView} />
        </>
    )
}