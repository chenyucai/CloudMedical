import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

import StarComponent from '../Star/Star';

export default class StoreItemComponent extends Component {
  static defaultProps = {
    width: 170,
    height: 130
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _goDetail(){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'StoreDetail'
      })
    }
  }

  // props 需要传入图片的宽度和高度
  render () {
    return (
      <TouchableOpacity style={[styles.item,{width: this.props.width}]} onPress={this._goDetail.bind(this)}>
        <View style={{
          width: this.props.width,
          height: this.props.height
        }}>
          <Image style={{
            width: this.props.width,
            height: this.props.height
          }}
            source={require('../../../img/888.png')}
            resizeMode="cover"
          />
        </View>

        <View style={styles.item_content}>
          <View style={styles.item_title}>
            <Text style={styles.item_title_text} numberOfLines={1}>
              <Text style={{fontSize:12}}>STORY  江湾镇水港店sdfasfas</Text>
            </Text>
          </View>
          <Text style={styles.item_address}>【浦东新区】</Text>
          <Text style={styles.item_km}>1.2 KM</Text>
          <View style={styles.item_star}>
            <StarComponent score="4"/>
          </View>
          <Text style={styles.item_count}>预约数：24585</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff',
    borderColor:'#B8B8B8',
    borderWidth:0.5
  },
  item_title:{
    alignSelf:'center',
    paddingHorizontal: 10,
    position: 'absolute',
    top: -13,
  },
  item_content:{
    paddingTop:20
  },
  item_title_text:{
    fontSize: 11,
    height: 30,
    backgroundColor:'#fff',
    opacity: 0.8,
    paddingHorizontal: 10,
    paddingTop:5,
    paddingBottom:5
  },
  item_address:{
    fontSize:10,
    color: '#363334',
    textAlign: 'center',
    marginBottom:5
  },
  item_km:{
    fontSize:10,
    color: '#656565',
    textAlign: 'center',
    marginBottom:5
  },
  item_star:{
    alignSelf:'center',
    marginTop:5,
    marginBottom:10
  },
  item_count:{
    fontSize:10,
    color: '#363334',
    textAlign: 'center',
    marginBottom:10
  },
});
