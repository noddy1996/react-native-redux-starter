import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'; 
import {RoutesList} from './routes';
import StackCreater from './StackCreator';

 

export default function MainStack() {
  return (
    <NavigationContainer>
      <StackCreater routs={ RoutesList} />
      
    </NavigationContainer>
  );
}
