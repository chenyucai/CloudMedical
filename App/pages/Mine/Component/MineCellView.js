import React,{Component,PropTypes} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    InteractionManager
} from 'react-native';

//考试赢积分
import TestWinIntegral from '../TestWinIntegral/TestWinIntegral';
//练习
import Practice from '../Practice/Practice';
//难点巩固
import DifficultConsolidate from '../DifficultConsolidate/DifficultConsolidate';
//我的收藏
import MyCollection from '../MyCollection/MyCollection';
//兑换
import Exchange from '../Exchange/Exchange';
//站内短消息
import ShortMessage from '../ShortMessage/ShortMessage';
import Message from '../Message/Message';
//设置
import Setting from '../Setting/Setting';


const {width, height} = Dimensions.get('window')

let cols = 4;
let cellH = 75;
let cellW = width / 4;
let vMargin = (width - cellW * cols) / (cols + 1) - 1;
export default class MineCellView extends Component{
    static contextType = {
        Data:PropTypes.Object
    };
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
              dataSource:ds.cloneWithRows(this.props.Data)
        };
      }
    render(){
        return(
            <View style={[styles.container,{ marginTop:this.props.line ?1:15}]}>
                {this.props.Title ?<View style={{borderBottomWidth:1,borderBottomColor:'#e8e8e8'}}>
                    <Text style={{fontSize:16,padding:10}}>{this.props.Title}</Text>
                </View> :null}
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(rowData,rowID) => this.renderRow(rowData,rowID)}
                    contentContainerStyle={styles.ListViewStyle}
                    enableEmptySections={true}
                />
            </View>
        )
    }

    renderRow(rowData) {
        return (
            <View style={styles.imageDataStyle}>
                <TouchableOpacity onPress={()=>this.pushToDetail(rowData.id)} underlayColor='transparent'>
                    <View style={{alignItems:'center',justifyContent:'center'}}>
                    <Image source={{uri:rowData.imgUrl}} style={styles.iconStyle}/>
                        <Text style={{alignSelf:'center',marginTop:8}}>{rowData.name }</Text>
                        {this.props.line ?<View style={{width:width-10,height:1,backgroundColor:'#e8e8e8',marginTop:5}}/>:null}
                    </View>

                </TouchableOpacity>
            </View>
        )
    }

    pushToDetail(data){

        switch (data){
            case 'TestWinIntegral':
               this.commonPush(TestWinIntegral,'考试赢积分')
                break;
            case 'Practice':
               this.commonPush(Practice,'练习')
                break;
             case 'DifficultConsolidate':
               this.commonPush(DifficultConsolidate,'难点巩固')
                break;
             case 'MyCollection':
               this.commonPush(MyCollection,'我的收藏')
                break;
             case 'Exchange':
               this.commonPush(Exchange,'兑换')
                break;
             case 'ShortMessage':
               this.commonPush(Message,'站内短消息')
                break;
             case 'Setting':
               this.commonPush(Setting,'设置')
                break;

        }
    }

    commonPush(component,title){
        const {navigator}= this.props
        InteractionManager.runAfterInteractions(()=>{
            navigator.push({
                component:component,
                title:title
            })
        })
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },

    ListViewStyle: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        width: width,
        marginTop:8
    },

    imageDataStyle: {
        width: cellW + 1,
        height: cellH,
        marginLeft: vMargin,
        justifyContent: 'center',
        flexWrap: 'wrap',
        backgroundColor: 'white',
        alignItems:'center'
    },

    iconStyle: {
        width: 30,// : cellW - vMargin * cols
        height: 30,// : 43
        resizeMode: 'cover',
    },

    categoryIcon:{

    }
})