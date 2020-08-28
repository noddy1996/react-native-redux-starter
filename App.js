/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainStack from './app/routing/MainStack';
import { Provider } from "react-redux"
import store from './app/redux/store';
const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <MainStack/>
    </Provider>
  )

};


export default App;
