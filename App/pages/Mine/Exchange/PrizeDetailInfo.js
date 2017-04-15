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
  PixelRatio,
  
} from 'react-native'

const { width, height } = Dimensions.get( 'window' );
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';

import Exchange from './Exchange';
import AppMain from '../../AppMain';
import Address from './Address';


export default class PrizeDetailInfo extends Component {
  // 构造
  constructor( props ) {
    super( props );
    // 初始状态
    this.state = {
      exchangeTipsModal: false,//兑换提示(积分不够)
      exchangeInfoModal: false,//兑换提示填写信息提示
    };
  }
  
  //去兑换页
  goToExchange = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        this.setState( {
          exchangeTipsModal: false,
        } )
        navigator.push( {
          component: Exchange,
        } )
      }
    } )
  };
  //去首页
  goToStudy = () => {
    const { navigator } = this.props;
    InteractionManager.runAfterInteractions( () => {
      if ( navigator ) {
        this.setState( {
          exchangeTipsModal: false,
        } )
        navigator.push( {
          component: AppMain,
        } )
      }
    } )
  };
  
  render() {
    const navTintColor = styleUtil.getNavTintColor();
    const titleTintColor = styleUtil.getTitleTintColor();
    const titleConfig = {
      title: '商品详情',
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
          <View style={{ width: width, padding: 10, alignItems: 'center', backgroundColor: '#fff', marginTop: 1, }}>
            <Image
              source={{ uri: 'http://163.177.128.179:39241/a818a6784f12ae1c3c6e617c60f0c9cc' }}
              style={{ width: 60, height: 60, marginTop: 1, }}
            />
            <Text style={{ marginTop: 10, marginBottom: 10, }}>{'物品名称'}</Text>
            <Text style={{ color: '#ff5722' }}>{'1000云积分'}</Text>
          </View>
          <View style={{
            marginTop: 1, flexDirection: 'row', width: width, padding: 10, justifyContent: 'flex-start',
            alignItems: 'center', backgroundColor: '#ffffff'
          }}>
            <Image
              source={{ uri: 'http://163.177.128.179:39241/cd81aa13f225f40faa1f322095976e4b' }}
              style={{ width: 30, height: 30 }}
            />
            <Text>{'商品介绍'}</Text>
          </View>
          <View style={{
            width: width, backgroundColor: '#fff', paddingBottom: 18,
            paddingLeft: 40, paddingRight: 30
          }}>
            <Text>{'如果你无法简洁的表达你的想法，那只说明你还不够了解它。如果你无法简洁的表达你的想法，那只说明你还不够了解它。'}</Text>
            <Text>{'-- 阿尔伯特·爱因斯坦-- 阿尔伯特·爱因斯坦'}</Text>
          </View>
          <View style={{
            marginTop: 1, flexDirection: 'row', width: width, padding: 10, justifyContent: 'flex-start',
            alignItems: 'center', backgroundColor: '#ffffff'
          }}>
            <Image
              source={{ uri: 'http://163.177.128.179:39241/52d76ea7f490a588f505c3af932cb3ec' }}
              style={{ width: 30, height: 30 }}
            />
            <Text>{'商品兑换有效期'}</Text>
          </View>
          <View style={{
            width: width, backgroundColor: '#fff', paddingBottom: 60, paddingTop: 20,
            paddingLeft: 40, paddingRight: 30
          }}>
            <Text>{'2017-01-01 ---- 2017-12-12'}</Text>
            
            <Text onPress={() => this.setState( { exchangeTipsModal: true } )}
                  style={{ color: '#e84e40', marginTop: 50 }}>
              {'->   点击查看兑换积分不够时'}
            </Text>
          
          </View>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setState( { exchangeInfoModal: true } )}
            style={{
              width: width * 0.96, padding: 10, marginLeft: width * 0.02, borderRadius: 8, backgroundColor: '#e84e40',
              flexDirection: 'row', justifyContent: 'center', alignItems: 'center'
            }}
          >
            <Text style={{ color: '#fff' }}>{'立即兑换'}</Text>
          </TouchableOpacity>
        </ScrollView>
        {this.state.exchangeTipsModal ?
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: width,
            height: height,
            backgroundColor: '#00000077',
          }}>
            {this.renderExchangeTipsModal()}
          </View> : null}
        {this.state.exchangeInfoModal ?
          <View style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: width,
            height: height,
            backgroundColor: '#00000077',
          }}>
            {this.renderExchangeInfoModal()}
          </View> : null}
      </View>
    )
  }
  
  //兑换提示(积分不够)
  renderExchangeTipsModal = () => {
    return (
      <View style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width - 80,
        marginLeft: 40,
        marginTop: width * 0.35,
        borderRadius: 15,
        padding: 10
      }}>
        <Text style={{ fontSize: 16, color: '#333333', marginTop: 10 }}>温馨提示</Text>
        <View style={{
          width: width - 100, marginLeft: 50, height: 1 / PixelRatio.get(),
          marginLeft: 20, backgroundColor: '#efefef', marginVertical: 10
        }}/>
        <Text style={{ fontSize: 14, color: '#ff9800', marginTop: 10 }}>{'Sorry'}</Text>
        <Text style={{
          fontSize: 14, color: '#888888', marginTop: 10, textAlign: 'center', paddingLeft: 20,
          paddingRight: 20,
        }}>{'您的积分不足以兑换当前的商品' +
        '请前往考试赚取足够的积分在兑换'}</Text>
        
        <View
          style={{ width: width, padding: 20, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={{
              width: width / 2 - 80, paddingVertical: 10, backgroundColor: '#26a69a',
              marginTop: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderRadius: 6
            }}
            onPress={() => this.goToExchange()}>
            <Text style={{ fontSize: 14, color: '#ffffff' }}>{'兑换其他'}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width / 2 - 80, paddingVertical: 10, backgroundColor: '#78909C', marginLeft: 20,
              marginTop: 30, alignItems: 'center', justifyContent: 'center', marginBottom: 20, borderRadius: 6
            }}
            onPress={() => this.goToStudy()}>
            <Text style={{ fontSize: 14, color: '#ffffff' }}>{'返回主页'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
    
  };
  //兑换提示填写信息提示
  renderExchangeInfoModal = () => {
    return (
      <View style={{
        alignItems: 'center',
        backgroundColor: '#fff',
        width: width - 80,
        marginLeft: 40,
        marginTop: width * 0.35,
        borderRadius: 15,
        padding: 10
      }}>
        <Text style={{ fontSize: 16, color: '#333333', marginTop: 10 }}>温馨提示</Text>
        <View
          style={{
            width: width - 100,
            marginLeft: 50,
            height: 1 / PixelRatio.get(),
            marginLeft: 20,
            backgroundColor: '#efefef',
            marginVertical: 10
          }}/>
        <Text style={{ fontSize: 14, color: '#888888', marginTop: 10 }}>{'请前往填写兑换商品的收货信息'}</Text>
        <TouchableOpacity
          style={{
            width: width - 160,
            paddingVertical: 10,
            backgroundColor: '#26a69a',
            marginTop: 60,
            marginBottom: 20,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10
          }}
          onPress={() => {
            this.setState( {
              exchangeInfoModal: false
            } );
            this.props.navigator.push( {
              component: Address
            } )
          }}>
          <Text style={{ fontSize: 14, color: '#ffffff' }}>{'前往填写收货地址'}</Text>
        </TouchableOpacity>
      
      </View>
    )
    
  };
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
  
} )