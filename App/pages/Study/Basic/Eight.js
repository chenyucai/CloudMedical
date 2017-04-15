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
export default class Eight extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '健康食品',
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
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="蛋白质"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/1cfc48d1f2cee5043970e98deca426f1'}
                      Txt="糖类"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
                      Txt="不饱和脂肪酸"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
                      Txt="矿物质"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
                      Txt="维生素"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/1cfc48d1f2cee5043970e98deca426f1'}
                      Txt="膳食纤维"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                      source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
                      Txt="植物提取素"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                </View>
                <View style={{width:Dimensions.get('window').width,height:10,backgroundColor:'#efefef'}}/>
                <Text style={{fontSize:16,color:'#333333',marginTop:10,marginLeft:30,marginBottom:10,fontWeight:'bold'}}>热点</Text>
                <View style={{width:Dimensions.get('window').width,height:1,backgroundColor:'#efefef'}}/>
                    <Text style={{fontSize:16,color:'#333333',marginTop:10,marginLeft:10,marginBottom:10}}>1:蛋白质</Text>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10,marginTop:5,marginBottom:10}} numberOfLines={2}>
                        {"       "}蛋白质是生命的基础物质，美哦与蛋白质就没有生命，因此它是...
                    </Text>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                <Text style={{fontSize:16,color:'#333333',marginTop:10,marginLeft:10,marginBottom:10}}>2:糖类</Text>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                <Text style={{fontSize:14,color:'#888888',marginLeft:10,marginTop:5,marginBottom:10}} numberOfLines={2}>
                    {"       "}糖类是自然界存在最多，分布最广的一类中药的有机化合物。主要由碳...
                </Text>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                <Text style={{fontSize:16,color:'#333333',marginTop:10,marginLeft:10,marginBottom:10}}>1:不饱和最防酸</Text>
                <View style={{width:Dimensions.get('window').width,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
                <Text style={{fontSize:14,color:'#888888',marginLeft:10,marginTop:5,marginBottom:10}} numberOfLines={2}>
                    {"       "}糖类是自然界存在最多，分布最广的一类中药的有机化合物。主要由碳...
                </Text>
            </View>
        )
    }
}
