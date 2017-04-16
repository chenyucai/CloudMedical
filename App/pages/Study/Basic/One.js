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
/**
 * 请求的model
 */
import StudyModel from '../StudyModel/StudyModel'
export default class One extends Component {
    constructor(props) {
        super(props);
        this.state = {
          Listdata: [],
          SearchColumndata: []
        };
    }

    // getInfoList() {
    //   var classid = this.props.classid
    //   console.log(classid);
    //   var params = {
    //     classid: classid,
    //     page:'1',
    //     num:'3'
    //   };
    //   StudyModel.getInfoList(params,(res)=>{
    //       // console.log(res)
    //       this.setState({Listdata:res.infos})
    //   },(err)=>{
    //
    //   });
    // }

    getSearchColumn() {
      var bclassid = this.props.classid
      console.log(bclassid);
      var params = {
        bclassid: bclassid,
        // nowPage:'1',
        // pageSize:'1000'
      };
      StudyModel.getSearchColumn(params,(res)=>{
          // console.log(res)
          this.setState({SearchColumndata:res.infos})
      },(err)=>{

      });
    }

    componentDidMount(){
      this.getSearchColumn();
      // this.getInfoList();
    }

    renderItem() {
      var items = [];
      var data = this.state.SearchColumndata;
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        <ImageButton
            source={'http://163.177.128.179:39241/59430fe34f2f88cfebe6119d1d38f66c'}
            Txt={data[i].bname}
            onPress={() => {
            this.props.navigator.push({
                id: this.state.SearchColumndata[i].id,
                classid: this.state.SearchColumndata[i].classid
            })
          }}/>
      }
      return items;
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '医疗基础',
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
                    {this.renderItem()}
                    {/* <ImageButton
                        source={'http://163.177.128.179:39241/59430fe34f2f88cfebe6119d1d38f66c'}
                        Txt="解剖基础"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/7961b05a2d7a0f57a9e971fe577d060f'}
                        Txt="生理基础"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/4ef23feb0049068a528d56e4b2e59e49'}
                        Txt="体格检查"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/9806f201f503b56259d3d28ebd41ae32' +
                        ''}
                        Txt="常见症状"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/> */}
                </View>

            </View>
        )
    }
}
