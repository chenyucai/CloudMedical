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
} from 'react-native'
const { width, height } = Dimensions.get( 'window' );
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';

import AppMain from '../../AppMain';
import Exchange from './Exchange';
export default class ExchangeSuccess extends Component {
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
      title: '兑换成功',
      tintColor: titleTintColor
    };
    return (
      <View style={styles.container}>
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          backgroundColor={navTintColor}/>
        <NavigationBar
          tintColor={navTintColor}
          title={titleConfig}
        
        />
        <Text style={{ padding: 14, textAlign: 'center', fontSize: 18 }}>{'恭喜您兑换成功'}</Text>
        
        <Text style={{ padding: 14, marginLeft: 10 }}>
          {'兑换物品:   物品名称'}
        </Text>
        <Text style={{ padding: 14, marginLeft: 10 }}>
          {'消耗积分:   '}<Text style={{ color: '#ff9800' }}>{'-1000'}</Text>
        </Text>
        <Text style={{ padding: 14, marginLeft: 10 }}>
          {'收货地址:   收货地址信息'}
        </Text>
        
        <View style={{
          flexDirection: 'row',
          width: width,
          padding: 20,
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              const { navigator } = this.props;
              InteractionManager.runAfterInteractions( () => {
                if ( navigator ) {
                  navigator.push( {
                    component: Exchange,
                  } )
                }
              } )
            }}
            style={{
              width: width * 0.5 - 60, marginRight: 30, flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center', backgroundColor: '#26a69a', padding: 10, borderRadius: 8
            }}
          >
            <Text style={{ color: '#fff' }}>{'继续兑换'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              const { navigator } = this.props;
              InteractionManager.runAfterInteractions( () => {
                if ( navigator ) {
                  navigator.push( {
                    component: AppMain,
                  } )
                }
              } )
            }}
            style={{
              width: width * 0.5 - 60, marginLeft: 30, flexDirection: 'row', justifyContent: 'center',
              alignItems: 'center', backgroundColor: '#78909c', padding: 10, borderRadius: 8
            }}
          >
            <Text style={{ color: '#fff' }}>{'返回主页'}</Text>
          </TouchableOpacity>
        
        </View>
      
      </View>
    )
  }
}

const styles = StyleSheet.create( {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f2'
  },
  
} )





