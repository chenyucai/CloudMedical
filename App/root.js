import React,{Component} from 'react';
import {
    View,
    BackAndroid,
    Navigator,
    Platform,
    StyleSheet,
    StatusBar
    } from  'react-native';
export const STATUS_BAR_HEIGHT = (Platform.OS === 'ios' ? 20 : 25);
import {NaviGoBack} from './utils/CommonUtils';
import WelcomePage from './pages/WelcomePage/WelcomePage';

/**
 * 首页
 */
import AppMain from './pages/AppMain';

var _navigator;
var initPage = AppMain;
class rootApp extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state={
              pushMsg:''
          }
          this.renderScene=this.renderScene.bind(this);
          this.goBack=this.goBack.bind(this);
          this.configureScene=this.configureScene.bind(this);
          BackAndroid.addEventListener('hardwareBackPress',this.goBack);
      }
    goBack(){
        return NaviGoBack(_navigator);
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }
    renderScene(route,navigator){
        let Component=route.component;
        _navigator=navigator;
        return(
            <Component navigator={navigator} route={route} {...route.params}/>
        )
    }

    render(){
        return(
            <View style={{flex:1}}>
                <StatusBar
                    barStyle='light-content'
                    backgroundColor='transparent'
                    style={{height:STATUS_BAR_HEIGHT}}
                />
                <Navigator
                    ref='navigator'
                    style={{flex:1}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                    initialRoute={{
                        component:initPage,
                        name:'WelcomePage'
                    }}
                />
            </View>
        )
    }
}
export default rootApp;
