import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native'; 
import {RoutesList} from './routes';
import StackCreater from './StackCreator';
import ErrorBoundry from "../ErrorBoundry";
 

export default function MainStack() {
  return (
    <NavigationContainer>
      <ErrorBoundry>
        <StackCreater routs={ RoutesList} />
      </ErrorBoundry>
    </NavigationContainer>
  );
}
