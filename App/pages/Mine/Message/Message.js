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

} from 'react-native';
const { width, height } = Dimensions.get( 'window' );
import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';
import MessageDetail from '../Message/MessageDetail';

import Model from '../../../Model/Model';
import FormatUtil from '../../../utils/FormatUtil'

export default class Message extends Component {

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

  componentDidMount(){
    this.get()
  }

  get(){
    var params = {
      classid: '4785c0d0-90f2-42c2-9ec9-95ba415399fa',
      num:'1000',
      page:'1'
    };
    Model.FindInfoList(params,(res)=>{
        this.setState({dataSource: this.state.dataSource.cloneWithRows(res.infos)})
    },(err)=>{

    });
  }

  goPushDetail = (rowData) => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.push( {
          component: MessageDetail,
          params:{
            classid: rowData.classid,
            id: rowData.id
          }
        } )
      }
    } )
  };

  renderRow = ( rowData ) => {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.goPushDetail(rowData)}
                        style={{ marginTop: 10,backgroundColor:'#fff' }}>
        <Image
          source={require('./Component/xuxian.png')}
          style={{width:width,height:1}}
        />
        <View style={{flex:1,paddingHorizontal:30,flexDirection:'row',paddingVertical:8,
                justifyContent:'flex-start',alignItems:'center',backgroundColor:'#fff'}}>
          <Text numberOfLines={1} style={{fontSize:14}}>
            {rowData.title}
          </Text>
        </View>
        <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
        <View style={{flex:1,flexDirection:'row',paddingHorizontal:30,paddingVertical:5,
                justifyContent:'flex-start',alignItems:'center'}}>
          <Text >{rowData.username}</Text>
          <Text style={{marginLeft:60}}>{FormatUtil.format(rowData.newstime)}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '站内短消息',
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
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind( this )}
        />
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
