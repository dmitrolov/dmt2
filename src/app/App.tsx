import { Layout } from 'antd';
import 'antd/dist/antd.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import firebase, { getAllChars } from './api/firebase/firebase';
import './App.scss';
import { SideMenu } from './components/SideMenu/SideMenu';
import * as ROUTES from './constants/routes';



const App: React.FC = () => {
  getAllChars().then(value => console.log('[value]:', value))
  // doCreateUserWithEmailAndPassword('asfdgvscd@gmail.com', 'qwerty123456')
  // .then((value: any) => console.log('[value]:', value));
  return (
    <Router>
      <Layout style={ { minHeight: '100vh' } }>
        <SideMenu />
      </Layout>

      <Route exact path={ ROUTES.LANDING } component={ SideMenu } />
    </Router>
  );
};

export default App;
