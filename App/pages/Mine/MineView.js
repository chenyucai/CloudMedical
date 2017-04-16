
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    InteractionManager,
    PixelRatio,
    AsyncStorage
} from 'react-native';
const isFinish="isFinish";
const {width, height} = Dimensions.get('window');
import ImageButton from './Component/ImageButton';
import PersonalInfo from './PersonalInfo/PersonalInfo';
//考试赢积分
import TestWinIntegral from './TestWinIntegral/TestWinIntegral';
//练习
import Practice from './Practice/Practice';
//难点巩固
import DifficultConsolidate from './DifficultConsolidate/DifficultConsolidate';
//我的收藏
import MyCollection from './MyCollection/MyCollection';
//兑换
import Exchange from './Exchange/Exchange';
//站内短消息
import Message from './Message/Message';
import IdentitysSelect from '../UserLogin/FinishPersonInfo/IdentitysSelect';
//设置
import Setting from './Setting/Setting';
/**
 * 请求的model
 */
import MineModel from './MineModel/MineModel'

export default class MineView extends Component{
    constructor(props){
        super(props);
        this.state={
            modalVisible:false,
            GetPersonCenterdata: []
        }
    }

    GetPersonCenter() {
      var params = {
        classid: 'f0f12434-363a-4d9f-bd15-02d0d2e702e6',
        id: '2de20730-a806-49ad-a958-d1be9f58a93e'
      };
      MineModel.GetPersonCenter(params,(res)=>{
          // console.log(res)
          this.setState({GetPersonCenterdata:res.infos})
      },(err)=>{

      });
    }

    componentDidMount() {
      this.GetPersonCenter();
      AsyncStorage.setItem(isFinish, 'NONE');
    }

    renderPersonCenter(){
      var items = [];
      var data = this.state.GetPersonCenterdata;
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        items.push(
          <Image style={styles.imageViewStyle} source={{uri:'http://pic.58pic.com/58pic/15/15/35/08858PICGTF_1024.jpg'}}>
              <View style={styles.headerViewStyle}>
                  <TouchableOpacity activeOpacity={1} onPress={()=>{
                      const {navigator} = this.props;
                      InteractionManager.runAfterInteractions(()=>{
                          if (navigator){
                              navigator.push({
                                  component:PersonalInfo,
                              })
                          }
                      })
                  }}>
                  <Image style={styles.headerImageStyle} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1489411036767&di=00284b58d0de3eedd78baee7afce09cd&imgtype=0&src=http%3A%2F%2Fpic28.photophoto.cn%2F20130924%2F0005018357660919_b.jpg'}}/>
                  </TouchableOpacity>
                  <TouchableOpacity activeOpacity={1} >
                      <Text style={{color:'white'}}>昵称:{data[i].title}</Text>
                      <Text style={{marginTop:10,color:'white'}}>签名:{data[i].signature}</Text>
                  </TouchableOpacity>
                  <Text style={{color:'orange',marginLeft:60}}>角色</Text>
              </View>

              <View style={styles.headerBottomViewStyle}>
                  <View style={{alignItems:'center',justifyContent:'center',height:50,width:width,flexDirection:'row'}}>
                      <View style={[styles.textViewStyle,{borderRightWidth:1,borderRightColor:'white'}]}><Text style={{color:'white'}}>{data[i].pointsnow}可用积分</Text></View>
                      <View style={styles.textViewStyle}><Text style={{color:'white'}}>{data[i].pointsused}累计积分</Text></View>
                  </View>
              </View>
          </Image>
        )
      }
      return items;
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={styles.navStyle}>
                    <Text style={{fontSize:18}}>个人中心</Text>
                </View>

