import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    ListView,
    StatusBar,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import styleUtil from  '../../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
const GOBAL_WIDTH=Dimensions.get('window').width;
export default class KnowledgeDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '知识详情',
            tintColor: titleTintColor
        };
        var leftbutton=(
            <TouchableOpacity onPress={()=>{
                this.props.navigator.pop()
            }}>
                <View style={{justifyContent:'center',alignItems:'center',marginLeft: 10,flex: 1}}>
                    <Image style={{width:25,height:25}} source={{uri:'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f'}}/>
                </View>
            </TouchableOpacity>);
        return (
            <View style={{flex: 1, backgroundColor: '#fff'}}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar tintColor={navTintColor}
                               title={titleConfig}
                               leftButton={leftbutton}
                />
                <ScrollView>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:16,color:'#333333',marginTop:20}}>高血压</Text>
                    </View>
                    <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
                        英文名称:
                        <Text style={{fontSize:14,color:'#888888'}}>hypertension</Text>
                    </Text>
                    <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
                        常见病因:
                        <Text style={{fontSize:14,color:'#888888'}}>遗传、环境、年龄、肥胖等</Text>
                    </Text>
                    <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
                        就诊科室:
                        <Text style={{fontSize:14,color:'#888888'}}>内科、心血管内科</Text>
                    </Text>
                    <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
                        传染性:
                        <Text style={{fontSize:14,color:'#888888'}}>无</Text>
                    </Text>
                    <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
                        图片:
                        <Text style={{fontSize:14,color:'#888888'}}>无</Text>
                    </Text>
                    <View style={{padding: 10}}>
                        <Text>
                            <Text style={{fontSize:14,color:'#333333'}}>介绍:</Text>
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                            2015年中国造纸行业市场发展状态分析
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
