import AvatarImage from 'Components/AvatarImage';
import Label from 'Components/Label';
import CustomButton from 'Components/CustomButton';

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import Container from '../components/Container';
 
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: null,
      stack: null,
      error: null,
    };
  }

  static getDerivedStateFromError({message, stack}) {
    console.log({message, stack});
    return {hasError: true, message, stack};
  }
  componentDidCatch(error, errorInfo) {
    console.log({error, errorInfo});
  }

  onPressHome() {
    
  }
  render() {
    const {hasError, message} = this.state;
    if (hasError) {
      return (
        <Container>
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
       </Container>
      );
    }

    return this.props.children;
  }
}
