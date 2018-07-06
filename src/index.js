import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap';
import { createStore, combineReducers } from 'redux';
import playerReducer from './store/reducers/players';
import gameDependentComponentReducer from './store/reducers/gameDependentComponent';
import { Provider } from 'react-redux';

const rootReducer = combineReducers({
  players: playerReducer,
  gameDependentComponentValue: gameDependentComponentReducer
});

const store = createStore(rootReducer);

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
