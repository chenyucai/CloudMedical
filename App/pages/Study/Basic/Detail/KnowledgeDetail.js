import React, { Component } from 'react';
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
import styleUtil from '../../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import ImageButton from '../../Component/ImageButton';
import ApiConst from '../../../../Base/Urls/ApiConst';
/**
 * 请求的model
 */
import StudyModel from '../../StudyModel/StudyModel'
const GOBAL_WIDTH = Dimensions.get('window').width;
export default class KnowledgeDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title: '',
            engname: "",
            pathogenesis: '',
            department: '',
            img: '',
            kcontent: ''
        };
    }

    getListDetialColumn() {
        var id = this.props.id;
        var classid = this.props.classid
        console.log(classid);
        var params = {
            id: id,
            classid: classid,
        };
        StudyModel.getListDetialColumn(params, (res) => {
           // alert(JSON.stringify(res.infos[0]))
            this.setState({
                title: res.infos[0].title,
                engname: res.infos[0].engname,
                pathogenesis: res.infos[0].pathogenesis,
                department: res.infos[0].department,
                img: ApiConst.Versions().ImageBaseUrl +res.infos[0].kpicture.replace(",", ''),
                kcontent: res.infos[0].kcontent
            })
        }, (err) => {
        });
    }

    componentDidMount() {
        this.getListDetialColumn();
    }

    
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            // title: '知识详情',
            title: this.props.title,
            tintColor: titleTintColor
        };
        var leftbutton = (
            <TouchableOpacity onPress={() => {
                this.props.navigator.pop()
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }} />
                </View>
            </TouchableOpacity>);
        return (
            <View style={{ flex: 1, backgroundColor: '#fff' }}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor} />
                <NavigationBar tintColor={navTintColor}
                    title={titleConfig}
                    leftButton={leftbutton}
                />
                <ScrollView>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 16, color: '#222', marginTop: 20 }}>
                            {this.state.title}
                        </Text>
                    </View>
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60,color:'#333' }}>
                            {'英文名称:'}
                        </Text>
                        <Text style={{ marginLeft: 10, flex: 1, fontSize: 14 }}>
                            {this.state.engname}
                        </Text>
                    </View>
                    
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60 ,color:'#333'}}>
                            {'常见病因:'}
                        </Text>
                        <Text style={{ marginLeft: 10, flex: 1, fontSize: 14 }}>
                            {this.state.pathogenesis}
                        </Text>
                    </View>
                    
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60,color:'#333' }}>
                            {'就诊科室:'}
                        </Text>
                        <Text style={{ marginLeft: 10, flex: 1, fontSize: 14 }}>
                            {this.state.department}
                        </Text>
                    </View>
                    
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60 ,color:'#333'}}>
                            {'传染性:'}
                        </Text>
                        <Text style={{ marginLeft: 10, flex: 1, fontSize: 14 }}>
                            {this.state.infectivity}
                        </Text>
                    </View>
                    
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 60, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60,color:'#333' }}>
                            {'图片:'}
                        </Text>
                        <Image source={{uri:this.state.img}} style={{ minHeight: 60,width:60, resizeMode: 'cover' }} />
                    </View>     
                    <View
                        style={{ flexDirection: 'row', alignItems: 'center', minHeight: 40, paddingHorizontal: 20 }}>
                        <Text style={{ fontSize: 14, minWidth: 60 ,color:'#333'}}>{'介绍：'}  <Text style={{ marginLeft: 15, flex: 1, fontSize: 14,color:'#777' }}>
                            {this.state.kcontent}
                        </Text></Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
