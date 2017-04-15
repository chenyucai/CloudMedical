import React from 'react';
import {
  Dimensions,
  Image,
  InteractionManager,
  View,
  Text,
} from 'react-native';

import SignIn from './SignIn';

const {height, width} = Dimensions.get('window');

class SignInWelcome extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const {navigator} = this.props;
    this.timer=setTimeout(() => {
      InteractionManager.runAfterInteractions(() => {
        navigator.replace({
          component: SignIn,
          name: 'SignIn'
        });
      });
    }, 1000);
  }
  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }
  render() {
    return (
      <View style={{flex:1}}>
        <Image
          style={{flex:1,width:width,height:height}}
          source={{uri:'timg'}}
        />
      </View>
    );
  }
}
export default SignInWelcome;