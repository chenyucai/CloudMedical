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
} from 'react-native'

const { width, height } = Dimensions.get( 'window' );
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import MineItem from '../Component/MineItem';
import TestWinIntegralDetail from './TestWinIntegralDetail';

let TestData = [
  {
    'id': 'RespiratorySystem',
    'name': '呼吸系统',
    'imgUrl': 'http://163.177.128.179:39241/cd071a1842aecc3f8200367730cb26b5'
  },
  { 'id': 'Endocrine', 'name': '内分泌', 'imgUrl': 'http://163.177.128.179:39241/fa4547e7063aefe3dc2c6a47113a595b' },
  { 'id': 'HeartHead', 'name': '心脑血管', 'imgUrl': 'http://163.177.128.179:39241/8ff9d5fbbac6d4c67da3239440a8c233' },
  {
    'id': 'DigestiveSystem',
    'name': '消化系统',
    'imgUrl': 'http://163.177.128.179:39241/4ef23feb0049068a528d56e4b2e59e49'
  },
  { 'id': 'OtherSystems', 'name': '其他系统', 'imgUrl': 'http://163.177.128.179:39241/43d28bfb7d8c1013e57982a1e9da95c8' },
];
export default class TestWinIntegral extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    const ds = new ListView.DataSource( { rowHasChanged: ( r1, r2 ) => r1 !== r2 } );
    this.state = {
      dataSource: ds.cloneWithRows( TestData )
    };
  }
  
  goToTest = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.push( {
          component: TestWinIntegralDetail,
          name: 'TestWinIntegralDetail'
        } )
      }
    } )
  };
  
  renderRow( rowData, sectionID, rowID ) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.goToTest()}>
        <MineItem name={rowData.name} imgUrl={rowData.imgUrl} num={rowID}/>

      </TouchableOpacity>
    )
  };
  
  handlerLeft = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        navigator.pop()
      }
    } )
  }
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '考试',
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
          renderRow={( rowData, sectionID, rowID ) => this.renderRow( rowData, sectionID, rowID )}
          renderFooter={()=>this.renderFooter()}
          contentContainerStyle={styles.ListViewStyle}
          enableEmptySections={true}
        />
      </View>
    )
  }

  renderFooter =() => {
    return(
      <View style={{width:width,height:1,backgroundColor:'#fff',marginTop:-1}}/>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#rgba(240,240,240,1)'
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
  ListViewStyle: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    backgroundColor: '#fff',
    padding:6,
    justifyContent:'flex-start',
  },
} )