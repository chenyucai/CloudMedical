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

import styleUtil from '../../utils/styleutil';
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
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
import CustomBulletinBoard from './VerticalViewPager/CustomBulletinBoard';
import ApiConst from '../../Base/Urls/ApiConst';
/**
 * 请求的model
 */
import StudyModel from './StudyModel/StudyModel';
import NewsDetail from './ZiXun/NewsDetail';
export default class Study extends Component {
 datasorce=new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }).cloneWithRows([])
  constructor(props) {
    super(props);
    // 用于构建DataSource对象
    var ds = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    this.state = {
      dataSource1: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }).cloneWithRows([]),
      dataSource2: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }).cloneWithRows([]),
      dataSource3: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 != r2
      }).cloneWithRows([]),
      viewpageDataSource: ds,
      infos: [],
      SearchColumndata: [],
      medicineMenu: []
    };
  }

  componentDidMount() {
    this.getInfoList();
  }
  //获取广告
  getInfoList() {
    var params = {
      classid: 'be68990e-6985-4b7e-9620-6d9c31c9e683',
      page: '1',
      num: '10'
    };
    StudyModel.getInfoList(params, (res) => {
      this.setState({
        viewpageDataSource: this.state.viewpageDataSource.cloneWithPages([res.infos[0], res.infos[1], res.infos[2]]),
      })
      this.getSearchColumn();
    }, (err) => {

    });
  }
  getNews(){
    var params = {
      classid: '097a2dce-5fcd-4801-8d01-05a09972212c',
      page: '1',
      num: '10'
    };
    StudyModel.getListNews(params, (res) => {
      //alert(JSON.stringify(res))
      this.setState({
        dataSource3: this.datasorce.cloneWithRows(res.infos)
      })
      
    }, (err) => {

    });
  }
  //获取快捷菜单
  getSearchColumn() {
    var params = {
      bclassid: 'cbe62fbf-09b7-4b61-ad23-a9c1dffc1414',
      nowPage: '1',
      pageSize: '1000'
    };
    StudyModel.getSearchColumn(params, (res) => {
      // console.log(res)
       this.getMedicineMenu();
      this.setState({ dataSource1: this.datasorce.cloneWithRows(res.infos) })
    }, (err) => {

    });
  }
  //获取药圈
  getMedicineMenu() {
    var params = {
      bclassid: '097a2dce-5fcd-4801-8d01-05a09972212c',
      nowPage: '1',
      pageSize: '1000'
    };
    StudyModel.getMedicineMenu(params, (res) => {
      // console.log(res)
      this.setState({ dataSource2: this.datasorce.cloneWithRows(res.infos) })
      this.getNews()
    }, (err) => {

    });
  }


  format(day, type) {
    day = (new Date(day * 1000))
    let Year = day.getFullYear();
    let Month = day.getMonth() + 1;
    let Day = day.getDate();
    let H = day.getHours();
    let M = day.getMinutes()
    let date
    if (type == 1) {
      date = Year + '-' + (Month < 10 ? '0' + Month : Month) + '-' + (Day < 10 ? '0' + Day : Day) + ' ' + (H < 10 ? '0' + H : H) + ':' + (M < 10 ? '0' + M : M);
    } else if (type == 0) {
      date = Year + '-' + (Month < 10 ? '0' + Month : Month) + '-' + (Day < 10 ? '0' + Day : Day)
    } else {
      date = (H < 10 ? '0' + H : H) + ':' + (M < 10 ? '0' + M : M)
    }
    return date
  }
  //新闻 底部list
  renderItemList(data) {
    if(data==undefined){
      return (<View/>)
    }
    return (
      <TouchableOpacity style={{
        flexDirection: 'row',
        paddingVertical: 5,
        paddingRight: 10,
        width: DEVICE_WIDTH,
        alignItems: 'center',
        borderBottomColor: '#efefef',
        borderBottomWidth: 0.5
      }}
        onPress={() => {
          this.props.navigator.push({
            name: 'NewsDetail',
            component: NewsDetail,
            params: {
              row: data,}})
            }}>
        <Image style={{ width: 60, height: 60, borderRadius: 5, flex: 1 }} source={{ uri: ApiConst.Versions().ImageBaseUrl + data.npicture.replace(',', '') }} />
        <View style={{ justifyContent: 'center', marginLeft: 10, width: DEVICE_WIDTH - 90 }}>
          <Text style={{ fontSize: 14, marginTop: 5, color: '#333333', flex: 1 }} numberOfLines={1}>{data.title}</Text>
          <View style={{ flexDirection: 'row', flex: 2, alignItems: 'center', marginTop: 5, }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
              <Text style={{ fontSize: 12, color: '#7f7f7f', marginRight: 5, flex: 1.2 }}
                numberOfLines={1}>{data.newsbrief}</Text>
            </View>
            <Text style={{ fontSize: 12, color: '#7f7f7f', flex: 1 }} numberOfLines={1}>{this.format(data.newstime, 1)}</Text>
          </View>
        </View>
      </TouchableOpacity>
    )
  }

  //轮播
  renderPage(data, pageID) {
    if(data==undefined){
      return (<View/>)
    }
    return (
      <View key={'page' + pageID} style={{ width: DEVICE_WIDTH, height: DEVICE_WIDTH / 2.42 }}>
        <Image
          source={{ uri: ApiConst.Versions().ImageBaseUrl + data.adpicture.replace(',','') }}
          style={{ width: DEVICE_WIDTH, height: DEVICE_WIDTH / 2.42 }}
          resizeMode={'stretch'} />
        <View style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          height: 30,
          justifyContent: 'center',
          alignItems: 'center',
          width: DEVICE_WIDTH,
          backgroundColor: '#0004'
        }}>
          <Text style={{ color: '#fff', fontSize: 13 }}>{data.title}</Text>
        </View>
      </View>
    )
  }
  //快捷菜单
  go(classid, title) {
    this.props.navigator.push({
      name: 'One',
      component: One,
      params: {
        classid: classid,
        title: title
      }
    })
  }
  renderItem(rowData, sectionID, rowId) {
    return (
      <View key={rowId}>
        <ImageButton
          source={ApiConst.Versions().ImageBaseUrl + rowData.classimg}
          Txt={rowData.bname}
          onPress={this.go.bind(this, rowData.classid, rowData.bname)}
        />
      </View>
    );
  }
  //药圈
  goZixun(classid, title) {
    this.props.navigator.push({
      name: 'ZiXun',
      component: ZiXun,
      params: {
        classid: classid,
        title: title
      }
    })
  }
  renderItem_(rowData, sectionID, rowId) {
    return (
      <View key={rowId}>
        <ImageButton
          source={ApiConst.Versions().ImageBaseUrl + rowData.classimg}
          Txt={rowData.bname}
          onPress={this.goZixun.bind(this, rowData.classid, rowData.bname)}
        />
      </View>
    );
  }

  render() {
    var navTintColor = styleUtil.getNavTintColor();
    var titleTintColor = styleUtil.getTitleTintColor();
    var titleConfig = {
      title: '学习',
      tintColor: titleTintColor
    };
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <StatusBar
          barStyle={'light-content'}
          animated={true}
          backgroundColor={navTintColor} />
        <NavigationBar tintColor={navTintColor}
          title={titleConfig}
        />

        <ScrollView>
          <View style={{ width: DEVICE_WIDTH, height: DEVICE_WIDTH / 2.27 }}>
            <ViewPager
              dataSource={this.state.viewpageDataSource}
              renderPage={(data, pageID) => this.renderPage(data, pageID)}
              isLoop={true}
              autoPlay={true} />
          </View>
          <View style={{ width: DEVICE_WIDTH, height: 10, backgroundColor: '#efefef' }} />
          <Text style={{ fontSize: 14, color: 'black', paddingVertical: 10, marginLeft: 10 }}>快捷菜单</Text>
          <View style={{ width: DEVICE_WIDTH, height: 1 / PixelRatio.get(), backgroundColor: '#efefef' }} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            <ListView
              initialListSize={9}
              dataSource={this.state.dataSource1}
              renderRow={this.renderItem.bind(this)}
              contentContainerStyle={styles.listViewStyle}
              onEndReachedThreshold={60}
              enableEmptySections={true}
            />
            {/*{this.renderItem()}*/}
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
          <View style={{ width: DEVICE_WIDTH, height: 10, backgroundColor: '#efefef' }} />
          <Text style={{ fontSize: 14, color: 'black', paddingVertical: 10, marginLeft: 10 }}>药圈</Text>
          <View style={{ width: DEVICE_WIDTH, height: 1 / PixelRatio.get(), backgroundColor: '#efefef' }} />
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}overflow={'hidden'}>
            <ListView
              initialListSize={9}
              dataSource={this.state.dataSource2}
              renderRow={this.renderItem_.bind(this)}
              contentContainerStyle={styles.listViewStyle}
              onEndReachedThreshold={60}
              enableEmptySections={true}
            />
            {/*{this.renderMedicineMenu()}*/}
            {/* <ImageButton
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
                                }}/> */}
          </View>
          <View style={{ width: DEVICE_WIDTH, height: 1 / PixelRatio.get(), backgroundColor: '#efefef' }} />
          {/* 垂直轮播  */}
          <View style={{ marginHorizontal: 10, }} overflow={'hidden'}>

            {/* <CustomBulletinBoard
                  {...this.props}
                  {...this.state.infoObj}
                  style={{height:210}}

              /> */}
            <ListView
              initialListSize={9}
              dataSource={this.state.dataSource3}
              renderRow={this.renderItemList.bind(this)}
              contentContainerStyle={{ flex: 1 }}
              onEndReachedThreshold={60}
              enableEmptySections={true}
            />
          </View>
        </ScrollView>
      </View>
    )
  }

}
let styles = StyleSheet.create({
  listViewStyle: {
    // 主轴方向
    flexDirection: 'row',
    // 一行显示不下,换一行
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    alignItems: 'center', // 必须设置,否则换行不起作用
    backgroundColor: 'white',
    flex: 1,
    width: DEVICE_WIDTH,
  },
});
