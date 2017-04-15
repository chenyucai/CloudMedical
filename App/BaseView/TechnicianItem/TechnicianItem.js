/**
 * component 技师
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class TechnicianItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  static defaultProps = {
    width: 142,
    height: 142
  };

  // props 需要传入图片的宽度和高度
  render () {
    return (
      <View style={[styles.item, {width:this.props.width}]}>
        <View style={{
          width: this.props.width,
          height: this.props.height
        }}>
          <Image style={{
            width: this.props.width,
            height: this.props.height,
            borderRadius: this.props.width / 2
          }} source={require('../beauty/image/g.jpg')}/>
        </View>

        <View style={styles.item_content}>
          <View style={styles.item_title}>
            <Text style={styles.item_title_text} numberOfLines={1}>
              米粒韩国妆园米粒韩国妆园
            </Text>
            <Image style={styles.item_sex} source={require('../assets/icon_female.png')}/>
          </View>
          <Text style={styles.item_server} numberOfLines={1}>
            服务次数: 6215
          </Text>
          <Text style={styles.item_desc} numberOfLines={2}>
            来自成都的返朴归真，从事美甲事业也有10年之
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff'
  },
  item_title:{
    alignSelf:'center',
    marginTop:12,
    marginBottom: 3,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems:'center'
  },
  item_title_text:{
    fontSize: 16
  },
  item_sex:{
    marginLeft:5
  },
  item_server:{
    fontSize: 10,
    color:'#B8B8B8',
    alignSelf:'center',
    marginBottom:8
  },
  item_desc:{
    color: '#B8B8B8',
    fontSize: 12,
    lineHeight:18,
    alignSelf:'center'
  }
});
