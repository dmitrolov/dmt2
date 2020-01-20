import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from './app/redux/reducers';

const initialState = {};

const middleware = [thunk];
const env = process.env.REACT_APP_NODE_ENV;

if (env && env === 'development') {
  // @ts-ignore
  middleware.push(logger);
}

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
);
