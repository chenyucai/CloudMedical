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
export default class Five extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '西药',
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
                <ScrollView>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="抗微生物药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="抗寄生虫药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/597b648fa432b4c4b7bc855bcb166546'}
                      Txt="解热镇痛抗风湿与抗痛风药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="镇痛药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/59430fe34f2f88cfebe6119d1d38f66c'}
                      Txt="神经系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="心脑血管系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="泌尿系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="呼吸系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="消化系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="血液系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="内分泌系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="妇产科用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="免疫系统用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/59430fe34f2f88cfebe6119d1d38f66c'}
                      Txt="抗过敏药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="维生素微量元素用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="水、电解质及酸碱平衡用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="酶类与生化制剂"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="生物制品"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="皮肤科用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="眼科用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
                      Txt="口腔科用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
                      Txt="耳鼻喉用药"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>

                </View>
                </ScrollView>
            </View>
        )
    }
}
