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
    StyleSheet,
    AsyncStorage
} from 'react-native';
import styleUtil from  '../../../utils/styleutil';
import DropdownPicker from  '../../../utils/DropdownPicker';
import NavigationBar from 'react-native-navbar';
let DEVICE_WIDTH = Dimensions.get('window').width;
import Drawer from 'react-native-drawer'
const isFinish="isFinish";
export default class LianSuoDianXuanZe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['男','女'],
            options2: ['连锁药店', '单体药店'],
            yaodian:false,
            mendian:false,
            yaodiamSel:'选择药店',
            mendianSel:'门店选择',
            isShowPharmacy:false,
        };
    }
    selectCustType(index) {

    }
    selectPharmacy(index){
        if(index==0){
          this.setState({
            isShowPharmacy:true,
          })
        }else {
          this.setState({
            isShowPharmacy:false,
          })
        }
    }
    
    renderMain(){
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '连锁药店信息补全',
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
                <TouchableOpacity
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:30}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>      昵称:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1,textAlign:'center'}} underlineColorAndroid={'transparent'}
                               placeholder={'输入昵称'}/>
                    <View style={{width:12}}/>
                </TouchableOpacity>
                <TouchableOpacity
                    style={{flexDirection:'row',width:DEVICE_WIDTH-40,marginLeft:20,backgroundColor:'#fff',padding:15,alignItems:'center',marginTop:1}}>
                    <Text style={{fontSize:14,color:'#888888',marginLeft:10}}>      姓名:</Text>
                    <TextInput style={{paddingVertical:0,paddingLeft:10,flex:1,textAlign:'center'}} underlineColorAndroid={'transparent'}
                               placeholder={'姓名'}/>
                    <View style={{width:12}}/>
                </TouchableOpacity>
              <View style={{
                        paddingHorizontal: 10,
                        height: 50,
                        width: DEVICE_WIDTH-40,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        marginLeft:20,
                        marginTop:1
                    }}>
                <View style={{
                            width: 80,
                            height: 50,
                            justifyContent: 'center',
                            marginLeft:15
                    }}>
                  <Text style={{fontSize:14,color:'#888888'}}>       性别:</Text>
                </View>
                <DropdownPicker
                  options={this.state.options}
                  Selected={this.selectCustType.bind(this)}
                  pickerWidth={DEVICE_WIDTH-200}
                  pickerHeight={30}
                  backColor="#ffffff"
                  textAlign={'center'}
                  flexOnItem={1}
                  selectText={'选择性别'}
                >
                </DropdownPicker>
                <View style={{width:12}}/>
              </View>
                <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                    <Text style={{ color: '#888888',marginLeft:10}}>       省份:</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>选择省份</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Image style={{width:12,height:12*9/5}} source={{uri:'icon_next'}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                    <Text style={{ color: '#888888',marginLeft:10}}>       市区:</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>选择市区</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}>
                            <Image style={{width:12,height:12*9/5}} source={{uri:'icon_next'}}/>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{
                        paddingHorizontal: 10,
                        height: 50,
                        width: DEVICE_WIDTH-40,
                        backgroundColor: '#fff',
                        flexDirection: 'row',
                        marginLeft:20,
                        marginTop:1
                    }}>
                    <View style={{
                            width: 80,
                            height: 50,
                            justifyContent: 'center',
                            marginLeft:15
                    }}>
                        <Text style={{fontSize:14,color:'#888888'}}>药店形式:</Text>
                    </View>
                    <DropdownPicker
                        options={this.state.options2}
                        Selected={this.selectPharmacy.bind(this)}
                        pickerWidth={DEVICE_WIDTH-200}
                        pickerHeight={30}
                        backColor="#ffffff"
                        textAlign={'center'}
                        flexOnItem={1}
                        selectText={'连锁or单体药店'}
                    >
                    </DropdownPicker>
                    <View style={{width:12}}/>
                </View>
                {
                    this.state.isShowPharmacy?
                      <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                        <Text style={{ color: '#888888',marginLeft:10}}>连锁药店:</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}
                                          onPress={()=>{
                                        this.setState({
                                          yaodian:true,
                                          mendian:false
                                        });
                                        this.openControlPanel()
                                      }}
                        >
                          <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>{this.state.yaodiamSel}</Text>
                          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center',
                          justifyContent: 'flex-end'}}
                                            onPress={()=>{
                                              this.setState({
                                                  yaodian:true,
                                                  mendian:false
                                              });
                                              this.openControlPanel()
                                          }}>
                            <Image style={{width:12,height:12*9/5}} source={{uri:'icon_next'}}/>
                          </TouchableOpacity>
                        </TouchableOpacity>
                      </View>:null
                }
                <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                    <Text style={{ color: '#888888',marginLeft:10}}>        门店:</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}

                                      onPress={()=>{
                                        this.setState({
                                          yaodian:false,
                                          mendian:true
                                        });
                                        this.openControlPanel()
                                      }}>
                        <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>{this.state.mendianSel}</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}
                                          onPress={()=>{
                                               this.setState({
                                                  mendian:true,
                                                  yaodian:false
                                              });
                                              this.openControlPanel()
                                          }}>
                            <Image style={{width:12,height:12*9/5}} source={{uri:'icon_next'}}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{width:DEVICE_WIDTH-40,paddingVertical:15,backgroundColor:'#26a69a',marginLeft:20,marginTop:30,alignItems: 'center',justifyContent:'center',borderRadius:5}}
                    onPress={()=>{
                         AsyncStorage.setItem(isFinish, 'YES');
                         this.props.navigator.pop();
                    }}>
                    <Text style={{fontSize:16,color:'white'}}>提        交</Text>
                </TouchableOpacity>
            </View>
        )
    }
    openControlPanel = () => {
        this._drawer.open()
    };
    closeControlPanel = () => {
        this._drawer.close()
    };
    renderMenu(){
        if(this.state.yaodian){
            return (
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <View style={{alignItems:'center',padding:10,backgroundColor:'#efefef'}}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店</Text>
                    </View>
                    <View style={{
                        alignItems:'center',
                        padding:10,backgroundColor:'#fff',
                        borderWidth:1/PixelRatio.get(),borderColor:'#efefef',flexDirection:'row',margin:10,borderRadius:5}}>
                        <TextInput style={{paddingVertical:0,flex:1}} underlineColorAndroid={'transparent'} placeholder={'连锁店名称'}/>
                        <Image style={{width:25,height:25}} source={{uri:'http://163.177.128.179:39241/24258f0b80ae9543dd24c32c7e9413ed'}}/>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称1'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称2'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称3'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称4'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称5'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称6'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef',borderBottomWidth:1/PixelRatio.get()}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              yaodiamSel:'连锁药店名称7'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>连锁药店名称7</Text>
                    </TouchableOpacity>
                </View>
            )
        }
        if(this.state.mendian){
            return (
                <View style={{flex:1,backgroundColor:'#fff'}}>
                    <View style={{alignItems:'center',padding:10,backgroundColor:'#efefef'}}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店</Text>
                    </View>
                    <View style={{
                        alignItems:'center',
                        padding:10,backgroundColor:'#fff',
                        borderWidth:1/PixelRatio.get(),borderColor:'#efefef',flexDirection:'row',margin:10,borderRadius:5}}>
                        <TextInput style={{paddingVertical:0,flex:1}} underlineColorAndroid={'transparent'} placeholder={'门店名称'}/>
                        <Image style={{width:25,height:25}} source={{uri:'http://163.177.128.179:39241/24258f0b80ae9543dd24c32c7e9413ed'}}/>
                    </View>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称1'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称2'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称3'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称3</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称4'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称5'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef'}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称6'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称6</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center',padding:15,borderTopWidth:1/PixelRatio.get(),borderColor:'#efefef',borderBottomWidth:1/PixelRatio.get()}}
                                      onPress={()=>{
                                          this.closeControlPanel();
                                          this.setState({
                                              mendianSel:'门店名称7'
                                          })
                                      }}>
                        <Text style={{fontSize:14,color:'#333333'}}>门店名称7</Text>
                    </TouchableOpacity>
                </View>
            )
        }
    }
    render() {
        return (
            <Drawer
                ref={(ref) => this._drawer = ref}
                side="right"
                type="overlay"
                content={this.renderMenu()}
                tapToClose={true}
                openDrawerOffset={0.3}>
                {this.renderMain()}
            </Drawer>
        );
    }
}
const styles = StyleSheet.create({
    selectLevel: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: '#ffffff',
        width:DEVICE_WIDTH-40,
        marginLeft:20
    }
});