import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import One from '../../Study/Basic/One';

let GOBAL_WIDTH=Dimensions.get('window').width;
export default class Overview extends Component {
  constructor(props) {
      super(props);
      this.state = {

      };
  }

  go(){
    console.log(this.props.navigator);
    
  }

    render() {
        return (
            <TouchableOpacity style={{
                width: GOBAL_WIDTH / 4,
                height: GOBAL_WIDTH / 4,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }} onPress={this.go.bind(this)}>
                <Image style={{width: GOBAL_WIDTH/10, height: GOBAL_WIDTH/10,resizeMode:'stretch'}}
                       source={{uri: this.props.source}}/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 12,width:GOBAL_WIDTH / 4-10,textAlign:'center',height:40}}>{this.props.Txt}</Text>
            </TouchableOpacity>
        )
    }
}
