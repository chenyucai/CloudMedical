import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  InteractionManager,
  StatusBar,
  
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';

import SetCellView from './Component/SettingCellView';
//修改密码
import ModifyPwd from './Pwd/ModifyPwd';
//意见反馈
import Feedback from './Feedback/Feedback';
//关于
import About from './About/About';
import UserLogin from '../../UserLogin/UserLogin';

const { width, height } = Dimensions.get( 'window' )
export default class setView extends Component {
  goPushPage = ( value ) => {
    const { navigator } = this.props;
    if ( navigator ) {
      switch (value) {
        case 'ModifyPwd':
          InteractionManager.runAfterInteractions( () => {
            navigator.push( {
              component: ModifyPwd,
            } )
          } )
          break;
        case 'Feedback':
          InteractionManager.runAfterInteractions( () => {
            navigator.push( {
              component: Feedback,
            } )
          } )
          break;
        case 'About':
          InteractionManager.runAfterInteractions( () => {
            navigator.push( {
              component: About,
            } )
          } )
          break;
        
      }
    }
  };
  handlerLeft = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.pop()
      }
    } )
  };
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '设置',
      tintColor: titleTintColor
    };
    const leftbutton = (
      <TouchableOpacity onPress={() => {
        this.props.navigator.pop()
      }}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
          <Image style={{ width: 20, height: 20 }}
                 source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }}/>
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
          leftButton={leftbutton}
        />
        
        <TouchableOpacity activeOpacity={1} onPress={() => this.goPushPage( 'ModifyPwd' )}>
          <SetCellView name='修改密码' imgUrl="http://163.177.128.179:39241/d40412b5a0b2ef49abdcc19bb4c69654"/>
        </TouchableOpacity>
        <SetCellView name='WiFi自动更新' imgUrl="http://163.177.128.179:39241/3803127d6356ea5bcbdadbd406899706"/>
        <TouchableOpacity activeOpacity={1} onPress={() => this.goPushPage( 'Feedback' )}>
          <SetCellView name='意见反馈' imgUrl="http://163.177.128.179:39241/812e0aa95e94de04660a535470143e22"/>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={1} onPress={() => this.goPushPage( 'About' )}>
          <SetCellView name='关于' imgUrl='http://163.177.128.179:39241/b625473e05d8df647f10e28e7fd55545'/>
        </TouchableOpacity>
        <SetCellView name='版本介绍' imgUrl='http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'/>
        <SetCellView name='清除缓存' imgUrl='http://163.177.128.179:39241/6219d46573f2efbc791f03ef5a6c7e05'/>
        
        <TouchableOpacity activeOpacity={1} onPress={() =>{
          const {navigator} = this.props;
          InteractionManager.runAfterInteractions(()=>{
            if(navigator){
              navigator.resetTo({
                component:UserLogin,
              })
            }
          })
        }} style={styles.buttonViewStyle}>
          <Text style={{ color: 'white' }}>注销登录</Text>
        </TouchableOpacity>
      </View>
    
    
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#rgba(240,240,240,1)',
    
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
  buttonViewStyle: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    width: width - 20,
    backgroundColor: 'red',
    height: 40,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  }
  
} )