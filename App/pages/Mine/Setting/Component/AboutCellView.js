import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    Switch
} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class AboutCellView extends Component {
    static defaultProps = {
        isShowImg:false,
    };
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            SwitchState:false,
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Image
                        source={{uri:this.props.imgUrl}}
                        style={styles.imageViewStyle}/>
                    <Text>{this.props.name}</Text>
                </View>
                {
                    this.props.isShowImg?
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={{uri:this.props.isShowImgUrl}}
                                   style={{width:20,height:20,marginRight:20}}/>
                            <Image source={{uri:'http://cdn-img.easyicon.net/png/11679/1167930.gif'}}
                                   style={{width:17,height:13}}/>
                        </View>
                        :
                        <Image source={{uri:'http://cdn-img.easyicon.net/png/11679/1167930.gif'}}
                               style={{width:17,height:13}}/>
                }

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: width,
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop:1,
        padding: 10
    },

    imageViewStyle: {
        width: 20,
        height: 20,
        marginRight: 15
    }
})