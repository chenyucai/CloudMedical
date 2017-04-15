import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class BlockTitleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.zh_wrapper}>
          <Text style={styles.zh_title}>{this.props.titleZh}</Text>
          <Image style={styles.zh_icon} source={require('../assets/icon_Get into.png')}/>
        </View>
        <View style={styles.en_wrapper}>
          <View style={styles.en_left}><Image source={require('../assets/line_left.png')}/></View>
          <Text style={styles.en_title}>{this.props.titleEn}</Text>
          <View style={styles.en_right}><Image source={require('../assets/line_right.png')}/></View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  zh_wrapper:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    marginBottom:4
  },
  zh_title:{
    fontSize:12
  },
  zh_icon:{
    marginLeft:6
  },
  en_wrapper: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
  },
  en_left: {
  },
  en_title: {
    paddingLeft: 10,
    paddingRight: 10,
    color:'#B8B8B8',
    fontSize:12
  },
  source_right: {
  },
});
