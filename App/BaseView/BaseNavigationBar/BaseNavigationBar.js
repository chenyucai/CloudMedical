/**
 * Created by leung on 2016/10/18.
 */
import React, {Component} from 'react';
import {
    StyleSheet,
    Image,
    Text,
    TouchableOpacity,
    View,
    Platform,
    StatusBar,
} from 'react-native';
import NavigationBar from 'react-native-navbar';

var TYPE = {
    _TEXT: 'text',
    _IMG: 'img'
}
var titleType = {
    _VIEW: 'view'
}
export default class BaseNavigationBar extends Component {
    /**
     * 标题： this.props.data.title
     * 左按钮： this.props.data.leftbtn  text---文字 img---图片  type---类型  onClick---响应
     * 右按钮:  this.props.data.rightbtn  text---文字 img---图片 type---类型  onClick---响应
     *
     */
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            issetLeft: false,
            issetRight: false,
        }
    }

    componentDidMount() {
        if (this.state.data != null) {
            if (this.props.data.leftbtn != null)
                this.setState({
                    issetLeft: true
                });
            else
                this.setState({
                    issetLeft: false,
                });
            if (this.props.data.rightbtn != null)
                this.setState({
                    issetRight: true
                });
            else
                this.setState({
                    issetRight: false,
                });
        }
    }

    render() {
        return (
            <View>
                <StatusBar
                    barStyle={'light-content'}
                />
                <NavigationBar
                    statusBar={Platform.OS == 'ios' ? {tintColor: '#23232E'} : {}}
                    title={this.selectTitle()}
                    style={{backgroundColor: '#23232E'}}
                    leftButton={
                        <TouchableOpacity style={{
                            height: 44,
                            width: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            if (this.state.issetLeft && this.state.data.leftbtn.onClick != null)
                                this.props.data.leftbtn.onClick();
                        }}>
                            {this.selectBtn(this.state.data.leftbtn)}
                        </TouchableOpacity>
                    }
                    rightButton={
                        <TouchableOpacity style={{
                            height: 44,
                            width: 50,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }} onPress={() => {
                            if (this.state.issetRight && this.state.data.rightbtn.onClick != null)
                                this.props.data.rightbtn.onClick();
                        }}>
                            {this.selectBtn(this.props.data.rightbtn)}
                        </TouchableOpacity>
                    }
                />
            </View>
        );
    }

    selectTitle() {
        if (this.state.data != null) {
            switch (this.props.data.titleType) {
                case 'view':
                    return (<View style={{
                        flex: 1,
                        marginLeft: 48,
                        marginRight: 48,
                    }}>{this.props.data.title}</View>);
                default:
                    return ({
                        title: (this.props.data.title == null ? "" : this.props.data.title),
                        tintColor: '#fff',
                        style: {fontSize: 16}
                    });
            }
        }
    }

    selectBtn(btn) {
        if (btn == null) {
            return null;
        } else {
            if (btn.type == 'text') {
                return (
                    <Text style={{
                        color: '#798385',
                        fontSize: 14
                    }}>{(btn.text == null ? "" : btn.text)}</Text>
                );
            } else if (btn.type == 'img') {
                return (
                    <Image style={{width: 22, height: 22, resizeMode: 'contain'}}
                           source={(btn.img == null ? require('./assets/icon_Return.png') : btn.img)}/>
                );
            }
        }
    }
}
BaseNavigationBar.TYPE = TYPE;
BaseNavigationBar.titleType = titleType;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
});
