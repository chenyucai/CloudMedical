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
//顺序练习or随机练习
import SequencePractice from './SequencePractice';
//模拟考试
import SimulationTest from './SimulationTest';
//难点巩固
import DifficultConsolidate from '../DifficultConsolidate/DifficultConsolidate';
//我的收藏
import MyCollection from '../MyCollection/MyCollection';

let TestData = [
  { 'id': 'SequencePractice', type:'order', 'name': '顺序练习','imgUrl':'http://163.177.128.179:39241/2e877c97c8949919baccd667b57fa770'},
  { 'id': 'SequencePractice', type:'sj', 'name': '随机练习','imgUrl':'http://163.177.128.179:39241/7844a1cefa9daa4f80133c8fb0618bb4' },
  { 'id': 'SimulationTest', 'name': '模拟考试' ,'imgUrl':'http://163.177.128.179:39241/20972e65a040972b16cea01dd38e1263'},
  { 'id': 'DifficultConsolidate', 'name': '难点巩固' ,'imgUrl':'http://163.177.128.179:39241/4f7567a474e1b0af6ce5fa2bbfdeffa9'},
  { 'id': 'MyCollection', 'name': '我的收藏' ,'imgUrl':'http://163.177.128.179:39241/769ddc7608010b93297472688be13855'},
];
export default class PracticeType extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    const ds = new ListView.DataSource( { rowHasChanged: ( r1, r2 ) => r1 !== r2 } );
    this.state = {
      dataSource: ds.cloneWithRows( TestData )
    };
  }

  goToTest = ( value ) => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        switch (value.id) {
          case 'SequencePractice':
            navigator.push( {
              component: SequencePractice,
              params: {
                name: value.name,
                id:this.props.id,
                type:value.type
              }
            } )
            break;
          case 'SimulationTest':
            navigator.push( {
              component: SimulationTest,
              params:{
                id:this.props.id,
                classid:this.props.classid
              }

            } )
            break;
          case 'DifficultConsolidate':
            navigator.push( {
              component: DifficultConsolidate,
              name: 'DifficultConsolidate',
              params:{
                id:this.props.id,
                classid:this.props.classid
              }
            } )
            break;
          case 'MyCollection':
            navigator.push( {
              component: MyCollection,
              name: 'MyCollection',
              params:{
                id:this.props.id,
                classid:this.props.classid
              }
            } )
            break;

        }

      }
    } )
  };

  renderRow( rowData, sectionID, rowID ) {
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.goToTest( rowData )}>
        <MineItem name={rowData.name} imgUrl={rowData.imgUrl} line={false}/>
      </TouchableOpacity>
    )
  };

  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: this.props.name,
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
          contentContainerStyle={styles.ListViewStyle}
          enableEmptySections={true}
          renderFooter={()=>this.renderFooter()}
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
