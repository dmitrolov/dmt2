import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import './index.scss';
import * as serviceWorker from './serviceWorker';

const RoutedApp = () => (
  <App/>
);

ReactDOM.render(<RoutedApp />, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
