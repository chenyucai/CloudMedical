import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  InteractionManager,
  
} from 'react-native';
const { width, height } = Dimensions.get( 'window' )
import DifficultConsolidateItem from './Component/DifficultConsolidateItem'

import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view'
import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';


export default class DifficultConsolidate extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {
      selectName: '时间范围'
    };
  }
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '我的错题',
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
        
        
        <ScrollableTabView
          renderTabBar={() => <ScrollableTabBar />}
          underlineStyle='red'
          tabBarUnderlineColor='red'
          tabBarBackgroundColor='white'
          tabBarActiveTextColor='red'
          tabBarInactiveTextColor='gray'
          tabBarTextStyle={{ fontSize: 16 }}
        >
          <DifficultConsolidateItem tabLabel='全部' {...this.props}/>
          <DifficultConsolidateItem tabLabel='心脑血管' {...this.props}/>
          <DifficultConsolidateItem tabLabel='内分泌' {...this.props}/>
          <DifficultConsolidateItem tabLabel='消化系统' {...this.props}/>
          <DifficultConsolidateItem tabLabel='呼吸系统' {...this.props}/>
          <DifficultConsolidateItem tabLabel='其他系统' {...this.props}/>
          <DifficultConsolidateItem tabLabel='医学知识' {...this.props}/>
        </ScrollableTabView>
      </View>
    )
  }
  
  onSelected( rowid, rowData ) {
    this.setState( {
      selectName: rowData
    } )
  }
}


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#rgba(240,240,240,1)',
  },
  navStyle: {
    width: width,
    height: 64,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    flexDirection: 'row',
    marginBottom: 1
  },
  navLeftStyle: {
    position: 'absolute',
    left: 20,
    bottom: 18
  },
  
  searchView: {
    height: 50,
    width: width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10
  },
  
  textInputViewStyle: {
    width: 150,
    height: 30,
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 1,
    backgroundColor: 'white',
    fontSize: 13,
    paddingLeft: 10
  },
  
  searchBtnViewStyle: {
    width: 50,
    height: 25,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginLeft: 5
  },
  
  DropdownViewStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 120,
    height: 30,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 3,
    backgroundColor: 'white'
    
  },
  
  dropdown: {
    // width:100,
    // height:30
  },
  
  dropdownOptions: {
    width: 120,
    marginTop: 7,
    marginLeft: -32
  }
} )