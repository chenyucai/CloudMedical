import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    InteractionManager,
    Dimensions,
    ListView,

} from 'react-native';
const {width, height} = Dimensions.get('window')
import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';
import ShortMessageItem from './Component/ShortMessageItem';
import ShortMessageDetail from '../Message/MessageDetail';
export default class ShortMessage extends Component {

    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 != r2
            }).cloneWithRows(['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1',])
        };
    }
  

    goPushDetail = () => {
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(() => {
            if (navigator) {
                navigator.push({
                    component: ShortMessageDetail,
                })
            }
        })
    };

    renderRow = (rowData) => {
        return (
            <TouchableOpacity activeOpacity={1} onPress={() => this.goPushDetail()} style={{ marginTop: 10 }}>
                <View style={{flexDirection:'row'}}>
                    {this.renderTextView()}
                </View>
                <ShortMessageItem
                    //topTitle={rowData.title}
                    //releasePeople={rowData.name}
                    //newsTime={rowData.time}
                    topTitle={'标题:习近平主持政治局会议六中全会10月召开'}
                    releasePeople={'发布人'}
                    newsTime={'2017-02-16'}

                />
            </TouchableOpacity>
        )
    }
    renderTextView = () => {
        let TextView = [];
        for (let i=0;i<width/2;i++){
            TextView.push(
                <Text key={i} style={{color:'#c1c1c1',marginBottom:-4}}>{'.'}</Text>
            )
        }
        return TextView;

    }

    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: '站内短消息',
            tintColor: titleTintColor
        };
        const leftbutton = (
            <TouchableOpacity onPress={() => {
        this.props.navigator.pop()
      }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
                    <Image style={{ width: 20, height: 20 }}
                           source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }}/>
                </View>
            </TouchableOpacity>);
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar
                    tintColor={navTintColor}
                    title={titleConfig}
                    leftButton={leftbutton}
                />

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind( this )}
                />


            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f0f0f2'
    },

});


