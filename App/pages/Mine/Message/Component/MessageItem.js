import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  InteractionManager,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window')



export default class MessageItem extends Component {
  // 构造
  constructor(props) {
    super(props);
    // 初始状态
    this.state = {
      
    };
  }
  renderLine = () =>{
    let Arr =[];
    for(let i=0;i<width/5;i++){
      
      Arr.push(
        <Image key={ i } style={{width:5,height:2,resizeMode:'center'}}
               source={{uri:'http://163.177.128.179:39241/306e4d122023fa87cfa04e1c528fd455'}}
        />
      
      )
    }
    return Arr;
  }
  render() {
    const {topTitle,releasePeople,newsTime} = this.props;
    return (
      <View style={styles.container}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          {this.renderLine()}
        </View>
        <View style={{flex:1,paddingHorizontal:30,flexDirection:'row',
                justifyContent:'flex-start',alignItems:'center'}}>
          <Text numberOfLines={1}>
            {topTitle}
          </Text>
        </View>
        <View style={{width:width,height:1,backgroundColor:'#e1e1e1'}}/>
        <View style={{flex:1,flexDirection:'row',paddingHorizontal:30,
                justifyContent:'flex-start',alignItems:'center'}}>
          <Text >{releasePeople}</Text>
          <Text style={{marginLeft:60}}>{newsTime}</Text>
        </View>
      </View>
    )
  }
  
  
}

const styles = StyleSheet.create({
  container:{
    width:width,
    height:80,
    backgroundColor:'#fff',
    
  },
});


