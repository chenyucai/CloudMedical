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

export default class Feedback extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {};
  }
  
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '意见反馈',
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
        <TextInput
          style={{
            width: width, height: 40, flexDirection: 'row',
            paddingLeft: 30, backgroundColor: '#fff'
          }}
          placeholder={'标题:关键字'}
          underlineColorAndroid={'transparent'}
        />
        <TextInput
          style={{
            width: width, height: 120, paddingLeft: 30,
            marginTop: 10, backgroundColor: '#fff'
          }}
          placeholder={'意见反馈,意见详细描述'}
          multiline={true}
          textAlignVertical="center"
          numberOfLines={4}
          underlineColorAndroid={'transparent'}
        />
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => this.props.navigator.pop()}
          style={styles.btnStyle}
        >
          <Text style={{ color: '#fff' }}>{'提交'}</Text>
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
  btnStyle: {
    marginTop: 40,
    width: width * 0.9,
    height: 30,
    marginLeft: width * 0.05,
    backgroundColor: '#26a69a',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
} );








