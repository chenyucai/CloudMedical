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
  ListView,
  ScrollView,
} from 'react-native';
const { width, height } = Dimensions.get( 'window' )
import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';
export default class MessageDetail extends Component {
  
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {
      dataSource: new ListView.DataSource( {
        rowHasChanged: ( r1, r2 ) => r1 != r2
      } )
    };
  }
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '消息详情',
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
        <ScrollView>
          <View style={{
            width: width, height: 180, justifyContent: 'center', alignItems: 'center',
            marginTop:10
          }}>
            <Text>{'标题:习近平主持政治局会议六中全会10月召开'}</Text>
            <Text style={{ marginTop: 6, marginBottom: 14 }}>{'薛志刚 2016/2/24 下午12:27'}</Text>
            <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
            <Image
              source={{ uri: 'http://img.netbian.com/file/2017/0319/191136d78ddf5560d69ba1a2d8c55afc.jpg' }}
              style={{ width: width * 0.9, height: 120 ,marginTop:10 }}
            />
          </View>
          <View style={{
            width: width * 0.9, marginLeft: width * 0.05,
            marginTop: 8
          }}>
            <Text >{
              '      标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开' +
              '标题:习近平主持政治局会议六中全会10月召开'
            }</Text>
          </View>
        </ScrollView>
      
      </View>
    )
  }
  
  
}
const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  
} );


