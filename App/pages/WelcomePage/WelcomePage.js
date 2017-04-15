import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
    Platform,
} from 'react-native';
let DEVICE_WIDTH = Dimensions.get( 'window' ).width;
let DEVICE_HEIGHT = Dimensions.get( 'window' ).height;
import ViewPager from 'react-native-viewpager';
import UserLogin from '../UserLogin/UserLogin';
const IMGS = ['timg','timg','timg'];
const IMGS_IOS = [
    require('./timg.jpg'),
    require('./timg.jpg'),
    require('./timg.jpg'),
]
export default class WelcomePage extends Component {
  constructor( props ) {
    super( props );
    var ds = new ViewPager.DataSource( {
      pageHasChanged: ( p1, p2 ) => p1 !== p2,
    } );
    this.state = {
      tabSelected: 0,
      dataSource: ds.cloneWithPages(IMGS_IOS),
    }
  }
  
  
  render() {
    return (
      <View style={{flex:1}}>
        <ViewPager
          ref={component => this.pager = component}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage.bind(this)}
          horizontal={false}
          isLoop={false}
          autoPlay={true}
          duration={1500}/>
      </View>
    )
  }
  _renderPage(data, pageID) {
    if(pageID != 2){
      return (
        <Image style={styles.pager}
               source={ data }
        />
      );
    }
    return(
      <Image style={styles.pager}
             source={data}>
        <TouchableOpacity
          style={{width:100,height:40,alignItems:'center',
          justifyContent:'center', position: 'absolute',
          left:(DEVICE_WIDTH-100)/2,bottom:80,backgroundColor:'#fff',borderRadius:10}}
          onPress={()=>{
               this.props.navigator.replace({
                   component:UserLogin
               })
           }}>
          <Text>立即体验</Text>
        </TouchableOpacity>
      </Image>
    )
   
  }
  
}
const styles = StyleSheet.create({
  pager:{
    width:DEVICE_WIDTH,
    height:DEVICE_HEIGHT,
  },
  
  
});