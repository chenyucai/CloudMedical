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
export default class Six extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '中药',
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
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="基础"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
                      Txt="解表药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="清热药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/b0836e1ca6cdd6da5fc90978736c91da'}
                      Txt="泻下药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2784bde373f86a74f8a2642b24be1528'}
                      Txt="利水渗湿药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="化湿药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="祛风湿药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="理气药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5b6b6ccc4a39650ded80331e47cd23d6'}
                      Txt="温里药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="活血化瘀药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
                      Txt="止血药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="消食药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/b0836e1ca6cdd6da5fc90978736c91da'}
                      Txt="驱虫药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="止咳平喘药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
                      Txt="开窍药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="平肝熄火药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2784bde373f86a74f8a2642b24be1528'}
                      Txt="安神药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="补虚药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2784bde373f86a74f8a2642b24be1528'}
                      Txt="收涩药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="涌吐药"
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
