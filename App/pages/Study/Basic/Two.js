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
    TouchableOpacity
} from 'react-native';
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import ImageButton from '../Component/ImageButton';
import KnowledgeDetail from './Detail/KnowledgeDetail';
export default class Two extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '药店入门',
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
            <View style={{backgroundColor:'white',flex:1}}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar tintColor={navTintColor}
                               title={titleConfig}
                               leftButton={leftbutton}
                />
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <ImageButton
                        source={'http://163.177.128.179:39241/5b6b6ccc4a39650ded80331e47cd23d6'}
                        Txt="法律法规"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="陈列方法"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
                      Txt="存放原则"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="其他技巧"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                </View>

            </View>
        )
    }
}
