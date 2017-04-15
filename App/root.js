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

import FetchUtil from './Base/Network/FetchUtil';

var params = {id:1};
FetchUtil.fetchPostJson(
  'http://www.missnefer.com/AppHome/GetHomeInformationList',
  FetchUtil.toQueryString(params),
  function(responseText){
    // console.log(responseText);
  },
  function(error){
    console.log(error);
  }
)

var _navigator;
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

    componentWillMount() {
      fetch('https://www.baidu.com')
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
                        component:WelcomePage,
                        name:'WelcomePage'
                    }}
                />
            </View>
        )
    }
}
export default rootApp;
