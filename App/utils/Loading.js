import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    ActivityIndicatorIOS,
    Platform,
    Image,
    ProgressBarAndroid,
    ActivityIndicator
    } from 'react-native';

var Dimensions = require('Dimensions');

var styles = StyleSheet.create({
    container:{
        // marginTop:65,
        marginBottom: 0,
        flex:1
    },
    loading:{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
        // backgroundColor: '#F5FCFF',
    },
    activityIndicatorAndroid:{
        width : Dimensions.get('window').width,
        height: 200,
        justifyContent:'center',alignItems:'center'
    }
});


class Loading extends  Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }
    render() {
        if (Platform.OS === 'android') {
            return (
                <View style={styles.loading}>
                    <ActivityIndicator color="red" size='large' style={{marginVertical: 30,marginBottom: 30,marginRight:30}} />
                    <Text>
                        正在加载数据...
                    </Text>
                </View>
            );
        }
        return (
            <View style={styles.loading}>
                <ActivityIndicatorIOS color="red" style={{marginVertical: 30,marginBottom: 30,marginRight:30}} />
                <Text>
                    正在加载数据...
                </Text>
            </View>
        );
    }
}

module.exports = Loading;