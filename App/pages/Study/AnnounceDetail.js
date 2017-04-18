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
import styleUtil from  '../../utils/styleutil';
import NavigationBar from 'react-native-navbar';

import StudyModel from './StudyModel/StudyModel';
import ApiConst from '../../Base/Urls/ApiConst';

let GOBAL_WIDTH=Dimensions.get('window').width;
export default class AnnounceDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            title:'',
            newsbrief:'',
            npicture:'',
            ncontent:''
        };
    }

    componentDidMount(){
      this.getDetail();
    }

    getDetail(){
      var params = {
        classid: this.props.classid,
        id:this.props.id
      };
      StudyModel.getNewsDetail(params,(res)=>{
       //alert(JSON.stringify(res.infos[0]))
        this.setState({
          ...rs
        })
      },(err)=>{

      });
    }


    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '公告详情',
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
                    <View style={{width: GOBAL_WIDTH, height: 50, justifyContent: 'space-around'}}>
                        <View style={{width: GOBAL_WIDTH, alignItems: 'center'}}>
                            <Text>{this.state.title}</Text>
                        </View>
                        <View style={{justifyContent: 'center', alignItems: 'center', width: GOBAL_WIDTH,}}>
                            <Text>{this.state.newsbrief}</Text>
                        </View>
                    </View>
                    <View style={{width:GOBAL_WIDTH,height:1,backgroundColor:'#efefef',marginTop:10}}/>
                    <Image
                        source={{uri: ApiConst.Versions().ImageBaseUrl + this.state.npicture}}
                        style={{
                                width: GOBAL_WIDTH -40,
                                height: (GOBAL_WIDTH -40)/2,
                                marginLeft: 20,
                                marginTop: 8,
                            }}
                    />
                    <View style={{padding: 10}}>
                        <Text>
                            {this.state.ncontent}
                        </Text>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
