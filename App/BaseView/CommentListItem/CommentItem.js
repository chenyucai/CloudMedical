import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class CommentItemComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Image source={require('../../../img/scroll.jpg')} style={styles.user_icon}/>
          <View style={styles.user_wrapper}>
            <Text style={styles.user_name}>ANRA</Text>
            <Text style={styles.user_date}>2016.10.31</Text>
          </View>
          <View style={styles.zan_wrapper}>
            <Image source={require('../assets/icon_Fabulous.png')} style={styles.zan_icon}/>
            <Text style={styles.zan_count}>999+</Text>
          </View>
        </View>

        <Text style={styles.content}>
          这个产品真是太好用了!
        </Text>

        <View style={styles.pics_wrapper}>
          <Image source={require('../../../img/scroll.jpg')} style={styles.pic}/>
          <Image source={require('../../../img/scroll.jpg')} style={styles.pic}/>
          <Image source={require('../../../img/scroll.jpg')} style={styles.pic}/>
        </View>

        <View style={styles.publish_wrapper}>
          <Text style={styles.publish_time}>5小时前</Text>
          <Image source={require('../assets/icon_Reply.png')}/>
        </View>

        <View style={styles.reply_wrapper}>
          <View style={styles.reply_item}>
            <Text>
              <Text style={styles.reply_item_name}>流光娜莺：</Text>
              <Text style={styles.reply_item_content}>确实一般，不容之前用的嫩肤系列效果好~确实一般，不容之前用的嫩肤系列效果好~</Text>
            </Text>
          </View>
          <View style={styles.reply_item}>
            <Text>
              <Text style={styles.reply_item_name}>流光娜莺：</Text>
              <Text style={styles.reply_item_content}>确实一般，不容之前用的嫩肤系列效果好~</Text>
            </Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{

  },
  header:{
    flexDirection: 'row',
    alignItems:'center'
  },
  user_icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12
  },
  user_wrapper:{
    flex:1
  },
  user_name:{
    fontSize: 16
  },
  user_date:{
    fontSize: 12,
    color: '#B8B8B8'
  },
  zan_wrapper:{
    flexDirection: 'row',
    alignItems:'center'
  },
  zan_icon:{
    marginRight: 6
  },
  zan_count:{
    fontSize: 12
  },
  content:{
    fontSize: 14,
    paddingLeft: 52,
    paddingTop: 10,
    paddingBottom: 10
  },
  pics_wrapper:{
    flexDirection:'row',
    flexWrap:'wrap',
    marginLeft: 52
  },
  pic:{
    width: 80,
    height: 80,
    marginRight: 6,
    marginBottom: 6
  },
  publish_wrapper:{
    marginLeft: 52,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:6
  },
  publish_time:{
    fontSize:12,
    color:'#B8B8B8'
  },
  reply_wrapper:{
    backgroundColor:'#F0EFF5',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginLeft: 52
  },
  reply_item:{
    marginBottom: 4
  },
  reply_item_name:{
    fontSize: 12
  },
  reply_item_content:{
    fontSize: 12,
    color:'#656565'
  }
});
