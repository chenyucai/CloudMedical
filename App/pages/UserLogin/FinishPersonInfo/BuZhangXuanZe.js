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
import Drawer from 'react-native-drawer'
let DEVICE_WIDTH = Dimensions.get('window').width;
const isFinish="isFinish";
export default class BuZhangXuanZe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['男', '女'],
            options1: ['办事处1', '办事处2','办事处3'],
        };
    }
    selectCustType(index) {
        console.log('index',index)
    }
    openControlPanel = () => {
        this._drawer.open()
    };
    closeControlPanel = () => {
        this._drawer.close()
    };
    renderMain(){
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '步长系统信息补全',
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
                        pickerHeight={44}
                        backColor="#ffffff"
                        textAlign={'center'}
                        flexOnItem={1}
                        selectText={'选择性别'}
                    >
                    </DropdownPicker>
                    <View style={{width:12}}/>
                </View>
                <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                    <Text style={{ color: '#888888',marginLeft:10}}>       归属:</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>选择总部或大区</Text>
                        <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end'}}
                                            onPress={()=>{

                                            }}>
                            <Image style={{width:12,height:12*9/5}} source={{uri:'icon_next'}}/>
                        </TouchableOpacity>
                    </TouchableOpacity>
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
                        <Text style={{fontSize:14,color:'#888888'}}>    办事处:</Text>
                    </View>
                    <DropdownPicker
                        options={this.state.options1}
                        Selected={this.selectCustType.bind(this)}
                        pickerWidth={DEVICE_WIDTH-200}
                        pickerHeight={44}
                        backColor="#ffffff"
                        textAlign={'center'}
                        flexOnItem={1}
                        selectText={'选择办事处'}
                    >
                    </DropdownPicker>
                    <View style={{width:12}}/>
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
    renderMenu(){
        return (
            <View style={{flex:1,backgroundColor:'#fff'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',paddingVertical:20}}>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                        <Image style={{width:100,height:100,borderRadius:50}}
                               source={{uri:'http://163.177.128.179:39241/933f3d61ed30976e1cb479ea12e19058'}}/>
                        <Text style={{fontSize:14,color:'#555555',marginTop:10}}>181****1234</Text>
                    </View>
                </View>
                <View style={{width:DEVICE_WIDTH*0.8,height:1,backgroundColor:'#efefef'}}/>
            </View>
        )
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
