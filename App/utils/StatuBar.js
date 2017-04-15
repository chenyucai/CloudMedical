import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    StatusBar
    } from 'react-native';
import styleUtil from  './styleutil';
var navTintColor= styleUtil.getNavTintColor();
export default class Back extends Component{
   render(){
       return(
           <StatusBar
               barStyle={'light-content'}
               animated={true}
               backgroundColor={navTintColor}/>
       )
   }

}
module.exports=Back;