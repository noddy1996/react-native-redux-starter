## Navigation
As we know Navigation is assential part of the project, also the trickiest thing to set up, because sometime we need a Bottom tab sometime the Stack only.
**Good news is We made it easy for you**

## How to create a route
As i said we made it easy, So you just has go to a [routes.js](../app/routing/routes.js) and write as following
```
{
    name: 'AnyName', // bascially a route Name
    component: MyComponent,
    options: {
      tabBarBadge: 3,
      tabBarLabel: 'AnyLabel', //this will show as a Tab Bar label if you are using a bottom tab Bar 
      //.... rest are the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
    },
  },

```
Once you added the above to `routes` it will automatically create a route for you, whatever you are using a Tab bar navigation or Stack navigation



## Complex navigation
Sometimes sitation arrived that we have to use the Navigation and Stack both in the same app.
Don`t worry !! We also made it easy for you.

**How to?**
Consider using a Stack Navigation, But after the login we want to use the Bottom tab. 
1. For that Set [navigationTypeTabs](../app.json) to `false`
2. it will make our application to use Stack
3. Go to [MainStack.js](../app/routing/MainStack.js) and do following
  ```
   <NavigationContainer>
      <ErrorBoundry>
        <StackCreater routs={ [
            ...RoutesForStack,
            {
            name: 'AnyName',
            component: ()=><TabCerator routes={[...RoutesForTab,]} />  , //import the Tab Creator
            options: { 
            tabBarLabel: 'AnyName',
            tabBarButton:()=>null 
            //... the params for Tab.Screen See : https://reactnavigation.org/docs/bottom-tab-navigator/#options
            },
        },
            ]} />
      </ErrorBoundry>
    </NavigationContainer>
  ```
4. Done




