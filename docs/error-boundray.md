## Error bondray 
Yes, you heared it right, Ther is an error boundry which is protecting your application in production form unexpected crashes.
There is nothing for you to do with that.
But yes you can re-design the fallback screen. For that you should [go to](../app/ErrorBoundry/index.js) 
under the render function you can write your own code. Make sure you don`t mess with the conditional rendering.

*Warning* : Do Not remove the container, becuase its an essential part for the Dark mode. otherwise you will mess with the Dark mode

```
// Do not touch me
  <Container> 
<---Start here---->
        <View style={{justifyContent: 'center', alignItems: 'center', aliginContent:'center', flex:1 }}>
        <AvatarImage size={80} /> 
         <Label text={message ? message : 'Error occured'} />
         <Label text={'Try Restarting app, If not worked.'} />
         <CustomButton
           label={'Go to home'}
           onPress={this.onPressHome}
           style={{paddingHorizontal: scale(30)}}
         />
        </View>
<---Ends here---->
    </Container>

```