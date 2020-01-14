import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import { config } from './Components/Firebase/firebase';
import { SideMenu } from './Components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';

const App: React.FC = () => {
  console.log('[FBConfig]:', config);
  return (
    <Router>
      <Layout style={ { minHeight: '100vh' } }>
        <SideMenu />
      </Layout>

      <Route exact path={ ROUTES.LANDING } component={ SideMenu }/>
    </Router>
  );
};

export default App;
