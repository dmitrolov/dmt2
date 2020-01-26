import 'antd/dist/antd.css';
import Hammer from 'hammerjs';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';
import Home  from './pages/home/Home';
import SignIn from './pages/signIn/SignIn';
import SignUp from './pages/signUp/SignUp';

export const App: React.FC = (props: any) => {
  const bodyWidth = document.getElementsByTagName('body')[0].clientWidth;
  // const bodyHeight = document.getElementsByTagName('body')[0].clientHeight;
  const isMobileMenuView = bodyWidth <= 425;

  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

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

  return (
    <Router basename='/dmt2'>
      <div className='app'>
        <div className='app__header'>
          <Header onMenuClick={ onMenuClick } />
        </div>
        <div className='app__content'>
          <SideMenu isMobileMenuView={ isMobileMenuView } isMenuCollapsed={ isMenuCollapsed } />
          <Route exact path={ ROUTES.HOME } component={ Home } />
          <Route path={ ROUTES.SIGN_IN } component={ SignIn } />
          <Route path={ ROUTES.SIGN_UP } component={ SignUp } />
        </div>
      </div>
    </Router>
  );
};
