import React, { Component } from 'react';
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
    Platform,
} from 'react-native';

const { width, height } = Dimensions.get( 'window' );
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import BasePopMenu from '../../../utils/BasePopMenu';
var ImagePicker = require('react-native-image-picker');
var options = {
    storageOptions: {
        skipBackup: true,
        path: 'images'
    },
    noData: true,
    maxWidth: 500,
    maxHeight: 500,
};
export default class PersonalInfo extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {
      isEditable: false,
        isShowMenu: false,
        p11:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489411036767&di=00284b58d0de3eedd78baee7afce09cd&imgtype=0&src=http%3A%2F%2Fpic28.photophoto.cn%2F20130924%2F0005018357660919_b.jpg',
    };
  }

  
  handlerRight = () => {
    this.setState( {
      isEditable: true,
    } )
  };
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '个人信息',
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
    const rightButton = (
      <TouchableOpacity onPress={() => this.handlerRight()}>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
          <Text style={{marginRight:10}}>{'编辑'}</Text>
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
          rightButton={rightButton}
        />
        
        <View style={{ backgroundColor: '#fff', alignItems: 'center', padding: 10, }}>
          <Image
            source={{ uri: this.state.p11 }}
            style={{ width: 60, height: 60, }}
          />
          <Text style={{ margin: 10, }}>{'昵称'}</Text>
            {
                this.state.isEditable ?
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => {
                     this.refs['popmenu'].setIsShowMenu(true);
                }}
                        style={{ padding: 6, backgroundColor: '#26c6da', borderRadius: 4, }}
                    >
                        <Text style={{ color: '#fff' }}>{'选择图片'}</Text>
                    </TouchableOpacity>:
                    <View

                        style={{ padding: 6, backgroundColor: '#fff', borderRadius: 4, }}
                    >
                    </View>
            }
        </View>
        <View style={{ width: width, padding: 20, flexDirection: 'row', backgroundColor: '#fff', marginTop: 20,alignItems:'center' }}>
          <Text style={{ flex: 1 }}>{'姓名'}</Text>
          <TextInput
            style={{
              flex: 3, flexDirection: 'row',
              paddingLeft: 10, backgroundColor: '#fff'
            }}
            placeholder={''}
            defaultValue={'黄鑫业'}
            underlineColorAndroid={'transparent'}
            editable={this.state.isEditable}
          />
        </View>
        <View style={{ width: width, padding: 20, flexDirection: 'row', backgroundColor: '#fff', marginTop: 1,alignItems:'center'  }}>
          <Text style={{ flex: 1 }}>{'昵称'}</Text>
          <TextInput
            style={{
              flex: 3, flexDirection: 'row',
              paddingLeft: 10, backgroundColor: '#fff'
            }}
            placeholder={''}
            defaultValue={'黄鑫业/shawn'}
            underlineColorAndroid={'transparent'}
            editable={this.state.isEditable}
          />
        </View>
        <View style={{ width: width, padding: 20, flexDirection: 'row', backgroundColor: '#fff', marginTop: 10 }}>
          <Text style={{ flex: 1 }}>{'账号'}</Text>
          <TextInput
            style={{ flex: 2, flexDirection: 'row', backgroundColor: '#fff' }}
            placeholder={''}
            defaultValue={'180 **** 6229'}
            underlineColorAndroid={'transparent'}
            editable={this.state.isEditable}
          />
          {
            this.state.isEditable ?
              <Text style={{ flex: 1, color: '#e51c23', fontSize: 12 }}>{'账号不可修改'}</Text>
              : <View style={{ flex: 1 }}/>
          }
        </View>
        {
          this.state.isEditable ?
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => this.setState( { isEditable: false } )}
              style={{
                padding: 8, width: width * 0.96, marginTop: 40, marginLeft: width * 0.02, borderRadius: 4,
                backgroundColor: '#26a69a', flexDirection: 'row', justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ color: '#fff' }}>{'保存'}</Text>
            </TouchableOpacity>
            : null
          
        }
          <BasePopMenu
              ref='popmenu'
              data={{
                    items: [
                        {
                            text: "拍照",
                            onClick: () => {
                                ImagePicker.launchCamera(options, (response) => this.pickPic(response));
                            }
                        },
                        {
                            text: "从相册获取",
                            onClick: () => {
                                ImagePicker.launchImageLibrary(options, (response) => this.pickPic(response));
                            }
                        },
                        {
                            text: "取消",
                            onClick: () => {
                                this.refs['popmenu'].setIsShowMenu(false);
                            }
                        }
                    ]
                }}
              {...this.props}
          />
      </View>
    )
  }
    pickPic(response) {
        if (Platform.OS == 'android' && response.uri != null && response.path != null) {
            response.uri = "file://" + response.path;
        }
        var source;
        if (response.uri) {
            source = {uri: response.uri};
            this.setState({
                shopPic: source,
                isShowPopMenu: false,
                p11:response.uri
            });
        }
    }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f2'
  },
  
} )





