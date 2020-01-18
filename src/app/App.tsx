import 'antd/dist/antd.css';
import { Breadcrumb, Icon } from 'antd';
import Hammer from 'hammerjs';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { Header } from './components/Header/Header';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';
import { HomePage } from './pages/homePage/HomePage';

const App: React.FC = () => {
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
    <Router>
      <div className='app'>
        <div className='app__header'>
          <Header onMenuClick={ onMenuClick } />
        </div>
        <div className='app__content'>
          <SideMenu isMobileMenuView={ isMobileMenuView } isMenuCollapsed={ isMenuCollapsed } />
          <Route exact path={ ROUTES.LANDING } component={ HomePage } />
        </div>
      </div>
    </Router>
  );
};

export default App;
