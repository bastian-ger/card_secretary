import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import playerReducer from './store/reducers/players';
import gameDependentComponentReducer from './store/reducers/gameDependentComponent';
import statsReducer from './store/reducers/stats';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { library } from '@fortawesome/fontawesome-svg-core';
// only the following icons are loaded from fontawesome
import { faFrown, faSmile, faStar } from '@fortawesome/free-regular-svg-icons';
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
// setting up library for fontawesome
library.add(faFrown, faSmile, faStar, faTwitter, faGithub);

// composeEnhancers enables the Redux DevTools
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;

const rootReducer = combineReducers({
  players: playerReducer,
  gameDependentComponentValue: gameDependentComponentReducer,
  stats: statsReducer
});

const store = createStore(rootReducer, composeEnhancers(
  applyMiddleware(thunk)
));

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
