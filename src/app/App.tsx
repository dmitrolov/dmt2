import 'antd/dist/antd.css';
import React, { CSSProperties, useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import MainMenu from './components/mainMenu/MainMenu';
import * as ROUTES from './constants/routes';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterCreate from './pages/characterCreate/CharacterCreate';
import CharacterView from './pages/characterView/CharacterView';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

export interface ClientWindowResolution {
  width: number
  height: number
}

export const App: React.FC = () => {
  const [clientWindowResolution, setClientWindowResolution] = useState<ClientWindowResolution>({ width: 0, height: 0 });

  const onWindowResize = () => {
    const body = document.getElementsByTagName('body')[0];
    setClientWindowResolution({
      width: body.clientWidth,
      height: body.clientHeight
    });
  };

  useEffect(() => {
    window.onresize = onWindowResize;
    onWindowResize();

    return () => {
      window.onresize = null;
    };
  }, []);

  const appContainerStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    width: clientWindowResolution.width,
    minWidth: clientWindowResolution.width,
    maxWidth: clientWindowResolution.width,
    height: clientWindowResolution.height,
    minHeight: clientWindowResolution.height,
    maxHeight: clientWindowResolution.height,
    border: '1px solid blue',
    overflow: 'auto'
  };

  const appContentStyles: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    padding: 6,
    border: '1px solid green',
    width: clientWindowResolution.width - 2, // cause of border
    minWidth: clientWindowResolution.width - 2, // cause of border
    maxWidth: clientWindowResolution.width - 2, // cause of border
    height: clientWindowResolution.height - 42,
    minHeight: clientWindowResolution.height - 42,
    maxHeight: clientWindowResolution.height - 42,
    overflow: 'auto'
  };

  return (
    <div style={ appContainerStyles }>
      <div style={ appContentStyles }>
        <Route exact path={ ROUTES.HOME } component={ Home } />
        <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
        <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
        <Route path={ ROUTES.ADVENTURE_CREATE } component={ AdventureCreate } />
        <Route path={ ROUTES.ADVENTURE_LIST } component={ AdventureList } />
        <Route exact path={ ROUTES.ADVENTURE_VIEW } component={ AdventureView } />
        <Route path={ ROUTES.CHARACTER_CREATE } component={ CharacterCreate } />
        <Route path={ ROUTES.CHARACTER_VIEW } component={ CharacterView } />
      </div>
      <MainMenu clientWindowResolution={ clientWindowResolution } />
    </div>
  );
};
