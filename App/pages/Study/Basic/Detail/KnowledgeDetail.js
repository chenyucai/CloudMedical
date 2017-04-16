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
import styleUtil from  '../../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
/**
 * 请求的model
 */
import StudyModel from '../../StudyModel/StudyModel'
const GOBAL_WIDTH=Dimensions.get('window').width;
export default class KnowledgeDetail extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
          ListDetialdata: {}
        };
    }

    getListDetialColumn() {
      var id = this.props.id;
      var classid = this.props.classid
      var params = {
        id: id,
        classid: classid,
      };
      StudyModel.getListDetialColumn(params,(res)=>{
          // console.log(res)
          this.setState({ListDetialdata:res.infos})
      },(err)=>{

      });
    }

    componentDidMount(){
      this.getListDetialColumn();
    }

    renderDetail(){
      var rs = this.state.ListDetialdata;
      return(
        <View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:16,color:'#333333',marginTop:20}}>
                {rs.title}
              </Text>
          </View>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              英文名称:
              <Text style={{fontSize:14,color:'#888888'}}>hypertension</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              常见病因:
              <Text style={{fontSize:14,color:'#888888'}}>遗传、环境、年龄、肥胖等</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              就诊科室:
              <Text style={{fontSize:14,color:'#888888'}}>内科、心血管内科</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              传染性:
              <Text style={{fontSize:14,color:'#888888'}}>无</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              图片:
              <Text style={{fontSize:14,color:'#888888'}}>无</Text>
          </Text>
          <View style={{padding: 10}}>
              <Text>
                  <Text style={{fontSize:14,color:'#333333'}}>介绍:</Text>
                  {/* {{this.state.ListDetialdata.content}} */}
              </Text>
          </View>
        </View>
      )
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '知识详情',
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
                    {this.renderDetail()}
                </ScrollView>
            </View>
        )
    }
}
