import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './app/App';
import './index.sass';
import { store } from './store';

const RoutedApp = () => (
  <Provider store={ store }>
    <Router basename='/dmt2'>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<RoutedApp />, document.getElementById('root'));
