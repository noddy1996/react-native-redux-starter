/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RoutesList} from './routes'; 
import TabCerator from './TabCreator';  
import ErrorBoundry from "../ErrorBoundry";
export default function TabNavigationStack() {
  return (
    <NavigationContainer>
          <ErrorBoundry>
              <TabCerator routes={RoutesList} />  
            </ErrorBoundry>
    </NavigationContainer>
  );
}
