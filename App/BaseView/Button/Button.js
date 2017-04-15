/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image
} from 'react-native'

export default class ButtonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <Text style={styles.text}>完成</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    borderColor:'#FF6D99',
    borderWidth:0.5,
    paddingHorizontal:3,
    paddingVertical:3,
    height:52
  },
  container:{
    backgroundColor:'#FF6D99',
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  text:{
    fontSize: 14,
    color:'#fff'
  }
});
