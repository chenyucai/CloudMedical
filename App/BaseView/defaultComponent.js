/**
 * component name
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity
} from 'react-native'

export default class defaultComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      test: false
    };
  }

  _changeState(){
    // 用this.setState方法去改变state
    this.setState({
      test: !this.state.test
    })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        {/* 绑定事件，记得bind(this) */}
        <TouchableOpacity onPress={this._changeState.bind(this)}>
          <Text>点我改变状态</Text>
        </TouchableOpacity>

        {/* 点击之后这里渲染 */}
        {this.state.test
          ? <Text>我是true</Text>
          : <Text>我是false</Text>
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    marginTop:50
  }
});
