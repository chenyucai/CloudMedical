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
    PixelRatio,

} from 'react-native'

const {width, height} = Dimensions.get('window');
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
import DifficultConsolidate from '../DifficultConsolidate/DifficultConsolidate';

import Model from '../../../Model/Model'


export default class SimulationTest extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            modalVisible: false,
            isCollection:false,
            index:0,
            infos:[],
            optLabels:['A','B','C','D','E','F','G','H'],
            selected: '',
            status:'',
            total: 100,
            remain:100,
            score: 0,
            disabled:false,
            time:0,
            pexamid:'',
            point:''
        };
    }

    componentDidMount(){
      this.get();
      this.myVar=setInterval(() => {
        this.setState({
          time: this.state.time + 1
        })
      },1000);
    }

    endExam(){
      clearInterval(this.myVar);
      var params = {
        pexamid:this.state.pexamid,
        usedtime: this.state.time / 60
      };
      Model.endExam(params,(res)=>{
        if (res.flag == 1) {
          var msg = eval('('+res.msg+')');
          this.setState({
            score: msg.score,
            point: msg.getpoints
          });
        }

      },(err)=>{

      });
    }

    check(){
      if (!this.state.disabled) {
        this.setState({
          disabled: true
        });

        var ans = this.state.infos[this.state.index].tanswer;
        if (this.state.remain == 0) {
          this.endExam();
          this.setState({
            modalVisible: true
          });
          return false;
        }
        this.setState({
          remain: this.state.remain - 1,
        });

        if (this.state.selected == ans) {
          this.setState({
            status: 'corret',
            score: this.state.score + 1
          })
        } else {
          this.setState({
            status: 'fault'
          })
        }

        this.timer = setTimeout(() => {
          this.setState({
            disabled: false
          });
          if (this.state.index != this.state.infos.length-1) {
            this.setState({
              index: this.state.index + 1,
              selected: '',
              status:''
            })
          }
        },2000);
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
      var params = {
        pepleid:'d798f305-497a-4b85-8927-17197c918ac3',
        istrue:'1',
        centertype:this.props.id
      };
      Model.startExam(params,(res)=>{
        var msg = eval('('+res.result.msg+')');
        // var msg = JSON.parse(res.result.msg);
        console.log(msg);
        this.setState({
          infos: res.infos,
          pexamid: msg.pexamid
        });
      },(err)=>{

      });

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


    render() {
        const navTintColor = styleUtil.getNavTintColor();
        const titleTintColor = styleUtil.getTitleTintColor();
        const titleConfig = {
            title: '考试',
            tintColor: titleTintColor
        };
        const leftbutton = (
            <TouchableOpacity onPress={() => {
                this.props.navigator.pop()
            }}>
                <View style={{justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1}}>
                    <Image style={{width: 20, height: 20}}
                           source={{uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f'}}/>
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
                    <View style={{
                        width: width,
                        height: 30,
                        paddingHorizontal: 30,
                        borderRadius: 4,
                        backgroundColor: '#f9f9f9',
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                        alignItems: 'center',
                    }}>
                        <Text>{'总计'}<Text style={{color: '#3f51b5'}}>{this.state.total}</Text>{'题'}</Text>
                        <Text style={{marginLeft: 30}}>{'剩余'}<Text style={{color: '#259b24'}}>{this.state.remain}</Text>{'题'}</Text>
                        {/* <Text style={{marginLeft: 30}}>{'得分'}<Text style={{color: '#ff5722'}}>{this.state.score}</Text></Text> */}
                        <Text style={{marginLeft: 30}}>{'用时'}<Text style={{color: '#ff5722'}}>{this.state.time}</Text></Text>
                    </View>
                    <View style={{
                        marginLeft: width * 0.01,
                        borderRadius: 4, backgroundColor: '#fff', marginTop: 10
                    }}>

                        {this.renderQue()}
                        <View style={{width: width * 0.98, height: 1, backgroundColor: '#e1e1e1', marginBottom: 4}}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingHorizontal: 8,
                            paddingVertical:10
                        }}>
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

                            <TouchableOpacity ouchableOpacity
                              onPress={this.check.bind(this)}
                              style={{
                                width: 60,
                                height: 24,
                                flexDirection: 'row',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#26a69a',
                                marginRight: 10,
                                borderRadius: 6,

                            }}>
                                <Text style={{color: '#fff'}}>{'确定'}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{width: width * 0.98, height: 1, backgroundColor: '#e1e1e1', marginBottom: 4}}/>
                        <View style={{
                            flex: 1,
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            paddingHorizontal: 8
                        }}>
                            <TouchableOpacity activeOpacity={1}
                                              onPress={() => this.setState({isCollection: !this.state.isCollection})}>
                                <Image

                                    source={{
                                        uri: this.state.isCollection ?
                                            'http://163.177.128.179:39241/420242252eb95b65f329d0ef59901f9c'
                                            : 'http://163.177.128.179:39241/24c82d75d6588884630304529e8477e4'
                                    }}
                                    style={{width: 30, height: 30, marginLeft: 10,}}
                                />
                            </TouchableOpacity>

                        </View>
                    </View>
                    <View style={{width: width - 70, marginLeft: 35, marginTop: 40}}>
                        <Text style={{color: 'red', fontSize: 12}}>{'考试不提示对错,答题结束后只给答题共用时间和总成绩,'}</Text>
                        <Text style={{color: 'red', fontSize: 12}}>{'答题奖励积分,积分兑换奖品,分享到微信朋友圈'}</Text>
                        <Text style={{color: 'red', fontSize: 12}}>{'1-2秒后自动进入下一题,直到答完为止'}</Text>
                    </View>
                    <Text style={{textAlign: 'center', marginTop: 60, color: 'red'}}
                          onPress={() => this.setState({modalVisible: true})}>{'-> 点击查看测试结束,答题结果界面'}</Text>
                </ScrollView>


                {this.state.modalVisible ?
                    <View style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: width,
                        height: height,
                        backgroundColor: '#00000077',
                    }}>
                        {this.renderModal()}
                    </View> : null
                }


            </View>
        )

    }

    renderModal() {
        return (
            <View style={{
                alignItems: 'center',
                backgroundColor: '#fff',
                width: width - 80,
                marginLeft: 40,
                marginTop: width * 0.3,
                borderRadius: 15,
                padding: 10
            }}>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around'}}>
                    <View style={{flex: 1}}/>
                    <Text style={{flex: 1, fontSize: 16, color: '#333333', marginTop: 10}}>恭喜您!</Text>
                    <TouchableOpacity style={{
                        flex: 1,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        marginRight: 8
                    }}
                                      onPress={() => this.setState({modalVisible: false})}>
                        <Image style={{width: 20, height: 20}}
                               source={{uri: 'http://163.177.128.179:39241/8620aef6097391212d20046e7eecb6cc'}}/>
                    </TouchableOpacity>
                </View>
                <View style={{
                    width: width - 100,
                    height: 1 / PixelRatio.get(),
                    marginLeft: 20,
                    backgroundColor: '#efefef',
                    marginVertical: 10
                }}/>
                <View style={{width: width - 80, paddingHorizontal: 60}}>
                    <Text style={{fontSize: 14, color: '#888888', marginTop: 10}}>{'考试总分:'}
                        <Text style={{color: 'red'}}>
                            {this.state.score}
                        </Text>
                    </Text>
                </View>
                <View style={{width: width - 80, paddingHorizontal: 60}}>
                    <Text style={{fontSize: 14, color: '#888888', marginTop: 10}}>{'考试时间:'}
                        <Text style={{color: '#50a39a'}}>
                            {this.state.time}
                        </Text>
                    </Text>
                </View>
                <View style={{width: width - 80, paddingHorizontal: 60}}>
                    <Text style={{fontSize: 14, color: 'red', marginTop: 10}}>{'获得积分:'}
                        <Text style={{color: 'red'}}>
                            {this.state.point}
                        </Text>
                    </Text>
                </View>

                <TouchableOpacity style={{
                    width: width - 160,
                    paddingVertical: 5,
                    backgroundColor: '#fff',
                    borderColor: '#26a69a',
                    borderWidth: 1,
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 10
                }}
                >
                    <Image source={{uri: 'http://163.177.128.179:39241/8a9592b3c34f8e019aa81c4ed7e0dbee'}}
                           style={{width: 20, height: 20, marginRight: 10,}}/>
                    <Text style={{fontSize: 14, color: '#0fc83f'}}>分享到微信朋友圈</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    width: width - 160,
                    paddingVertical: 5,
                    backgroundColor: '#fff',
                    borderColor: '#26a69a',
                    borderWidth: 1,
                    marginTop: 30,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 20,
                    borderRadius: 10
                }}
                                  onPress={() => {
                                      {/*this.setState( {*/
                                      }
                                      {/*modalVisible: false*/
                                      }
                                      {/*} )*/
                                      }
                                      const {navigator} = this.props;
                                      InteractionManager.runAfterInteractions(() => {
                                          if (navigator) {
                                              navigator.push({
                                                  component: DifficultConsolidate,
                                              })
                                          }
                                      })
                                  }}>
                    <Image source={{uri: 'http://163.177.128.179:39241/3737f500e89e0db27a3832e2cba0b29e'}}
                           style={{width: 12, height: 12, marginRight: 10,}}/>
                    <Text style={{fontSize: 14, color: '#0fc83f'}}>查看错题集</Text>
                </TouchableOpacity>
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
    ListViewStyle: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        backgroundColor: '#fff'
    },
})
