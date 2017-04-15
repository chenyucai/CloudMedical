import React, {Component} from 'react';
import {
    View,
    Text,
    StatusBar,
    Dimensions,
    Image,
    PixelRatio,
    ScrollView,
    ListView,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import ImageButton from './Component/ImageButton';
import BuZhangXuanZe from './BuZhangXuanZe';
import LianSuoDianXuanZe from './LianSuoDianXuanZe';
import YiShengXuanZe from './YiShengXuanZe';
import GuKeXuanZe from './GuKeXuanZe';
export default class IdentitysSelect extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '身份选择',
            tintColor: titleTintColor
        };
        return (
            <View style={{backgroundColor:'#efefef',flex:1}}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar tintColor={navTintColor}
                               title={titleConfig}
                />
                 <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <ImageButton
                        source={'http://163.177.128.179:39241/c64101c887488f12acc349478322439a'}
                        Txt="步长系统"
                        onPress={() => {
                                this.props.navigator.replace({
                                    component:BuZhangXuanZe
                                });
                            }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/31dce326b6122a763980ea29e05b66e4'}
                        marginLeft={1}
                        Txt="连锁药店"
                        onPress={() => {
                                this.props.navigator.replace({
                                    component:LianSuoDianXuanZe
                                });
                            }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/bdbaf00f1615310830c24d7bacebf3ea'}
                        marginLeft={1}
                        Txt="健康达人"
                        onPress={() => {
                                this.props.navigator.replace({
                                    component:GuKeXuanZe
                                });
                            }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/8aa102fdf974e016354c64254421089a'}
                        Txt="医生"
                        marginLeft={1}
                        onPress={() => {
                                this.props.navigator.replace({
                                    component:YiShengXuanZe
                                });
                            }}/>
                </View>
            </View>
        )
    }
}