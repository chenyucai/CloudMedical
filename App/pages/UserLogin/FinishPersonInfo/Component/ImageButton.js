import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions
} from 'react-native';
let GOBAL_WIDTH =Dimensions.get('window').width;
export default class Overview extends Component {
    render() {
        return (
            <TouchableOpacity style={{
                width: (GOBAL_WIDTH - 4) / 4,
                height: (GOBAL_WIDTH - 4) / 4,
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#fff',
                marginLeft: this.props.marginLeft,
                marginTop: this.props.marginTop
            }} onPress={()=> {
                this.props.onPress && this.props.onPress()
            }}>
                <Image style={{width: 30, height: 30,borderRadius:15}}
                       source={{uri: this.props.source}}/>
                <Text style={{fontSize: 12, color: '#333333', marginTop: 12}}>{this.props.Txt}</Text>
            </TouchableOpacity>
        )
    }
}