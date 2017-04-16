import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  Dimensions,
  Image,
  PixelRatio,
  ScrollView,
  ListView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import styleUtil from  '../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import ViewPager from 'react-native-viewpager';
import ImageButton from './Component/ImageButton';
import AnnounceDetail from './AnnounceDetail';
import KnowledgeDetail from './Basic/Detail/KnowledgeDetail';
import ZiXun from './ZiXun/ZiXun';
import One from './Basic/One';
import Two from './Basic/Two';
import Three from './Basic/Three';
import Four from './Basic/Four';
import Five from './Basic/Five';
import Six from './Basic/Six';
import Seven from './Basic/Seven';
import Eight from './Basic/Eight';
import Ninght from './Basic/Ninght';
import Ten from './Basic/Ten';
import Eleven from './Basic/Eleven';
const DEVICE_WIDTH = Dimensions.get( 'window' ).width;
const DEVICE_HEIGHT = Dimensions.get( 'window' ).height;
import CustomBulletinBoard from './VerticalViewPager/CustomBulletinBoard';
// import ApiConst from '../../../Base/Urls/ApiConst';
/**
 * 请求的model
 */
import StudyModel from './StudyModel/StudyModel'

export default class Study extends Component {
  imageArr = [
    'http://163.177.128.179:39241/a818a6784f12ae1c3c6e617c60f0c9cc',
    'http://163.177.128.179:39241/80541d80a3a5766b4117b7553195e5c5',
    'http://163.177.128.179:39241/52b78d58265797bfab8773c12d1767a1'
  ];

  constructor( props ) {
    super( props );
    // 用于构建DataSource对象
    var ds = new ViewPager.DataSource( {
      pageHasChanged: ( p1, p2 ) => p1 !== p2,
    } );


    this.state = {
      viewpageDataSource: ds,
      infos:[],
      SearchColumndata:[]
    };
  }

  componentDidMount(){
    this.getSearchColumn();
    this.getInfoList();
  }

  getInfoList() {
    var params = {
      classid: 'be68990e-6985-4b7e-9620-6d9c31c9e683',
      page:'1',
      num:'3'
    };
    StudyModel.getInfoList(params,(res)=>{
        this.setState({infos: res.infos})
    },(err)=>{

    });
  }

