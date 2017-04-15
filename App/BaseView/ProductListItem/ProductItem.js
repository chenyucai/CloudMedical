import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'

export default class ProductItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: false
    };
  }

  static defaultProps = {
    width: 170,
    height: 150
  };

  _goDetail(){
    var { nav } = this.props;
    if (nav) {
      nav.push({
        id: 'ProductDetail'
      })
    }
  }

  _changeState(){
    // 用this.setState方法去改变state
    this.setState({
      collection: !this.state.collection
    })
  }

  // props 需要传入图片的宽度和高度
  render () {
    return (
      <TouchableOpacity style={[styles.item, {width:this.props.width}]} onPress={this._goDetail.bind(this)}>
        <View style={{
          width: this.props.width,
          height: this.props.height
        }}>
          <Image style={{
            width: this.props.width,
            height: this.props.height
          }} source={require('../assets/AF89940B-AB2E-480F-ABF4-F7FE9B3A6C0D.png')}/>
        </View>

        <View style={styles.item_content}>
          <View style={styles.item_title}>
            <Text style={styles.item_title_text} numberOfLines={2}>
              <Text style={{color:'#363334'}}>【紧肤系列】</Text>
              <Text style={{color:'#292929'}}>润白颜水光针2ml+伊肤泉无菌修复美颜</Text>
            </Text>
          </View>
          <View style={styles.item_footer}>
            <View style={styles.item_price}>
              <Text style={styles.item_price_now}>￥1000</Text>
              <Text style={styles.item_price_old}>¥1500</Text>
            </View>
            <View style={styles.item_sale}>
              <Text style={{fontSize:10}}>已售</Text>
              <Text style={styles.item_count}>2000</Text>
            </View>
          </View>
        </View>

        <TouchableHighlight style={styles.item_collection} onPress={this._changeState.bind(this)}>
          {this.state.collection
            ? <Image source={require('../assets/icon_n_love.png')} style={styles.collection_img}/>
            : <Image source={require('../assets/icon_dis_love.png')} />
          }
          {/* <Image source={require('../assets/icon_dis_love.png')} /> */}
        </TouchableHighlight>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  item:{
    backgroundColor:'#fff'
  },
  item_title:{
    alignSelf:'center',
    marginTop:7,
    paddingHorizontal: 10
  },
  item_title_text:{
    fontSize: 11,
    lineHeight: 16
  },
  item_footer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft:10,
    paddingRight:10,
    marginBottom: 8,
    marginTop: 21
  },
  item_sale:{
    flexDirection: 'row',
    alignItems:'center'
  },
  item_price:{
    flexDirection: 'row',
    alignItems:'center'
  },
  item_price_now:{
    fontSize:14,
    color:'#FF5D94',
    marginRight:3
  },
  item_price_old:{
    fontSize:10,
    color:'#C9C6C6'
  },
  item_count:{
    fontSize:10
  },
  item_collection:{
    position: 'absolute',
    right: 10,
    top: 10,
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  collection_img:{
    width: 26,
    height: 26,
    borderRadius: 13,
  }
});
