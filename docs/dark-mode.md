## Dark Mode 🔆
Finally Dark mode is arrived for some of the components,
Following are the comonents.
1. Contaianer
2. Label
3. CustomButton
4. Divider
5. CustomInput

## How it works .?
Dark mode is tottal powered by Redux. `its under appState Reducer`
Each and every components implments the Redux, with the help of `ReduxWrapper` Component, and extract the `darkMode` from `appSate` 
Reducer. 


## How to toggle `Dark` mode .?
You have to implment the Redux with `ReduxWrapper` Component, and destruct the method `toggleDarkMode$` and call the function
it will toggle your `darkMode` State.
*Example*
``` function MyComponent({toggleDarkMode$}) {

const someFunction = ()=>{
    toggleDarkMode$()
}
    return(
        <>
        My JSX......
        </>
    )
    
}
export default ReduxWrapper(MyComponent) ```




