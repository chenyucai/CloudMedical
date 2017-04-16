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
import Model from '../../../Model/Model';
import ApiConst from '../../../Base/Urls/ApiConst';

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

  componentDidMount(){
    this.get()
  }

  get(){
    var params = {
      classid: this.props.classid,
      id:this.props.id
    };
    Model.FindUpdateInfo(params,(res)=>{
        this.setState({
          ...res.infos[0]
        })
    },(err)=>{

    });
  }

  renderImg(){
    var data = [];
    if (this.state.newsicon) {
      var icons = this.state.npicture.split(',');
    } else {
      var icons = [];
    }

    for (var i = 0; i < icons.length; i++) {
      data.push(
        <Image key={i} style={{ width: 20, height: 20 }}
               source={{ uri: ApiConst.Versions().ImageBaseUrl + icons[i] }}/>
      )
    }
    return data;
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
            width: width, justifyContent: 'center', alignItems: 'center',
            marginTop:10
          }}>
            <Text>{this.state.title}</Text>
            <Text style={{ marginTop: 6, marginBottom: 14 }}>{this.state.newsbrief}</Text>
            <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
            {/* <Image
              source={{ uri: 'http://img.netbian.com/file/2017/0319/191136d78ddf5560d69ba1a2d8c55afc.jpg' }}
              style={{ width: width * 0.9, height: 120 ,marginTop:10 }}
            /> */}
            {this.renderImg()}
          </View>
          <View style={{
            width: width * 0.9, marginLeft: width * 0.05,
            marginTop: 8
          }}>
            <Text >{
              this.state.ncontent
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
