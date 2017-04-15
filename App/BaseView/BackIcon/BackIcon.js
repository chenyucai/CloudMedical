import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

export default class BackIconComponent extends Component {
  static defaultProps = {

  };

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _back(){
    const { nav } = this.props;
    if (nav) {
      nav.pop();
    }
  }

  render () {
    return (
      <TouchableOpacity onPress={this._back.bind(this)}>
        <Image source={require('../assets/icon_Return2.png')}/>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({

});
