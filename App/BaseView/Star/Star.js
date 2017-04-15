import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

export default class StarComponent extends Component {
  static defaultProps = {
    total: 5,
    score: 0
  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  renderStar(){
    var stars = [];
    // 渲染分数
    for (let i = 0; i < this.props.score; i++) {
      stars.push(
        <Image key={'n_'+i} style={styles.item} source={require('../assets/icon_n_score.png')}/>
      );
    }
    // 补全灰色星星
    for (let i = 0; i < this.props.total - this.props.score; i++) {
      stars.push(
        <Image key={'dis_'+i} style={styles.item} source={require('../assets/icon_dis_score.png')}/>
      );
    }
    return stars;
  }

  render () {

    return (
      <View style={styles.wrapper}>
        {this.renderStar()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    flexDirection:'row'
  },
  item:{
    marginRight:5
  }
});
