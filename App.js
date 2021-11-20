/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import MainStack from './app/routing/MainStack';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import storePre from './app/redux/store';
import DropdownAlert from 'react-native-dropdownalert';
import {AlertHelper} from './app/utils/AlertHelper';
import {PersistGate} from 'redux-persist/integration/react';
import TabNavigationStack from './app/routing/TabNavigationStack';
import {navigationTypeTabs} from './app.json';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; 
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; 
import AntDesign from 'react-native-vector-icons/dist/AntDesign'; 
FontAwesome.loadFont()
AntDesign.loadFont()
MaterialIcons.loadFont()

const App: () => React$Node = () => {
  const {persistor, store} = storePre;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {navigationTypeTabs ? <TabNavigationStack /> : <MainStack />} 
        <DropdownAlert
          defaultContainer={{
            padding: 8,
            paddingTop: StatusBar.currentHeight,
            flexDirection: 'row',
          }}
          ref={(ref) => AlertHelper.setDropDown(ref)}
          onClose={() => AlertHelper.invokeOnClose()}
        />
      </PersistGate>
    </Provider>
  );
};

export default App;
