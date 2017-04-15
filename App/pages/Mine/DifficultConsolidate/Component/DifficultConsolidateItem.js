
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    TouchableOpacity,
    InteractionManager,
    TextInput,

} from 'react-native';
const {width, height} = Dimensions.get('window')

import DifficultConsolidateDetail from '../DifficultConsolidateDetail';

import ModalDropdown from 'react-native-modal-dropdown';


export default class DifficultConsolidateItem extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5']),
            selectName:'时间范围'
        };
    }
    goPushCollection = () =>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if(navigator){
                navigator.push({
                    component:DifficultConsolidateDetail,
                })
            }
        })
    };
    onSelected(rowid, rowData){
        this.setState({
            selectName:rowData
        })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.searchView}>
                    <View style={styles.DropdownViewStyle}>
                        <ModalDropdown
                            options={['不限', '三天内','一周内','一个月内','三个月内','半年内','一年内']}
                            dropdownStyle={styles.dropdownOptions}
                            onSelect={(rowid, rowData) => this.onSelected(rowid, rowData)}
                            children={<View style={styles.dropdown}><Text style={{
                                fontSize:14,
                                color: 'gray'
                            }}>{this.state.selectName}</Text></View>}
                        />
                    </View>

                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <TextInput

                            style={styles.textInputViewStyle}
                            placeholder='条件（实体名称等）'
                            underlineColorAndroid={'transparent'}
                        />

                        <View style={styles.searchBtnViewStyle}>
                            <Text style={{color:'white'}}>搜索</Text>
                        </View>
                    </View>
                </View>

                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    enableEmptySections={true}
                    style={styles.listView}
                />
            </View>
        )
    }

    renderRow = (rowData) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={()=>this.goPushCollection()}
                style={styles.rowViewStyle}>
                <Text>1.检测要求报告的肿瘤病例应包括()</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowViewStyle: {
        borderTopColor: '#e8e8e8',
        borderTopWidth: 1,
        flexDirection: 'row',
        width: width,
        alignItems: 'center',
        height: 40,
        paddingLeft: 20,
        backgroundColor:'white'

    },
    searchView:{
        height:50,
        width:width,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:10
    },

    textInputViewStyle:{
        width:150,
        height:30,
        borderRadius:5,
        borderColor:'#e8e8e8',
        borderWidth:1,
        backgroundColor:'white',
        fontSize:13,
        paddingLeft:10,
        paddingVertical:0,
    },

    searchBtnViewStyle:{
        width:50,
        height:25,
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginLeft:5
    },

    DropdownViewStyle:{
        alignItems:'center',
        justifyContent:'center',
        width:120,
        height:30,
        borderWidth:1,
        borderColor:'gray',
        borderRadius:3,
        backgroundColor:'white'

    },

    dropdown:{
        // width:100,
        // height:30
    },

    dropdownOptions:{
        width:120,
        marginTop:7,
        marginLeft:-32
    }
})