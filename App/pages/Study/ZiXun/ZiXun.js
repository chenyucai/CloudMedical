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
import AnnounceDetail from '../AnnounceDetail';
import StudyModel from '../StudyModel/StudyModel';
import FormatUtil from '../../../utils/FormatUtil'

export default class ZiXun extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource1: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            })
        };
    }

    componentDidMount() {
        // let Info = [];
        // for (var i = 0; i < 10; i++) {
        //     Info.push({
        //         title: '习近平主持政治局会议六中全会召开',
        //         name: '习近平主席',
        //         date: '2017-03-15'
        //     })
        // }
        // this.setState({
        //     dataSource1: this.state.dataSource1.cloneWithRows(Info)
        // })

      this.getNewsList();
    }

    getNewsList(){
      var params = {
        classid: this.props.classid,
        page:'1',
        num:'1000'
      };
      StudyModel.getNewsList(params,(res)=>{
          // console.log(res)
          this.setState({dataSource1:this.state.dataSource1.cloneWithRows(res.infos)})
      },(err)=>{

      });
    }

    renderRow(rowData) {
        return (
            <TouchableOpacity
                style={{padding:10,justifyContent:'center',borderBottomColor:'#efefef',borderBottomWidth:1/PixelRatio.get()}}
                            onPress={()=>{
                                this.props.navigator.push({
                                  name: 'AnnounceDetail',
                                  component:AnnounceDetail,
                                  params:{
                                    classid:rowData.classid,
                                    id:rowData.id
                                  }

                                })
                              }}>
                <Text style={{fontSize:16,color:'#333333'}}>{rowData.title}</Text>
                <View style={{flexDirection:'row',alignItems:'center',marginTop:10}}>
                    <Text style={{fontSize:14,color:'#888888'}}>{rowData.username} {FormatUtil.format(rowData.newstime)}</Text>
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            // title: '资讯',
            title: this.props.title,
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
                <ListView
                    dataSource={this.state.dataSource1}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        )
    }
}
