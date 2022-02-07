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
export default function TabNavigationStack() {
  return (
    <NavigationContainer>
            <TabCerator routes={RoutesList} />  
     
    </NavigationContainer>
  );
}
