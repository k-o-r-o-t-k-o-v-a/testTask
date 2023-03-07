import { createStore, compose } from 'redux';
import reducer from './reducers';

/* eslint-disable no-underscore-dangle */
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
/* eslint-enable */

const configureStore = preloadedState => createStore(
  reducer,
  preloadedState,
  composeEnhancers()
);

const store = configureStore({});

export default store;
