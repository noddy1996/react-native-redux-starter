/**
 * @author Amusoftech <er.amudeep@gmail.com>
 * @description List of routes for Tabs Navigator and Stack navigator, Along addational  Option for Tabs
 */
import Home from '../screens/Home';
import OnBoarding from '../screens/OnBoarding';
import {appColors} from '../utils/appColors';

export const RoutesList = [
  {
    name: 'OnBoarding',
    component: OnBoarding,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'OnBoarding',
      tabBarButton:()=>null
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },


  {
    name: 'Home',
    component: Home,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'Home',
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },
];
