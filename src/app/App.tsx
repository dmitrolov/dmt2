import { Button, Layout } from 'antd';
import 'antd/dist/antd.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './../img/dndLogo.png';
import avatar from './../img/default-user-icon-4.jpg';
import { getAllChars } from './api/firebase/firebase';
import './App.scss';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';
import { HomePage } from './pages/homePage/HomePage';

const App: React.FC = () => {
  const [isMenuCollapsed, setIsMenuCollapsed] = useState(true);

  const onMenuClick = () => {
    console.log(isMenuCollapsed);
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  getAllChars().then(value => console.log('[value]:', value));
  return (
    <Router>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <Button style={{margin: 5}} type="primary" shape="round" icon="menu-fold" size={'default'} onClick={onMenuClick}/>
        <Link to={'/'}><img style={{height: 50, margin: 5}} src={ logo } alt="" /></Link>
        <img style={{height: 50, margin: 5}} src={ avatar } alt="" />
      </div>
      <Layout style={ { minHeight: '100vh' } }>

        { SideMenu(isMenuCollapsed) }
        <Layout>

          <Route exact path={ ROUTES.LANDING } component={ HomePage } />
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
