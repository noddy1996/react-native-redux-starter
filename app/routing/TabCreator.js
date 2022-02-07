/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {appColors, shadow} from '../utils/appColors';

const Tab = createBottomTabNavigator();
/**
 * 
 * @param {*} routesArray 
 * @returns {Tab.Navigator}
 * @description Tab Route Creator, it takes an array of routes and generate the routes for given array
 * @author <Er.amudeep@gmail.com>
 */
export default function TabCerator({routes}) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: appColors.primary,
        inactiveTintColor: appColors.secondaryFont,
        style: {
          ...shadow,
          borderWidth: 0,
        },
      }}>
      {routes?.map((route, key) => {
        const {name, component, options} = route;
        return (
          <Tab.Screen
            key={key}
            name={name}
            component={component}
            options={options}
          />
        );
      })}
    </Tab.Navigator>
  );
}
