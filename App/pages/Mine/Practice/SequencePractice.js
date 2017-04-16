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
            index:0,
            infos:[],
            optLabels:['A','B','C','D','E','F','G','H'],
            selected: '',
            status:''
        };
    }

    componentDidMount(){
      this.get()
    }

    pre(){
      if (this.state.index != 0) {
        this.setState({
          index: this.state.index - 1,
          selected: '',
          status:''
        })
      }
    }

    next(){
      if (this.state.index != this.state.infos.length-1) {
        this.setState({
          index: this.state.index + 1,
          selected: '',
          status:''
        })
      }
    }

    check(){
      var ans = this.state.infos[this.state.index].tanswer;
      if (this.state.selected == ans) {
        this.setState({
          status: 'corret'
        })
      } else {
        this.setState({
          status: 'fault'
        })
      }
    }

    renderStatus(){
      if (this.state.status == 'corret') {
        return (
          <Image
              source={{uri:'http://163.177.128.179:39241/3c95db00cff311b9ad35d86ee893ef75'}}
              style={{width:20,height:20,marginLeft:20}}
          />
        )
      }

      if (this.state.status == 'fault') {
        return (
          <Image
              source={{uri:'http://163.177.128.179:39241/91b3aff9a79cf71dc9a4a804021d3a6c'}}
              style={{width:20,height:20,marginLeft:20}}
          />
        )

      }


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
            this.setState({
              infos: res.infos
            })
        },(err)=>{

        });
      } else {
        var params = {
          classid: '34ebc920-07d6-4157-8f86-1110f1288d54',
          num:'10',
          tcentertype:this.props.id
        };
        Model.getRandomTest(params,(res)=>{
            this.setState({infos: res.infos})
        },(err)=>{

        });
      }


    }

    select(label){
      this.setState({
        selected: label,
        status:''
      })
    }

    renderQue(){
      if (this.state.infos.length != 0) {
        var obj = this.state.infos[this.state.index];
        var opts = obj.toption.split('|||||');
        var optsArr = [];
        for (var i = 0; i < opts.length; i++) {
          // optsArr.push({
          //   label: this.state.optLabels[i],
          //   ans:opts[i]
          // });
          var label = this.state.optLabels[i];
          optsArr.push(
            <TouchableOpacity key={i}
              onPress={this.select.bind(this, label)}
               style={{flex:1,flexDirection:'row',paddingHorizontal:20,alignItems:'center',marginBottom:10}}>
                <View style={{width:20,height:20,borderRadius:10,backgroundColor:'#78909c',
                justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'#fff',backgroundColor:'transparent'}}>{this.state.optLabels[i]}</Text></View>
                <Text style={{marginLeft:10}}>{opts[i]}</Text>
            </TouchableOpacity>
          )
        }

        return (
          <View>
            <View style={{paddingVertical:8,flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingHorizontal:8}}>
                <Text>{this.state.index+1}{obj.title}</Text>
            </View>
            <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
            <View style={{flex:4,justifyContent:'center'}}>
              {optsArr}
                {/* <View style={{flex:1,flexDirection:'row',paddingHorizontal:20}}>
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
                </View> */}

            </View>
          </View>
        )
      }
    }

    renderJx(){
      if (this.state.status != '') {
        return (
          <View style={{}}>
            <View style={{width:width*0.98,height:40,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                    <Text>{'我的答案: '+this.state.selected}</Text>
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
                <Text style={{marginBottom:30}}>
                    {this.state.infos[this.state.index].tcontent}
                </Text>
            </View>
          </View>
        )
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
                    <View style={{marginLeft:width*0.01,
                    borderRadius:4,backgroundColor:'#fff',marginTop:6}}>
                        {this.renderQue()}
                        {/* <View style={{flex:1,flexDirection:'row',justifyContent:'flex-start',alignItems:'center',paddingHorizontal:8}}>
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

                        </View> */}
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{paddingVertical:10,flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'center',}}>
                                <Text>{'我的答案: '+this.state.selected}</Text>
                                {this.renderStatus()}
                                {/* <Image
                                    source={{uri:'http://163.177.128.179:39241/91b3aff9a79cf71dc9a4a804021d3a6c'}}
                                    style={{width:20,height:20,marginLeft:20}}
                                />
                                <Image
                                    source={{uri:'http://163.177.128.179:39241/3c95db00cff311b9ad35d86ee893ef75'}}
                                    style={{width:20,height:20,marginLeft:20}}
                                /> */}

                            </View>
                            <TouchableOpacity
                              onPress={this.check.bind(this)}
                               style={{width:60,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#26a69a',marginRight:10,borderRadius:6,}}>
                                <Text style={{color:'#fff'}}>{'确定'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width:width*0.98,height:1,backgroundColor:'#e1e1e1',marginBottom:4}}/>
                        <View style={{paddingVertical:10,flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center',paddingHorizontal:8}}>
                            <TouchableOpacity
                              onPress={this.pre.bind(this)}
                               style={{width:120,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#78909c',marginRight:10,borderRadius:6,marginLeft:20}}>
                                <Text style={{color:'#fff'}}>{'上一题'}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={this.next.bind(this)}
                               style={{width:120,height:24,flexDirection:'row',justifyContent:'center',alignItems:'center',
                            backgroundColor:'#78909c',marginRight:10,borderRadius:6,marginRight:20}}>
                                <Text style={{color:'#fff'}}>{'下一题'}</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{width:width*0.98,marginLeft:width*0.01,borderRadius:4,backgroundColor:'#fff',
                    marginTop:20,
                    }}>
                        {this.renderJx()}
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
