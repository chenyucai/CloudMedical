
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Dimensions,
    TouchableOpacity,
    InteractionManager,

} from 'react-native';
const {width, height} = Dimensions.get('window')

import CollectionDetail from '../CollectionDetail';

export default class MyCollectionItem extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            dataSource: ds.cloneWithRows(['1', '2', '3', '4', '5', '1', '2', '3', '4', '5', '1', '2', '3', '4', '5'])
        };
    }
    goPushCollection = () =>{
        const {navigator} = this.props;
        InteractionManager.runAfterInteractions(()=>{
            if(navigator){
                navigator.push({
                    component:CollectionDetail,
                })
            }
        })
    };
    render() {
        return (
            <View style={styles.container}>
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
            <TouchableOpacity activeOpacity={1} onPress={()=>this.goPushCollection()} style={styles.rowViewStyle}>
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
})