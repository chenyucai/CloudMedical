import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    StatusBar,
    InteractionManager,
    TouchableOpacity,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window')

import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';

import MyCollectionItem from './Component/MyCollectionItem';

import ScrollableTabView, {DefaultTabBar,ScrollableTabBar} from 'react-native-scrollable-tab-view'

import CollectionDetail from './CollectionDetail';
/**
 * 请求的model
 */
import MineModel from '../MineModel/MineModel'


export default class MyCollection extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'])
        };
    }

    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: '我的收藏',
            tintColor: titleTintColor
        };
      const leftbutton = (
        <TouchableOpacity onPress={() => {
          this.props.navigator.pop()
        }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
                <Image style={{ width: 20, height: 20 }}
                       source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }}/>
            </View>
        </TouchableOpacity>);
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar
                    tintColor={navTintColor}
                    title={titleConfig}
                    leftButton={leftbutton}
                />
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar />}
                    underlineStyle = 'red'
                    tabBarUnderlineColor='red'
                    tabBarBackgroundColor='white'
                    tabBarActiveTextColor='red'
                    tabBarInactiveTextColor='gray'
                    tabBarTextStyle={{fontSize: 16}}
                >
                    <MyCollectionItem tabLabel='全部' {...this.props}/>
                    <MyCollectionItem tabLabel='心脑血管' {...this.props} ecentertype={'8da9c1aa-2981-4a8d-a5ba-044ab9d4a9b4'}/>
                    <MyCollectionItem tabLabel='内分泌' {...this.props} ecentertype={'867f80f1-2813-48cd-b8a5-1cba9fc04b1c'}/>
                    <MyCollectionItem tabLabel='消化系统' {...this.props} ecentertype={'d92fbbc6-b9a8-4984-9ecf-a9cb8dad24ac'}/>
                    <MyCollectionItem tabLabel='呼吸系统' {...this.props} ecentertype={'1d927eea-cffe-4fe0-97dd-d14f297278c1'}/>
                    <MyCollectionItem tabLabel='其他系统' {...this.props} ecentertype={'541b8721-0506-4a39-abb2-4f4bfc9a59f3'}/>
                    <MyCollectionItem tabLabel='医学知识' {...this.props}/>
                </ScrollableTabView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowViewStyle: {
        borderTopColor: '#e8e8e8',
        borderTopWidth: 1,
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        height: 40,
        paddingLeft: 20,
        backgroundColor:'white'

    },
})
