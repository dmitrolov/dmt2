import 'antd/dist/antd.css';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import * as ROUTES from './routes';
import { Game } from './modules/game/game';
import { Site } from './modules/site/site';

export const App: React.FC = () => {
    return (
        <>
            <Redirect from={ROUTES.ROOT} to={ROUTES.SITE} />
            <Route path={ROUTES.SITE} component={Site} />
            <Route path={ROUTES.GAME} component={Game} />
        </>
    );
};
