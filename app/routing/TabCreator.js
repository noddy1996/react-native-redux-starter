/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description Minimal example of Tab Navigations
 */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {appColors, shadow} from '../utils/appColors';

const Tab = createBottomTabNavigator();

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
