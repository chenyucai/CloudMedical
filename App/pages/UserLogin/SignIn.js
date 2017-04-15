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
import LoginModel from './LoginModel/LoginModel';

export default class UserLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible:false,
            account: '',
            yzm: '',
            password: '',
            password_r: '',
            pIds: '14b8c8f3-7338-4d4c-a924-37c3db7a7fb5',
            toclassid: 'f0f12434-363a-4d9f-bd15-02d0d2e702e6'
        };
    }

    getCode(){
      if (this.state.account == '') {
        alert('请输入手机号码');
        return ;
      }
      let params = {
        phone: this.state.account
      }
      LoginModel.getCode(params,(res)=>{
          if(res.flag != 1){
              alert(res.msg);
              return
          }

      },(err)=>{
        console.log(err);
      });
    }

    register(){
      let account=this.state.account;
      let password =this.state.password;
      let yzm = this.state.yzm;
      let password_r = this.password_r;
      if(account==''){
          alert('用户名不能为空');
          return;
      }
      if(yzm==''){
          alert('验证码不能为空');
          return;
      }
      if(password==''){
          alert('密码不能为空');
          return;
      }
      // if(password!=password_r){
      //     alert('两次输入密码不一致');
      //     return;
      // }
      let params={
          account,
          password,
          yzm,
          pIds: this.state.pIds,
          toclassid: this.state.toclassid
      };
      LoginModel.UserRegister(params,(res)=>{
          if(res.flag != 1){
              alert(res.msg);
              return
          }
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
      },(err)=>{

      });
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
                               placeholder={'手机号'}
                             onChangeText={(text)=>{this.setState({account:text})}}/>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Image style={{width:25,height:25}}
                           source={{uri:'xxx'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>验证码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'手机验证码'}
                             onChangeText={(text)=>{this.setState({yzm:text})}}/>
                    <View style={{width:2,height:30,marginHorizontal:5,backgroundColor:'#888888'}}/>
                    <TouchableOpacity style={{alignItems:'center',justifyContent:'center',borderRadius:5,backgroundColor:'green',paddingVertical:5,paddingHorizontal:10}}
                      onPress={this.getCode.bind(this)}>
                        <Text style={{fontSize:14,color:'#fff'}}>获取</Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Image style={{width:25,height:25}}
                           source={{uri:'http://163.177.128.179:39241/888896d603cba8092c5e2b220ef58835'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'设置密码'}
                               secureTextEntry={true}
                             onChangeText={(text)=>{this.setState({password:text})}}/>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>重复密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'重复密码'}
                               secureTextEntry={true}
                             onChangeText={(text)=>{this.setState({password_r:text})}}/>
                </View>
                <TouchableOpacity
                    style={{width:DEVICE_WIDTH-40,paddingVertical:15,backgroundColor:'#29b6f6',marginLeft:20,marginTop:30,alignItems: 'center',justifyContent:'center',borderRadius:5}}
                    onPress={()=>{
                        this.register();
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
