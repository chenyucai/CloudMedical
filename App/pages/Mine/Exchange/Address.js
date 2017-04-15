import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    ListView,
    InteractionManager,
    ScrollView,
    TextInput,
} from 'react-native'

const {width, height} = Dimensions.get('window');
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';

import Exchange from './Exchange';
import ExchangeSuccess from './ExchangeSuccess';


export default class Address extends Component {
    handlerLeft = () =>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if (navigator){
                navigator.push({
                    component:Exchange,
                })
            }
        })
    }

    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: '填写收货地址',
            tintColor: titleTintColor
        };
        const rightButton = (
            <TouchableOpacity onPress={() => {
                this.props.navigator.pop()
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
                    <Text style={{marginRight:10}}>{'放弃'}</Text>
                </View>
            </TouchableOpacity>);
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar
                    tintColor={navTintColor}
                    title={titleConfig}
                    rightButton={rightButton}
                />

                <ScrollView style={{flex:1}}>
                    <Text style={{marginTop:20,marginLeft:10,marginBottom:10}}>{'收货人信息'}</Text>
                    <View style={{width:width,padding:20,flexDirection:'row',backgroundColor:'#fff',
                        alignItems:'center'}}>
                        <Text>{'收货人姓名'}</Text>
                        <TextInput
                            style={{flex:1,flexDirection:'row',
                                paddingLeft:10,backgroundColor:'#fff'}}
                            placeholder={''}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
                    <View style={{width:width,padding:20,flexDirection:'row',backgroundColor:'#fff',
                        alignItems:'center'}}>
                        <Text >{'手机号'}</Text>
                        <TextInput
                            style={{flex:1,flexDirection:'row',
                                paddingLeft:10,backgroundColor:'#fff',paddingVertical:0}}
                            placeholder={''}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <Text style={{marginTop:20,marginLeft:10,marginBottom:10}}>{'配送信息'}</Text>
                    <View style={{width:width,padding:20,flexDirection:'row',backgroundColor:'#fff'}}>
                        <Text style={{margin:10,paddingHorizontal:30}}>{'选择区域'}</Text>

                    </View>
                    <View style={{width:width,padding:20,flexDirection:'row',backgroundColor:'#fff',
                        alignItems:'center'}}>
                        <Text>{'详细地址'}</Text>
                        <TextInput
                            style={{flex:1,flexDirection:'row',
                                paddingLeft:10,backgroundColor:'#fff',paddingVertical:0}}
                            placeholder={''}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
                    <View style={{width:width,padding:20,flexDirection:'row',backgroundColor:'#fff',
                        alignItems:'center'}}>
                        <Text>{'邮政编码'}</Text>
                        <TextInput
                            style={{flex:1,flexDirection:'row',
                                paddingLeft:10,backgroundColor:'#fff',paddingVertical:0}}
                            placeholder={''}
                            underlineColorAndroid={'transparent'}
                        />
                    </View>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={()=>{
                            const {navigator} = this.props;
                            InteractionManager.runAfterInteractions(()=>{
                                if (navigator){
                                    navigator.push({
                                        component:ExchangeSuccess,
                                    })
                                }
                            })
                        }}
                        style={{width:width*0.96,marginLeft:width*0.02,padding:8,borderRadius:6,backgroundColor:'#e84e40',
                            flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:30}}
                    >
                        <Text style={{color:'#fff'}}>{'确定'}</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f2'
    },
    navStyle: {
        width: width,
        height: 64,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        flexDirection: 'row'
    },
    navLeftStyle: {
        position: 'absolute',
        left: 20,
        bottom: 18
    },
    ListViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        backgroundColor:'#fff'
    },
})





