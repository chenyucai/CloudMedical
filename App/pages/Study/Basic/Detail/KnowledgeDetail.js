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
import ImageButton from '../../Component/ImageButton';
import ApiConst from '../../../../Base/Urls/ApiConst';
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
          ListDetialdata: []
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
      StudyModel.getListDetialColumn(params,(res)=>{
          // console.log(res)
          this.setState({ListDetialdata:res.infos[0]})
      },(err)=>{

      });
    }

    componentDidMount(){
      this.getListDetialColumn();
    }

    renderDetail(){
      var rs = this.state.ListDetialdata;
      console.log(rs);
      var img = [];
      if (rs.icon) {
        var imgicon = rs.kpicture.split(",");
      }else{
        var imgicon = [];
      }
      for (var i = 0; i < imgicon.length; i++) {
        img.push(
          <ImageButton style={{width: 20,height: 20}} key={i}
              source={ApiConst.Versions().ImageBaseUrl+imgicon[i]}
            />
        )
      }
      return(
        <View>
          <View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:16,color:'#333333',marginTop:20}}>
                {rs.title}
              </Text>
          </View>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              英文名称:
              <Text style={{fontSize:14,color:'#888888'}}>{rs.engname}</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              常见病因:
              <Text style={{fontSize:14,color:'#888888'}}>{rs.pathogenesis}</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              就诊科室:
              <Text style={{fontSize:14,color:'#888888'}}>{rs.department}</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              传染性:
              <Text style={{fontSize:14,color:'#888888'}}>{rs.infectivity}</Text>
          </Text>
          <Text style={{fontSize:14,color:'#333333',marginLeft:10,marginTop:10}}>
              <Text>图片:</Text>
              <Text style={{fontSize:14,color:'#888888'}}>{img}</Text>
          </Text>
          <View style={{padding: 10}}>
              <Text>
                  <Text style={{fontSize:14,color:'#333333'}}>介绍:</Text>
                  {rs.kcontent}
              </Text>
          </View>
        </View>
      )
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            // title: '知识详情',
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
