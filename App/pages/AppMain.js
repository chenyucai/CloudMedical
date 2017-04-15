import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image
    } from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Study from './Study/Study';
import Mine from './Mine/MineView';
class AppMain extends Component{
    static defaultProps = {
        selectedTab:'study'
    }
      constructor(props) {
        super(props);
        this.state = {
            selectedTab:this.props.selectedTab,
        };
      }

    render(){
        return(
          <View style={{flex:1}}>
            <TabNavigator>
                <TabNavigator.Item
                    title="学习"
                    selected={this.state.selectedTab==='study'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={()=><Image source={{uri:'http://163.177.128.179:39241/5193f4681ed5e446a08f65dc91b0d4db'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={()=><Image source={{uri:'http://163.177.128.179:39241/3f9e10809f8fe41fe5975afae0f10767'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab:'study'})}>
                        <Study {...this.props}/>
                </TabNavigator.Item>
                <TabNavigator.Item
                    title="我"
                    selected={this.state.selectedTab==='mine'}
                    selectedTitleStyle={styles.selectedTextStyle}
                    titleStyle={styles.textStyle}
                    renderIcon={()=><Image source={{uri:'http://163.177.128.179:39241/8bddf6c46507333e4aa26f6b0179a4e1'}} style={styles.iconStyle}/>}
                    renderSelectedIcon={()=><Image source={{uri:'http://163.177.128.179:39241/ec9a244c06e125715102819980fcd282'}} style={styles.iconStyle}/>}
                    onPress={()=>this.setState({selectedTab:'mine'})}>
                    <Mine {...this.props}/>
                </TabNavigator.Item>
            </TabNavigator>
          </View>
        )
    }
}
const styles=StyleSheet.create({
    selectedTextStyle:{
        color:'black'
    },
    textStyle:{
        color:'#999'
    },
    iconStyle:{
        width:20,
        height:20
    }
})
export default AppMain;
