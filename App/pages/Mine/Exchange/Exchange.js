import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    Image,
    StatusBar,
    ListView,
    InteractionManager,
    ScrollView,

} from 'react-native'

const {width, height} = Dimensions.get('window');
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';

import ExchangeInstructions from './ExchangeInstructions';
import PrizeDetailInfo from './PrizeDetailInfo';

export default class Exchange extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource:ds.cloneWithRows(['1','1','1','1','1','1','1','1','1','1','1','1'])
        };
    }
    goToTest=()=>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if (navigator){
                navigator.push({
                    component:PrizeDetailInfo,

                })
            }
        })
    };
    renderRow(rowData,sectionID, rowID){
        return(
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>this.goToTest()}
                style={{width:width,padding:8,flexDirection:'row',
                justifyContent:'space-between',alignItems:'center',
                backgroundColor:'#fff',borderBottomWidth:1,borderBottomColor:'#e1e1e1'}}
            >
                <View style={{flexDirection:'row'}}>
                    <Image
                        source={{uri:'http://163.177.128.179:39241/a818a6784f12ae1c3c6e617c60f0c9cc'}}
                        style={{width:60,height:60,}}/>
                    <View style={{justifyContent:'space-between',marginLeft:10,}}>
                        <Text style={{marginTop:8}}>{'物品名称'}</Text>
                        <Text style={{color:'#ff5823',marginBottom:8,}}>{'兑换需求积分'}</Text>
                    </View>
                </View>
                <Image
                    style={{width:14,height:14,marginRight:10}}
                    source={{uri:'http://163.177.128.179:39241/886b8f5b0726a7b2108894d9e9db1e61'}}
                />
            </TouchableOpacity>
        )
    };

  
    goExchangeInstructions = () =>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if (navigator){
                navigator.push({
                    component:ExchangeInstructions
                })
            }
        })
    }
    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: '兑换',
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
                <ScrollView>
                    <Image
                        source={{uri:'http://163.177.128.179:39241/a818a6784f12ae1c3c6e617c60f0c9cc'}}
                        style={{width:width,height:150,marginTop:1,}}
                    />
                    <View style={{marginTop:10,marginBottom:4,width:width,padding:10,backgroundColor:'#fff',
                    flexDirection:'row',justifyContent:'space-between',alignItems:'center',}}>
                        <Text style={{marginLeft:20}}>{'奖品'}</Text>
                        <Text
                            onPress={()=>this.goExchangeInstructions()}
                            style={{color:'#607d8b',fontSize:12,marginRight:20}}>{'兑换说明'}</Text>
                    </View>
                    <ListView
                        dataSource={this.state.dataSource}
                        renderRow={(rowData,sectionID, rowID) => this.renderRow(rowData,sectionID, rowID)}
                        contentContainerStyle={styles.ListViewStyle}
                        enableEmptySections={true}
                    />
                </ScrollView>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#rgba(240,240,240,1)'
    },
    navStyle: {
        width: width,
        height: 64,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        flexDirection: 'row'
    },
    navLeftStyle: {
        position: 'absolute',
        left: 20,
        bottom: 18
    },
    ListViewStyle:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'flex-start',
        backgroundColor:'#fff'
    },
})