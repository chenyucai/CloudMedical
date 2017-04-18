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
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import styleUtil from '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import ImageButton from '../Component/ImageButton';
import KnowledgeDetail from './Detail/KnowledgeDetail';
import ApiConst from '../../../Base/Urls/ApiConst';
/**
 * 请求的model
 */
const DEVICE_WIDTH = Dimensions.get('window').width;
import StudyModel from '../StudyModel/StudyModel'
export default class One extends Component {
    datasoruce= new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            })
    constructor(props) {
        super(props);
        this.state = {
            Listdata: [],
            SearchColumndata: [],
            dataSource1: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            }),
        };
    }

    getInfoList() {
        var classid = this.props.classid;
        //alert(classid)
        console.log(classid);
        var params = {
            classid: classid,
            page: '1',
            num: '10'
        };
        StudyModel.getInfoList(params, (res) => {
            //alert(JSON.stringify(res))
            this.setState({ dataSource1: this.datasoruce.cloneWithRows(res.infos) })
        }, (err) => {

        });
    }

    componentDidMount() {
        // this.getSearchColumn();
        this.getInfoList();
    }

    goKnowledgeDetail(id, classid, title) {
        this.props.navigator.push({
            name: 'KnowledgeDetail',
            component: KnowledgeDetail,
            params: {
                id: id,
                classid: classid,
                title: title
            }
        })
    }
    renderItem(rowData, sectionID, rowId) {
        return (
            <View key={rowId}>
                <ImageButton
                    source={ApiConst.Versions().ImageBaseUrl + rowData.icon.replace(",",'')}
                    Txt={rowData.title}
                    onPress={this.goKnowledgeDetail.bind(this,rowData.id, rowData.classid, rowData.title)}
                />
            </View>
        );
    }


    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            // title: '医疗基础',
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
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor} />
                <NavigationBar tintColor={navTintColor}
                    title={titleConfig}
                    leftButton={leftbutton}
                />
                 <ScrollView>
                <View style={{ flexDirection: 'row',flex:1,alignItems: 'flex-start'}}>
                <ListView
                        initialListSize={9}
                        dataSource={this.state.dataSource1}
                        renderRow={this.renderItem.bind(this)}
                        contentContainerStyle={styles.listViewStyle}
                        onEndReachedThreshold={60}
                        enableEmptySections={true}
                    />
                </View>
                 </ScrollView>
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
                    
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
