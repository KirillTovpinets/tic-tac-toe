import React from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import './index.css';
import store from './store';

const TicTacToe = () => (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

export default TicTacToe;
