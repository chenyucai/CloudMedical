import React, { Component } from 'react';
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
    TextInput,
    Keyboard,
    InteractionManager,
} from 'react-native';
import styleUtil from '../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
let DEVICE_WIDTH = Dimensions.get('window').width;
import ForgetPsw from './ForgetPsw/ForgetPsw';
import AppMain from '../AppMain';
import SignIn from './SignIn';
import LoginModel from './LoginModel/LoginModel';
import dismissKeyboard from 'dismissKeyboard';  
export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uName: 'ys123',
            uPsw: '123456',
            id: '2de20730-a806-49ad-a958-d1be9f58a93e'
        };
    }

    login() {
        dismissKeyboard()
        let name = this.state.uName;
        let psw = this.state.uPsw;
        if (name == '') {
            alert('用户名不能为空');
            return;
        }
        if (name == '') {
            alert('用户名不能为空');
            return;
        }
        let params = {
            username: name,
            password: psw,
            // id: this.state.id
        };
        
        LoginModel.userLogin(params, (res) => {
            if (res.flag != 1) {
                alert(res.msg);
                return
            }
            //this.saveUser(res);
            // this.props.nav.resetTo({
            //     id: 'Index'
            // })

            const { navigator } = this.props;
            InteractionManager.runAfterInteractions(() => {
                if (navigator) {
                    navigator.push({
                        component: AppMain
                    })
                }
            })
        }, (err) => {

        });
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '登录',
            tintColor: titleTintColor
        };
        return (
            <View style={{ backgroundColor: '#efefef', flex: 1 }}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    
                    keyboardType={'numeric'}
                    backgroundColor={navTintColor} />
                <NavigationBar tintColor={navTintColor}
                    title={titleConfig}
                />
                <View
                    style={{ flexDirection: 'row', width: DEVICE_WIDTH - 40, marginLeft: 20, backgroundColor: '#fff', padding: 15, alignItems: 'center', marginTop: 30 }}>
                    <Image style={{ width: 25, height: 25 }}
                        source={{ uri: 'http://163.177.128.179:39241/7f1ced3a7379e8d912a5c1caae9dec5c' }} />
                    <Text style={{ fontSize: 14, color: '#888888', marginLeft: 10 }}>账号:</Text>
                    <TextInput style={{ paddingVertical: 0, paddingLeft: 10, flex: 1 }}
                     underlineColorAndroid={'transparent'}
                        placeholder={'手机号'}
                        onChangeText={(text) => { this.setState({ uName: text }) }} />
                </View>
                <View
                    style={{ flexDirection: 'row', width: DEVICE_WIDTH - 40, marginLeft: 20, backgroundColor: '#fff', padding: 15, alignItems: 'center', marginTop: 1 / PixelRatio.get() }}>
                    <Image style={{ width: 25, height: 25 }}
                        source={{ uri: 'http://163.177.128.179:39241/888896d603cba8092c5e2b220ef58835' }} />
                    <Text style={{ fontSize: 14, color: '#888888', marginLeft: 10 }}>密码:</Text>
                    <TextInput style={{ paddingVertical: 0, paddingLeft: 10, flex: 1 }}
                        underlineColorAndroid={'transparent'}
                        placeholder={'账户密码'}
                        onChangeText={(text) => { this.setState({ uPsw: text }) }} />
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                    <TouchableOpacity style={{ marginLeft: 30 }}
                        onPress={() => {
                            this.props.navigator.resetTo({
                                component: SignIn
                            })
                        }}>
                        <Text style={{ fontSize: 14, color: 'blue' }}>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flexDirection: 'row', flex: 1, alignItems: 'center', justifyContent: 'flex-end', marginRight: 30 }}
                        onPress={() => {
                            this.props.navigator.push({
                                component: ForgetPsw
                            })
                        }}>
                        <Text style={{ fontSize: 14, color: 'blue' }}>忘记密码?</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={{ width: DEVICE_WIDTH - 40, paddingVertical: 15, backgroundColor: '#29b6f6', marginLeft: 20, marginTop: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5 }}
                    onPress={this.login.bind(this)}>
                    <Text style={{ fontSize: 16, color: 'white' }}>登        录</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
