/**
 * component 日记本
 */
import React, { Component } from 'react'
import {
 StyleSheet,
 View,
 Text,
 Image,
 TouchableOpacity
} from 'react-native'

import ScreenUtils from '../../Utils/ScreenUtils/ScreenUtils';

export default class DiaryListItemComponent extends Component {
 constructor(props) {
   super(props);
   this.state = {

   };
 }

 static defaultProps = {
   width: ScreenUtils.scaleSize(170),
   height: ScreenUtils.scaleSize(180)
 };

 _goDetail(){
   var { nav } = this.props;
   if (nav) {
     nav.push({
       id: 'DiaryListDetail'
     })
   }
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
         }} source={require('../../../img/5380F1CB-AAA6-497A-9E43-78EE4A080A8F.png')}/>
       </View>

       <View style={styles.item_content}>
         <Text style={styles.item_content_text}>关注</Text>
       </View>
     </TouchableOpacity>
   )
 }
}

const styles = StyleSheet.create({
 item:{
   backgroundColor:'#fff'
 },
 item_content:{
   height:40,
   justifyContent:'center',
   alignItems:'center'
 },
 item_content_text:{
   fontSize:14
 }
});
