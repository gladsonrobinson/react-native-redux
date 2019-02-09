/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {store, persistor} from './src/redux/store';
import Navigator from './src/navigator';
import { PersistGate } from 'redux-persist/integration/react';
export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Navigator />
        </PersistGate>
      </Provider>
    );
  }
}
