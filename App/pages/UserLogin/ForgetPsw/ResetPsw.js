import React, {Component} from 'react';
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
    TextInput,

} from 'react-native';
import styleUtil from  '../../../utils/styleutil';
import NavigationBar from 'react-native-navbar';
let DEVICE_WIDTH = Dimensions.get('window').width;
const { width, height} = Dimensions.get('window');
import AppMain from '../../AppMain';
import LoginModel from'../LoginModel/LoginModel'
export default class ResetPsw extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowModal:false,
        };
    }
    resetPst(){
        if(this.sttate.pswed!=this.state.psw){
            alert('两次密码不一致……')
            return false
        }
        let params = {
            password : this.state.psw ,
            id:this.props.userid
        }
        
        LoginModel.retPassWord(params, (res) => {
            if (res.flag != 1) {
                alert(res.msg);
                return
            }
            
        }, (err) => {
            console.log(err);
        });
        setTimeout(() => {
            this.setState({isShowModal:false,})
            this.props.navigator.replace({
                component:AppMain
            })
        }, 1000);
    }

    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '重置密码',
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
            <View style={{backgroundColor:'#efefef',flex:1}}>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor}/>
                <NavigationBar tintColor={navTintColor}
                               title={titleConfig}
                               leftButton={leftbutton}
                />
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:30}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>    新密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'新密码'}onChangeText={(text) => { this.setState({ psw: text }) }}/>
                </View>
                <View
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1/PixelRatio.get()}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>重复密码:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1}} underlineColorAndroid={'transparent'}
                               placeholder={'重复新密码'}onChangeText={(text) => { this.setState({ pswed: text }) }}/>
                </View>
                <TouchableOpacity
                    style={{width:DEVICE_WIDTH-40,paddingVertical:15,backgroundColor:'#29b6f6',marginLeft:20,marginTop:30,alignItems: 'center',justifyContent:'center',borderRadius:5}}
                    onPress={()=>{
                        this.setState({isShowModal:true})
                        this.resetPst();
                    }}>
                    <Text style={{fontSize:16,color:'white'}}>确        定</Text>
                </TouchableOpacity>
              {
                  this.state.isShowModal ?
                    <View style={{
                      position:'absolute',
                      top:0,
                      left:0,
                      width:width,
                      height:height,
                      backgroundColor:'transparent',
                    }}>
                      {this.renderModal()}
                    </View>
                    : null
              }
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
        marginTop:width*0.4,
        borderRadius:15,
        padding:30
      }}>
          <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
              <View style={{flex:1}}/>
              <Text style={{flex:1,fontSize:16,color:'#333333',marginTop:10}}>恭喜您!</Text>
          </View>
          <Text>{'    密码设置成功，请牢记您设置的新密码'}</Text>
         
          
      </View>
    )
  }
}