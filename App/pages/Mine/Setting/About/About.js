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
import AboutCellView from '../Component/AboutCellView';
export default class About extends Component {
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
      title: '关于',
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
          width: width, height: 120, alignItems: 'center',
          justifyContent: 'center', backgroundColor: '#fff',
          borderTopWidth: 1, borderTopColor: '#e1e1e1', marginBottom: 10
        }}>
          <Image
            source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489411036767&di=00284b58d0de3eedd78baee7afce09cd&imgtype=0&src=http%3A%2F%2Fpic28.photophoto.cn%2F20130924%2F0005018357660919_b.jpg' }}
            style={{ width: 80, height: 80, resizeMode: 'cover', }}
          />
          <Text>{'云医  1.0.1'}</Text>
        </View>
        <AboutCellView name='检测更新' imgUrl='http://163.177.128.179:39241/6219d46573f2efbc791f03ef5a6c7e05'/>
        <AboutCellView name='查看二维码' imgUrl='http://163.177.128.179:39241/d97e10c7ab5b440d7ba3f2a834002859' isShowImg={true} isShowImgUrl='http://163.177.128.179:39241/7d4f75478b7faf691e0c8a89ad0e00ed' />
        <AboutCellView name='软件信息' imgUrl='http://163.177.128.179:39241/7005b7336951f4e666d84704a3465f3a' />
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






