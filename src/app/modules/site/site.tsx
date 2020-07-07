import React from "react"
import { Route, Redirect } from "react-router"
import Home from "./pages/home/Home"
import SignIn from "./pages/signIn/SignIn"
import SignUp from "./pages/signUp/SignUp"
import AdventureCreate from "./pages/adventureCreate/AdventureCreate"
import AdventureList from "./pages/adventureList/AdventureList"
import AdventureView from "./pages/adventureView/AdventureView"
import * as ROUTES from './../../routes';

export const Site: React.FC = (props) => {
    return (
        <>
            <Redirect from={ROUTES.SITE} to={ROUTES.DASHBOARD} />
            <Route exact path={ROUTES.DASHBOARD} component={Home} />
            <Route path={ROUTES.SIGN_IN} component={SignIn} />
            <Route path={ROUTES.SIGN_UP} component={SignUp} />
            <Route path={ROUTES.ADVENTURE_CREATE} component={AdventureCreate} />
            <Route path={ROUTES.ADVENTURE_LIST} component={AdventureList} />
            <Route exact path={ROUTES.ADVENTURE_VIEW} component={AdventureView} />
        </>
    )
}