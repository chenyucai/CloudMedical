/**
 * component 购物车子项
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class ShopcartItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {this.props.selected
          ? <Image source={require('../assets/check_n.png')} style={styles.check}/>
          : <Image source={require('../assets/check_dis.png')} style={styles.check}/>
        }

        <Image source={require('../../../img/888.png')} style={styles.img}/>
        <View style={styles.info}>
          <View style={styles.title_wrapper}>
            <Text style={styles.title} numberOfLines={1}>【紧肤系列】</Text>
            <Text style={styles.level}>6个疗程</Text>
          </View>
          <View style={styles.desc}>
            <Text numberOfLines={2} style={styles.desc_text}>润白颜水光针2ml+伊肤泉无菌修复美颜润白颜水光针2ml+伊肤泉无菌修复美颜</Text>
          </View>
          <View style={styles.price_wrapper}>
            <Text style={styles.price}>¥ 998.00</Text>
            <Text style={styles.count}>X 2</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row',
    paddingTop: 15,
    paddingBottom:20
  },
  check:{
    alignSelf:'center'
  },
  img:{
    width: 100,
    height: 88,
    marginHorizontal: 10
  },
  title_wrapper:{
    marginBottom:10,
    flexDirection:'row',
    alignItems:'center'
  },
  title:{
    fontSize: 16,
    fontWeight: '500'
  },
  level:{
    backgroundColor:'#FF6D99',
    color:'#fff',
    fontSize:12,
    textAlign:'center',
    paddingHorizontal: 7,
    paddingVertical: 2
  },
  info:{
    flex:1
  },
  desc:{
    flex:1
  },
  desc_text:{
    fontSize: 12,
    color:'#656565',
  },
  price_wrapper:{
    flexDirection:'row',
    alignItems:'center'
  },
  price:{
    color:'#FF6D99',
    fontSize: 16,
    paddingRight: 10
  },
  count:{
    fontSize: 14,
    fontWeight: '300'
  }
});
