## How to connect Redux
We made connecting redux easy for you, there are very simple steps to connect your component to redux store, You dont have to import connect to every Component and no need to mannully maange the `mapToState` and `mapToDispatch`

## Steps
1. Import `ReduxWrapper` From `app/redux`
2. Wrap your Component with `ReduxWrapper`
2. Your redux store is injected to your component

*Example*

```
import ReduxWrapper from 'Redux/ReduxWrapper'

function MyComponent(props) {
    const {appState} =props 
    // props variable containes the redux store info along your other props
 
    return(
        <>
        My JSX......
        </>
    )
    
}
export default ReduxWrapper(MyComponent) 
```