  renderInfoList(){
    var data = [];
    for (var i = 0; i < this.state.infos.length; i++) {
      var item = this.state.infos[i];
      var date = new Date(1398250549490);
      Y = date.getFullYear() + '-';
      M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
      D = date.getDate() + ' ';
      h = date.getHours() + ':';
      m = date.getMinutes() + ':';
      s = date.getSeconds();
      data.push(
        <TouchableOpacity key={i}
          style={{flexDirection:'row',flex:1,backgroundColor:'#fff',padding:15,borderBottomWidth:1/PixelRatio.get(),borderBottomColor:'#efefef',alignItems:'center'}}
          onPress={()=>{
                    this.props.navigator.push({
                        component:AnnounceDetail
                    })
                }}>
          <Image style={{width:50,height:50}}
                 source={{uri:item.adpicture}}/>
          <View style={{flex:1,marginLeft:10}}>
            <View style={{}}>
              <Text style={{fontSize:14,color:'#333333',textAlign:'left'}} numberOfLines={1}>{item.title}</Text>
              <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
                  <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5,flex:1}}
                        numberOfLines={1}>{item.adcontent}</Text>
                </View>
                <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5}}>{Y+M+D}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      )
    }
    return data;
  }

  getSearchColumn() {
    var params = {
      bclassid: 'cbe62fbf-09b7-4b61-ad23-a9c1dffc1414',
      nowPage:'1',
      pageSize:'1000'
    };
    StudyModel.getSearchColumn(params,(res)=>{
        // console.log(res)
        this.setState({SearchColumndata:res.infos})
    },(err)=>{

    });
  }

  _renderPage22( data, pageID ) {
    return (
      <TouchableOpacity
        style={{flexDirection:'row',backgroundColor:'#fff',padding:15,borderBottomWidth:1/PixelRatio.get(),borderBottomColor:'#efefef',alignItems:'center'}}
        onPress={()=>{
                    this.props.navigator.push({
                        component:AnnounceDetail
                    })
                }}>
        <Image style={{width:50,height:50}}
               source={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2528812214,2991140252&fm=80&w=179&h=119&img.GIF'}}/>
        <View style={{flexDirection:'row',flex:1,alignItems:'center',marginLeft:10}}>
          <View style={{alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontSize:14,color:'#333333'}} numberOfLines={1}>{'习近平主持政治局会议六中全会召开'}</Text>
            <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
              <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
                <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5,flex:1}}
                      numberOfLines={1}>{'公平简介介绍，文字好多,公平简介介绍，文字好多,公平简介介绍，文字好多,公平简介介绍，文字好多'}</Text>
              </View>
              <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5,flex:1}}>{'2017-03-15'}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  renderPage( data, pageID ) {
    return (
      <Image
        key={'page' + pageID}
        source={{uri: this.imageArr[pageID]}}
        style={{width: DEVICE_WIDTH, height: DEVICE_WIDTH / 2.27}}
        resizeMode={'stretch'}/>
    )
  }

  renderItem(){
    var items = [];
    var data = this.state.SearchColumndata;
    for (var i = 0; i < data.length; i++) {
      var classid = data[i].classid;

      items.push(
        <TouchableOpacity key={i} onPress={() => {
          console.log(1);
          this.props.navigator.push({
            component:One,
            params:{
              classid: classid
            }
          })
        }}>
          <ImageButton
            source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
            // source={''ApiConst.Versions().ImageBaseUrl' + 'ApiInterface.GetInfoList' + 'data[i].classimg''}
            Txt={data[i].bname}
            classid={classid}
            navigator={this.props.navigator}
            />
        </TouchableOpacity>

      )
    }
    return items;
  }

  render() {
    var navTintColor = styleUtil.getNavTintColor();
    var titleTintColor = styleUtil.getTitleTintColor();
    var titleConfig = {
      title: '学习',
      tintColor: titleTintColor
    };
    return (
      <View style={{backgroundColor:'white',flex:1}}>
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          backgroundColor={navTintColor}/>
        <NavigationBar tintColor={navTintColor}
                       title={titleConfig}
        />

        <ScrollView>
          <View style={{width: DEVICE_WIDTH, height: DEVICE_WIDTH / 2.27}}>
            <ViewPager
              dataSource={this.state.viewpageDataSource.cloneWithPages(this.imageArr)}
              renderPage={(data, pageID) => this.renderPage(data, pageID)}
              isLoop={true}
              autoPlay={true}/>
          </View>
          <View style={{width:DEVICE_WIDTH,height:10,backgroundColor:'#efefef'}}/>
          <Text style={{fontSize:14,color:'black',paddingVertical:10,marginLeft:10}}>快捷菜单</Text>
          <View style={{width:DEVICE_WIDTH,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
            {this.renderItem()}
            {/* <ImageButton
              source={'http://163.177.128.179:39241/5bf263751b4bcad9ece23090deeb2fee'}
              Txt="医学基础"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:One
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/1cfc48d1f2cee5043970e98deca426f1'}
              Txt="药店入门"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Two
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/5b6b6ccc4a39650ded80331e47cd23d6'}
              Txt="中医基础"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Three
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/393c9f2191f937fa81880635f5da5965'}
              Txt="药理常识"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Four
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/63dcb98af594324119dc4c139601296c'}
              Txt="西药"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Five
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/c91e18b1524a076d2741946e9ca59095'}
              Txt="中药"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Six
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/b0836e1ca6cdd6da5fc90978736c91da'}
              Txt="中成药"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Seven
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/2784bde373f86a74f8a2642b24be1528'}
              Txt="健康食品"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Eight
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/2df87b3ffb0bde73475bd0791728c391'}
              Txt="健康器材"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Ninght
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/39660fd67fc8574f9ad86cceb075c0eb'}
              Txt="疾病分类"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Ten
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/cd071a1842aecc3f8200367730cb26b5'}
              Txt="服药禁忌"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:Eleven
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/9806f201f503b56259d3d28ebd41ae32'}
              Txt="化验参考"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/fa4547e7063aefe3dc2c6a47113a595b'}
              Txt="剂量折算"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/8ff9d5fbbac6d4c67da3239440a8c233'}
              Txt="拉丁对照"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/4ef23feb0049068a528d56e4b2e59e49'}
              Txt="医学心理"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/57fe8d1a0d78fa39644243d2d58eacf8'}
              Txt="营养"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:KnowledgeDetail
                                        })
                                }}/> */}
          </View>
          <View style={{width:DEVICE_WIDTH,height:10,backgroundColor:'#efefef'}}/>
          <Text style={{fontSize:14,color:'black',paddingVertical:10,marginLeft:10}}>药圈</Text>
          <View style={{width:DEVICE_WIDTH,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
          <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start'}}>
            <ImageButton
              source={'http://163.177.128.179:39241/4b8a2a3b1ec44cc0705d445666042688'}
              Txt="资讯"
              onPress={() => {
                                    this.props.navigator.push({
                                        component:ZiXun
                                    })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/43d28bfb7d8c1013e57982a1e9da95c8'}
              Txt="视频"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:ZiXun
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/597b648fa432b4c4b7bc855bcb166546'}
              Txt="日志"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:ZiXun
                                        })
                                }}/>
            <ImageButton
              source={'http://163.177.128.179:39241/59430fe34f2f88cfebe6119d1d38f66c'}
              Txt="达人"
              onPress={() => {
                                        this.props.navigator.push({
                                            component:ZiXun
                                         })
                                }}/>
          </View>
          <View style={{width:DEVICE_WIDTH,height:1/PixelRatio.get(),backgroundColor:'#efefef'}}/>
          {/* 垂直轮播  */}
          <View  overflow={ 'hidden'}>
              {/* <CustomBulletinBoard
                  {...this.props}
                  {...this.state.infoObj}
                  style={{height:210}}

              /> */}
              {this.renderInfoList()}

          </View>
        </ScrollView>
      </View>
    )
  }

}
