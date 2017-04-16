import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    InteractionManager,
    Image,

} from 'react-native';
const {width, height} = Dimensions.get('window')

import NavigationBar from 'react-native-navbar';
import styleUtil from  '../../../utils/styleutil';

import DifficultConsolidate from '../DifficultConsolidate/DifficultConsolidate';

import Model from '../../../Model/Model'


export default class SequencePractice extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isCollection:false,
        };
    }

    componentDidMount(){
      this.get()
    }

    get() {
      if (this.props.type == 'order') {
        var params = {
          classid: '34ebc920-07d6-4157-8f86-1110f1288d54',
          num:'10',
          searchField:'tcentertype',
          searchValue:this.props.id
        };
        Model.FindInfoList(params,(res)=>{
            this.setState({infos: res.infos})
        },(err)=>{

        });
      } else {
        var params = {
          classid: '34ebc920-07d6-4157-8f86-1110f1288d54',
          num:'10',
          ecentertype:this.props.id
        };
        Model.getRandomTest(params,(res)=>{
            this.setState({infos: res.infos})
        },(err)=>{

        });
      }


    }

    pushPage = () =>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if(navigator){
                navigator.push({
                    component:DifficultConsolidate
                })
            }
        })
    }
    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: this.props.name,
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
                    <View style={{width:width,height:30,paddingHorizontal:30,
                    borderRadius:4,backgroundColor:'#f9f9f9',flexDirection:'row',justifyContent:'space-between',
                    alignItems:'center',marginTop:4}}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Text>{'练习题'}<Text style={{color:'#3f51b5'}}>{'10'}</Text>{'题'}</Text>
                            <Text style={{marginLeft:30}}>{'答对'}<Text style={{color:'#259b24'}}>{'8'}</Text>{'题'}</Text>
                        </View>
                        <TouchableOpacity activeOpacity={1} onPress={()=>this.pushPage()} style={{padding:5,flexDirection:'row',justifyContent:'center',alignItems:'center',
                        borderRadius:6,backgroundColor:'#e84e40'}}>
                            <Text style={{color:'#fff'}}>{'查看错题'}</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{width:width*0.98,height:300,marginLeft:width*0.01,
                    borderRadius:4,backgroundColor:'#fff',marginTop:6}}>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingHorizontal:8}}>
                            <Text>{'1.检测要求报告的肿瘤病例应包括()'}</Text>
                        </View>
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{flex:4,justifyContent:'center'}}>
                            <View style={{flex:1,flexDirection:'row',paddingHorizontal:20}}>
                                <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#78909c',
                                justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fff',backgroundColor:'transparent'}}>A</Text></View>
                                <Text style={{marginLeft:10}}>{'淋巴瘤'}</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingHorizontal:20}}>
                                <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#e84e40',
                                justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fff',backgroundColor:'transparent'}}>B</Text></View>
                                <Text style={{marginLeft:10}}> {'垂体瘤'}</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingHorizontal:20}}>
                                <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#78909c',
                                justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fff',backgroundColor:'transparent'}}>C</Text></View>
                                <Text style={{marginLeft:10}}>{'肝血管瘤'}</Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',paddingHorizontal:20}}>
                                <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#78909c',
                                justifyContent:'center',alignItems:'center'}}>
                                    <Text style={{color:'#fff',backgroundColor:'transparent'}}>D</Text></View>
                                <Text style={{marginLeft:10}}>{'子宫肌瘤'}</Text>
                            </View>

                        </View>
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                                <Text>{'我的答案: B'}</Text>
                                <Image
                                    source={{uri:'http://163.177.128.179:39241/91b3aff9a79cf71dc9a4a804021d3a6c'}}
                                    style={{width:20,height:20,marginLeft:20}}
                                />
                                <Image
                                    source={{uri:'http://163.177.128.179:39241/3c95db00cff311b9ad35d86ee893ef75'}}
                                    style={{width:20,height:20,marginLeft:20}}
                                />

                            </View>
                            <View style={{width:60,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#26a69a',marginRight:10,borderRadius:6,}}>
                                <Text style={{color:'#fff'}}>{'确定'}</Text>
                            </View>
                        </View>
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                            <View style={{width:120,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#78909c',marginRight:10,borderRadius:6,marginLeft:20}}>
                                <Text style={{color:'#fff'}}>{'上一题'}</Text>
                            </View>
                            <View style={{width:120,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#78909c',marginRight:10,borderRadius:6,marginRight:20}}>
                                <Text style={{color:'#fff'}}>{'下一题'}</Text>
                            </View>

                        </View>
                    </View>
                    <View style={{width:width*0.98,marginLeft:width*0.01,borderRadius:4,backgroundColor:'#fff',
                    marginTop:20,
                    }}>
                        <View style={{width:width*0.98,height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                                <Text>{'我的答案: B'}</Text>
                            </View>
                            <TouchableOpacity activeOpacity={1} onPress={()=>this.setState({isCollection:!this.state.isCollection})}>
                                <Image

                                    source={{uri:this.state.isCollection ?
                                    'http://163.177.128.179:39241/420242252eb95b65f329d0ef59901f9c'
                                    : 'http://163.177.128.179:39241/24c82d75d6588884630304529e8477e4'}}
                                    style={{width:30,height:30,marginRight:30,}}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{paddingLeft:10,paddingRight:10}}>
                            <Text>{'解析:'}</Text>
                            <Text>
                                {'      答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:'}
                            </Text>
                            <Text style={{marginBottom:30}}>
                                {'      答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:答案解析:'}
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#f0f0f2',

    },

})
