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
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import StudyModel from '../StudyModel/StudyModel';
import ApiConst from '../../../Base/Urls/ApiConst';
let GOBAL_WIDTH=Dimensions.get('window').width;
export default class KnowledgeDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title:'',
            time:'',
            image:'',
            content:'',
        };
    }

    componentDidMount() {
       
    }

    times(tim){
        let date = new Date(tim*1000);
        let year = date.getFullYear();
        let month = date.getMonth()+1;
        let day = date.getDate();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let shijian = year+"-"+month+"-"+day+" "+hours+":"+minutes;
        return shijian;
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
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
                               title={'新闻详情'}
                               leftButton={leftbutton}
                />
                <ScrollView>
                    <View style={{width:GOBAL_WIDTH,height:180,justifyContent:'center',alignItems:'center',marginTop:20
                }}>
                        <Text style={{marginTop:6,marginBottom:18,color:'#333333'}}>{'标题:'+this.props.row.title}</Text>
                        <Text style={{marginTop:6,marginBottom:14}}>{this.times(this.props.row.newstime)}</Text>
                        <Image
                            source={{uri:ApiConst.Versions().ImageBaseUrl + this.props.row.npicture.replace(',', '')}}
                            style={{width:GOBAL_WIDTH*0.9,height:120}}
                        />
                    </View>
                    <View style={{width:GOBAL_WIDTH*0.9,marginLeft:GOBAL_WIDTH*0.05,
                marginTop:20}}>
                        <Text >{this.props.row.ncontent}</Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
