import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  InteractionManager,
  Dimensions,
} from 'react-native';
const { width, height } = Dimensions.get( 'window' )
import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../../utils/styleutil';
import ResetPwd from './ResetPwd';


export default class ModifyPwd extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {};
  }
  
  handlerLeft = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.pop()
      }
    } )
  };
  saveBtn = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.replace( {
          component: ResetPwd,
        } )
      }
    } )
  };
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '验证手机号',
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
        
        <View style={{
          width: width * 0.96, marginLeft: width * 0.02, height: 80,
          marginTop: 50, backgroundColor: '#fff'
        }}>
          <View style={{
            flexDirection: 'row', flex: 1, borderBottomWidth: 1, borderBottomColor: '#e1e1e1',
            justifyContent: 'center', alignItems: 'center',
          }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Image
                source={{ uri: 'http://163.177.128.179:39241/7005b7336951f4e666d84704a3465f3a' }}
                style={{ width: 20, height: 20 }}
              />
            </View>
            <Text style={{ flex: 1 }}>{'手机号:'}</Text>
            <TextInput
              style={{
                flex: 3, flexDirection: 'row',
                paddingLeft: 30, backgroundColor: '#fff'
              }}
              placeholder={'手机号'}
              underlineColorAndroid={'transparent'}
            />
            <View style={{ flex: 1 }}/>
          </View>
          <View style={{
            flexDirection: 'row', flex: 1,
            justifyContent: 'center', alignItems: 'center',
          }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            </View>
            <Text style={{ flex: 1 }}>{'验证码:'}</Text>
            <TextInput
              style={{
                flex: 3, flexDirection: 'row',
                paddingLeft: 30, backgroundColor: '#fff'
              }}
              placeholder={'手机验证码'}
              underlineColorAndroid={'transparent'}
            />
            <View style={{ flex: 1.3, borderLeftColor: '#e1e1e1', borderLeftWidth: 1 }}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => alert( '获取验证码' )}
                style={{
                  width: 50, height: 30, backgroundColor: '#2baf2b', borderRadius: 4, justifyContent: 'center',
                  alignItems: 'center', marginLeft: 4, marginRight: 4
                }}
              >
                <Text style={{ color: '#fff' }}>{'获取'}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.saveBtn()}
          style={{
            width: width * 0.96, height: 40, marginLeft: width * 0.02, borderRadius: 4, marginTop: 80,
            backgroundColor: '#26a69a', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
          }}
        >
          <Text style={{ color: '#fff' }}>{'确定'}</Text>
        </TouchableOpacity>
      
      </View>
    )
  }
  
  
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f2'
  },
  
} );


