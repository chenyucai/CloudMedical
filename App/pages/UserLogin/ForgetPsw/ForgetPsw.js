import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    PixelRatio,
    ScrollView,
    ListView,
    TouchableOpacity,
    TextInput
} from 'react-native';
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
let DEVICE_WIDTH = Dimensions.get('window').width;
import ResetPsw from './ResetPsw';
export default class ForgetPsw extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '找回密码',
            tintColor: titleTintColor
        };
        var leftbutton=(
            <TouchableOpacity onPress={()=>{
                this.props.navigator.pop()
            }}>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft: 10,flex: 1}}>
                    <Image style={{width:25,height:25}} source={{uri:'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f'}}/>
                </View>
            </TouchableOpacity>);
        return (
            <View style={{backgroundColor:'#efefef',flex:1}}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar tintColor={navTintColor}
                               title={titleConfig}
                               leftButton={leftbutton}
                />
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:30}}>
                    <Image style={{width:25,height:25}}
                           source={{uri:'http://163.177.128.179:39241/7005b7336951f4e666d84704a3465f3a'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>手机号:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'手机号'}/>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Image style={{width:25,height:25}}
                           source={{uri:'dsfdsgfdgfdhgrdftgfdg'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>验证码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'手机验证码'}/>
                    <View style={{width:2,height:30,marginHorizontal:5,backgroundColor:'#888888'}}/>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'green',paddingVertical:5,paddingHorizontal:10}}>
                         <Text style={{fontSize:14,color:'#fff'}}>获取</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{width:DEVICE_WIDTH-40,paddingVertical:15,backgroundColor:'#29b6f6',marginLeft:20,marginTop:30,alignItems: 'center',justifyContent:'center',borderRadius:5}}
                    onPress={()=>{
                        this.props.navigator.replace({
                            component:ResetPsw
                        })
                    }}>
                            <Text style={{fontSize:16,color:'white'}}>确        定</Text>
                </TouchableOpacity>
            </View>
        )
    }
}