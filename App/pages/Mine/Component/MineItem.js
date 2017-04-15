import React,{Component} from 'react';
import {
    View,
    TouchableOpacity,
    Image,
    Text,
    StyleSheet,
    Dimensions,
    InteractionManager,

} from 'react-native';

const {width, height} = Dimensions.get('window');
let cols = 4;
let cellH = 75;
let cellW = (width-20) / 4;
let vMargin = ((width-20) - cellW * cols) / (cols + 1) - 1;


export default class MineItem extends Component{



    render(){
        return(
            <View style={styles.imageDataStyle}>
                <View style={{alignItems:'center',justifyContent:'center',}}>
                    <Image source={{uri:this.props.imgUrl}} style={styles.iconStyle}/>
                    <Text style={{alignSelf:'center',marginTop:8}}>{this.props.name }</Text>
                </View>
            </View>
        )
    }


}


const styles = StyleSheet.create({


    imageDataStyle: {
        width: cellW + 1,
      padding:2,
        marginLeft: vMargin,
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems:'center',
        borderBottomColor:'#e1e1e1',
      borderBottomWidth:1,
    },

    iconStyle: {
        width: 30,// : cellW - vMargin * cols
        height: 30,// : 43
        resizeMode: 'stretch',
    },


})