                {this.renderPersonCenter()}

                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',backgroundColor:'#fff',marginTop:10}}>
                    <ImageButton
                        source={'http://163.177.128.179:39241/ec7042ceaf1da7a2d990432cecb27303'}
                        Txt="考试赢积分"
                        onPress={() => {
                                    AsyncStorage.getItem(isFinish,(error,text)=>{
                                          if(text=='NONE'){
                                                this.setState({
                                                    modalVisible:true
                                                })
                                          }else{
                                               this.props.navigator.push({
                                                    component:TestWinIntegral
                                                })
                                          }
                                     });
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/31b151e0dc129fb454aad8eb549419eb'}
                        Txt="练习"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:Practice
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/4f7567a474e1b0af6ce5fa2bbfdeffa9'}
                        Txt="难点巩固"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:DifficultConsolidate
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/769ddc7608010b93297472688be13855'}
                        Txt="我的收藏"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:MyCollection
                                         })
                                }}/>
                </View>
                <View style={{flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start',backgroundColor:'#fff',marginTop:10}}>
                    <ImageButton
                        source={'http://163.177.128.179:39241/e0b554874d958d9540537a3cf08d71f0'}
                        Txt="兑换"
                        onPress={() => {
                                    this.props.navigator.push({
                                        component:Exchange
                                    })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/d7344058ff9c26b79890daa0de568d70'}
                        Txt="站内短消息"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:Message
                                        })
                                }}/>
                    <ImageButton
                        source={'http://163.177.128.179:39241/5b702289bbe333de1c031870d123e861'}
                        Txt="设置"
                        onPress={() => {
                                        this.props.navigator.push({
                                            component:Setting
                                        })
                                }}/>
                </View>
                {this.state.modalVisible ?
                    <View style={{
                        position:'absolute',
                        top:0,
          					    left:0,
          					    width:width,
          					    height:height,
          					    backgroundColor:'#00000077',
                    }}>
                        {this.renderModal()}
                    </View> : null}

            </View>
        )
    }
    renderModal(){
        return(
            <View style={{
                alignItems:'center',
                backgroundColor:'#fff',
                width:width-80,
                marginLeft:40,
                marginTop:width*0.3,
                borderRadius:15,
                padding:10
            }}>
                <Text style={{fontSize:16,color:'#333333',marginTop:10}}>温馨提示</Text>
                <View style={{width:width-100,marginLeft:50,height:1/PixelRatio.get(),marginLeft:20,backgroundColor:'#efefef',marginVertical:10}}/>
                <Text style={{fontSize:14,color:'#888888',marginTop:10}}>请完善个人信息在进行考试赢积分</Text>
                <TouchableOpacity style={{width:width-160,paddingVertical:10,backgroundColor:'#26a69a',marginTop:30,alignItems:'center',justifyContent:'center',borderRadius:10}}
                                  onPress={()=>{
                                      this.setState({
                                          modalVisible:false
                                      });
                                      this.props.navigator.push({
                                             component: IdentitysSelect
                                      })
                                  }}>
                    <Text style={{fontSize:14,color:'#ffffff'}}>√请前往补全个人信息</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:width-160,paddingVertical:10,backgroundColor:'#78909C',marginTop:30,alignItems:'center',justifyContent:'center',marginBottom:20,borderRadius:10}}
                                  onPress={()=>{
                                      this.setState({
                                          modalVisible:false
                                      })
                                  }}>
                    <Text style={{fontSize:14,color:'#ffffff'}}>√稍后再补全个人信息</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
       flex:1,
        backgroundColor:'#rgba(240,240,240,1)'
    },

    navStyle:{
        width:width,
        height:64,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        paddingTop:10
    },

    imageViewStyle:{
        width:width,
        height:150,
        backgroundColor:'transparent'
    },

    headerViewStyle:{
        padding:20,
        flexDirection:'row'
    },

    headerImageStyle:{
        width:50,
        height:50,
        borderRadius:25,
        marginRight:20
    },

    headerBottomViewStyle:{
        position:'absolute',
        bottom:0,
        height:50,
        backgroundColor:'#rgba(0,0,0,0.5)',
        width:width

    },
    line:{
        width:1,
        height:50,
        backgroundColor:'white'
    },

    textViewStyle:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        height:50

    }
})
