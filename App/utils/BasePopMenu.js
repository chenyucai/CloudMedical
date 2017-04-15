import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Platform,
    Dimensions,
    ListView,
    Animated,
    Easing,
    BackAndroid
} from 'react-native';
import ParseJSON_Safe_Util from './ParseJSON_Safe_Util';

let GOBAL_WIDTH=Dimensions.get('window').width;
let GOBAL_HEIGHT=Dimensions.get('window').height;
export default class BasePopMenu extends Component {
    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });
        this.state = {
            isShowMenu: false,
            dataSource: ds.cloneWithRows([]),

            orgin_bottom: new Animated.Value(1),
        }
    }

    render() {
        return (
            this.state.isShowMenu ? this.renderPopMenu() : null
        );
    }

    setIsShowMenu(b) {
        this.setState({
            isShowMenu: b
        });
        if (b) {
            if (Platform.OS === 'android') {
                BackAndroid.addEventListener('hardwareBackPress', ()=> {
                    this.setIsShowMenu(false);
                    return true;
                })
            }
            ;
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(ParseJSON_Safe_Util.parseJSON_Safe_withDefaultValue(this.props.data, ['items'], [])),
            });
            Animated.parallel(['orgin_bottom'].map(property => {
                return Animated.timing(this.state[property], {
                    toValue: 0,
                    duration: 250,
                    easing: Easing.linear
                });
            })).start();
        } else {
            if (Platform.OS === 'android') {
                BackAndroid.addEventListener('hardwareBackPress', ()=> {
                    this.props.navigator.pop()
                    return true;
                })
            }
            this.state.orgin_bottom.setValue(1);
        }
    }

    renderPopMenu() {
        return (
			<View style={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				width: GOBAL_WIDTH,
				height: GOBAL_HEIGHT,
				backgroundColor: '#0009',
				justifyContent: 'flex-end'
			}}>
				<Animated.View style={{
					position: 'absolute',
					bottom: this.state.orgin_bottom.interpolate({
						inputRange: [0, 1],
						outputRange: [0, -40]
					}),
					left: 0,
					width: GOBAL_WIDTH,
					height: GOBAL_HEIGHT,
				}}>
					<TouchableOpacity style={{flex: 1}} onPress={()=> {
						this.setIsShowMenu(false);
					}}>
						<Text></Text>
					</TouchableOpacity>
					<View
						style={{
							maxHeight: GOBAL_HEIGHT * 2.0 / 3.0,
							backgroundColor: '#fff'
						}}>
                        {ParseJSON_Safe_Util.parseJSON_Safe(this.props.data, ['title']) == "" ? null :
							<View style={{
								width: GOBAL_WIDTH,
								height: 40,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Text
									style={{fontSize: 16}}>{ParseJSON_Safe_Util.parseJSON_Safe(this.props.data, ['title'])}</Text>
							</View>
                        }

						<ListView
							enableEmptySections={true}
							bounce={false}
							dataSource={this.state.dataSource}
							renderHeader={()=> {
							}}
							renderRow={(rowData, sectionID, rowID, highlightRow)=>this.rendereMenu_Item(rowData, rowID)}
						/>
					</View>
				</Animated.View>
			</View>
        );
    }

    rendereMenu_Item(rowData, rowID) {
        return (
			<TouchableOpacity
				style={{
					width: GOBAL_WIDTH,
					height: 41,
					justifyContent: 'center',
					paddingLeft: 10,
					paddingRight: 10
				}}
				onPress={()=> {
					var onClick = ParseJSON_Safe_Util.parseJSON_Safe(rowData, ['onClick']);
					if (onClick != '')
						onClick(rowData['idx']);
					this.setIsShowMenu(false)
				}}>
				<Text style={{fontSize: 16,}}
					  numberOfLines={1}>{ParseJSON_Safe_Util.parseJSON_Safe(rowData, ['text'])}</Text>
			</TouchableOpacity>
        );
    }
}