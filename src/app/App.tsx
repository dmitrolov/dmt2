import 'antd/dist/antd.css';
import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import './App.sass';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterCreate from './pages/characterCreate/CharacterCreate';
import CharacterView from './pages/characterView/CharacterView';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

interface AppState {
  menu: {
    isMobileMenu: boolean;
    isMenuCollapsed: boolean;
    isMenuOpened: boolean;
  },
  clientWindowResolution: {
    width: number
    height: number
  }
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
    <div className='app'>
      { state.menu.isMobileMenu ? <Header onMenuButtonClick={ onMobileMenuButtonClick } /> : null }
      <SideMenu isMobileMenuView={ state.menu.isMobileMenu }
                isMenuCollapsed={ state.menu.isMenuCollapsed }
                isMenuOpened={ state.menu.isMenuOpened }
                onClose={ () => setState({ ...state, menu: { ...state.menu, isMenuOpened: false } }) } />
      <div className='app__content'>
        <Route exact path={ ROUTES.HOME } component={ Home } />
        <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
        <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
        <Route path={ ROUTES.ADVENTURE_CREATE } component={ AdventureCreate } />
        <Route path={ ROUTES.ADVENTURE_LIST } component={ AdventureList } />
        <Route exact path={ ROUTES.ADVENTURE_VIEW } component={ AdventureView } />
        <Route path={ ROUTES.CHARACTER_CREATE } component={ CharacterCreate } />
        <Route path={ ROUTES.CHARACTER_VIEW } component={ CharacterView } />
      </div>
    </div>
  );
};
