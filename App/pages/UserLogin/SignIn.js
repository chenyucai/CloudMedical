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
import styleUtil from  '../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
let DEVICE_WIDTH = Dimensions.get('window').width;
let DEVICE_HEIGHT = Dimensions.get('window').height;
import ForgetPsw from './ForgetPsw/ForgetPsw';
import AppMain from '../AppMain';
export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false
        };
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '注册',
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
                           source={{uri:'xxx'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>验证码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'手机验证码'}/>
                    <View style={{width:2,height:30,marginHorizontal:5,backgroundColor:'#888888'}}/>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'green',paddingVertical:5,paddingHorizontal:10}}>
                        <Text style={{fontSize:14,color:'#fff'}}>获取</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Image style={{width:25,height:25}}
                           source={{uri:'http://163.177.128.179:39241/888896d603cba8092c5e2b220ef58835'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'设置密码'}/>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>重复密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'重复新密码'}/>
                </View>
                <TouchableOpacity
                    style={{width:DEVICE_WIDTH-40,paddingVertical:15,backgroundColor:'#29b6f6',marginLeft:20,marginTop:30,alignItems: 'center',justifyContent:'center',borderRadius:5}}
                    onPress={()=>{
                        this.registerSuccess();
                    }}>
                    <Text style={{fontSize:16,color:'white'}}>注        册</Text>
                </TouchableOpacity>
                {this.state.modalVisible ?
                    <View style={{
                        position:'absolute',
                        top:0,
					    left:0,
					    width:DEVICE_WIDTH,
					    height:DEVICE_HEIGHT,
					    backgroundColor:'#00000077',
                    }}>
                        {this.renderModal()}
                    </View> : null}
            </View>
        )
    }
    registerSuccess(){
        this.setState({
            modalVisible:true
        });
        setTimeout(() => {
            this.setState({
                modalVisible: false
            });
            this.props.navigator.replace({
                component:AppMain
            })
        }, 1000);
    }
    renderModal(){
        return(
            <View style={{
                alignItems:'center',
                backgroundColor:'#fff',
                width:DEVICE_WIDTH*0.6,
                marginLeft:DEVICE_WIDTH*0.2,
                marginTop:DEVICE_WIDTH*0.4,
                borderRadius:15,
                padding:10
            }}>
                <Text style={{fontSize:14,color:'#888888'}}>恭喜您！</Text>
                <Text style={{fontSize:14,color:'#888888',marginTop:10}}>账号注册成功！</Text>
                <Text style={{fontSize:14,color:'#888888',marginTop:10}}>请牢记账号和密码</Text>
            </View>
        )
    }
}