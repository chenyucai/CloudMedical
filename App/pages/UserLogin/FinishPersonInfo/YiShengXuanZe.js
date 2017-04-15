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
const isFinish="isFinish";
export default class YiShengXuanZe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            options: ['男','女'],
            options1: ['办事处1', '办事处2','办事处3'],
        };
    }
    selectCustType(index) {

    }
    render() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '医生信息补全',
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
                <View style={[styles.selectLevel, {paddingVertical: 15,marginTop:1}]}>
                    <Text style={{ color: '#888888',marginLeft:10}}>       区县:</Text>
                    <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', flex: 1}}>
                        <Text style={{flex:1,paddingVertical:0,textAlign:'center',fontSize:14,paddingRight:10}}>选择区县</Text>
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
                        <Text style={{fontSize:14,color:'#888888'}}>       医院:</Text>
                    </View>
                    <DropdownPicker
                        options={this.state.options}
                        Selected={this.selectCustType.bind(this)}
                        pickerWidth={DEVICE_WIDTH-200}
                        pickerHeight={30}
                        backColor="#ffffff"
                        textAlign={'center'}
                        flexOnItem={1}
                        selectText={'选择医院'}
                    >
                    </DropdownPicker>
                    <View style={{width:12}}/>
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
                        <Text style={{fontSize:14,color:'#888888'}}>       科室:</Text>
                    </View>
                    <DropdownPicker
                        options={this.state.options}
                        Selected={this.selectCustType.bind(this)}
                        pickerWidth={DEVICE_WIDTH-200}
                        pickerHeight={30}
                        backColor="#ffffff"
                        textAlign={'center'}
                        flexOnItem={1}
                        selectText={'选择科室'}
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