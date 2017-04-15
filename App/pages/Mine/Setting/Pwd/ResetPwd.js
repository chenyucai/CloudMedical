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


export default class ResetPwd extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {};
  }
  
  saveBtn = () => {
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
      title: '重置密码',
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
            
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text>{'新密码:'}</Text>
            </View>
            <TextInput
              style={{
                flex: 3, flexDirection: 'row',
                paddingLeft: 30, backgroundColor: '#fff'
              }}
              placeholder={'新密码'}
              underlineColorAndroid={'transparent'}
            />
          </View>
          <View style={{
            flexDirection: 'row', flex: 1,
            justifyContent: 'center', alignItems: 'center',
          }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text>{'重置密码:'}</Text>
            </View>
            <TextInput
              style={{
                flex: 3, flexDirection: 'row',
                paddingLeft: 30, backgroundColor: '#fff'
              }}
              placeholder={'重置密码'}
              underlineColorAndroid={'transparent'}
            />
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


