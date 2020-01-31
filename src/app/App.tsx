import 'antd/dist/antd.css';
import Hammer from 'hammerjs';
import React, { CSSProperties, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.sass';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';
import AdventureCreate from './pages/adventureCreate/AdventureCreate';
import AdventureList  from './pages/adventureList/AdventureList';
import AdventureView from './pages/adventureView/AdventureView';
import CharacterView from './pages/characterView/CharacterView';
import Home from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

export const App: React.FC = (props: any) => {
  const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
  const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  const isMobileMenuView = bodyWidth <= 425;

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);
  const [isMenu2Open, setMenu2] = useState(false);

  const onMenuClick = () => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  useEffect(() => {
    if (isMobileMenuView) {
      const stage = document.getElementById('root') as HTMLElement;
      const mc = new Hammer(stage);
      mc.on('swipeleft', () => {
        console.log('[swipe left]');
        setIsMenuCollapsed(true);
      });
      mc.on('swiperight', () => {
        console.log('[swipe right]');
        setIsMenuCollapsed(false);
      });
    }
  }, []);

  const appContainerStyles: CSSProperties = {
    width: bodyWidth,
    minWidth: bodyWidth,
    maxWidth: bodyWidth,
    height: bodyHeight,
    minHeight:bodyHeight,
    maxHeight: bodyHeight,
    border: '1px solid red'
  }

  return (
    <Router basename='/dmt2'>
      <div className='app' style={appContainerStyles}>
        {/*<div className='app__header'>*/}
        {/*  <Header onMenuClick={ onMenuClick } />*/}
        {/*</div>*/}
        <div className='app__content'>
          <Route exact path={ ROUTES.HOME } component={ Home } />
          <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
          <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
          <Route path={ ROUTES.ADVENTURE_CREATE } component={ AdventureCreate } />
          <Route path={ ROUTES.ADVENTURE_LIST } component={ AdventureList } />
          <Route exact path={ ROUTES.ADVENTURE_VIEW } component={ AdventureView } />
          <Route path={ ROUTES.CHARACTER_VIEW } component={ CharacterView } />
        </div>
        <button className='main-menu-button' onClick={() => setMenu2(!isMenu2Open)}>M</button>
        {isMenu2Open && <div className='main-menu2'>
          <SideMenu isMobileMenuView={isMobileMenuView} isMenuCollapsed={!isMenu2Open}/>
        </div>}
      </div>
    </Router>
  );
};
