import * as React from 'react';
import {createStackNavigator,CardStyleInterpolators, HeaderStyleInterpolators, TransitionSpecs} from '@react-navigation/stack';
 

const Stack = createStackNavigator();

/**
 * 
 * @param {routs,screenOptions} routesArray,screenOptions
 * @returns {Stack.Navigator}
 * @description Stack Route Creator, it takes an array of routes and generate the routes for given array
 * @author <Er.amudeep@gmail.com>
 */
export default function StackCreater(props) {
    const{routs, screenOptions } =props 
  return (
    <Stack.Navigator 
    screenOptions={{headerShown: false,
     cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,  
     ...screenOptions
     }}
  
     >
      {routs?.map((item, key) => {
        const {name, component,options:{title}} = item;
        return <Stack.Screen  
        // options={{ headerTintColor:appColors.primaryFont, title,headerTitleStyle:{  fontFamily:'Metropolis-Bold', fontSize:scale(22) }  }}
         key={key}  name={name} component={component} />;
      })}
    </Stack.Navigator>
  );
}
