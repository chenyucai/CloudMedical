import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import One from '../Basic/One';

let GOBAL_WIDTH=Dimensions.get('window').width;
export default class Overview extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                width: GOBAL_WIDTH / 4,
                height: GOBAL_WIDTH / 4+20,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
            }} onPress={()=> {
                this.props.onPress && this.props.onPress()

            }}>
                <Image style={{width: GOBAL_WIDTH/10, height: GOBAL_WIDTH/10,resizeMode:'stretch'}}
                       source={{uri: this.props.source}}/>
                <Text style={{fontSize: 14, color: '#333333', marginTop: 5,width:GOBAL_WIDTH / 4-10,textAlign:'center',height:60}}>{this.props.Txt}</Text>
            </TouchableOpacity>
        )
    }
}
