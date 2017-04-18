/*
 * 视频播放
 */
'use strict';
import React, { Component } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    ActivityIndicator,
    Slider,
    BackAndroid,
    ViewPagerAndroid,
    InteractionManager,
    StatusBar
} from 'react-native';
import Video from 'react-native-video';
var { height, width } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationBar from 'react-native-navbar';
import ApiConst from '../../../Base/Urls/ApiConst';
import StudyModel from '../StudyModel/StudyModel';
import styleUtil from '../../../utils/styleutil';
class VideoPlay extends Component {
    video=Video
    constructor(props) {
        super(props);
        this.changeVideoFullScreen = this.changeVideoFullScreen.bind(this);
        this.renderNavigationBar = this.renderNavigationBar.bind(this);
        this.renderBottomView = this.renderBottomView.bind(this);
        this.collect = this.collect.bind(this);
        this.renderActivityIndicator = this.renderActivityIndicator.bind(this);
        this.state = {
            isToPortrait: true,//竖屏
            isFullScreen: true,//是否全屏
            isLoading: true,//是否正在加载
            rate: 1,//播放速率
            muted: false,//是否静音
            paused: true,
            resizeMode: 'cover',
            duration: 0.0,//总时长 单位秒
            currentTime: 0.01,//当前播放位置 单位秒
            movieName: "",
            collect: 'heart-o',
            stretch: true,
            score1: 75,
            score2: 85,
            score3: 59,
            url: 'http://newoss.maiziedu.com/pythonyyjc/pythonyyjc1.mp4',
            content:'',
            
        };
    }
    buttonBackAction() {
        if (this.state.isToPortrait) {
            this.props.navigator.pop()
        } else {
            this.setState({
                isToPortrait: true,
            })
            //Orientation.lockToPortrait();
        }

    }
    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
    componentDidMount() {
        this.getDetail();
    }

    getDetail() {
        var params = {
            classid: this.props.classid,
            id: this.props.id
        };
        StudyModel.getNewsDetail(params, (res) => {
            //alert(JSON.stringify(res.infos[0].ncontent))
            let rs = res.infos[0];
            this.setState({
                starturl: ApiConst.Versions().ImageBaseUrl + res.infos[0].nvideo.split(',')[0],
                content: res.infos[0].ncontent
            })
        }, (err) => {

        });
    }
    onBackAndroid() {
        this.buttonBackAction();
        return true;
    };
    collect() {
        if (this.state.collect == 'heart-o') {
            this.setState({
                collect: 'heart'
            })
        } else {
            this.setState({
                collect: 'heart-o'
            })
        }
    }
    componentWillUnmount() {
        //竖屏
        //Orientation.lockToPortrait();
        if (this.timeOutId) {
            clearTimeout(this.timeOutId);
        }
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid.bind(this));
    }
    onLoadStart= () => {
        this.setState({ isLoading: true });
    }
    onLoad= (data) => {
        this.setState({
            isLoading: false,
            duration: data.duration,
            paused:true
        });
    }

    onProgress= (data) => {
        this.setState({
            currentTime: data.currentTime
        });
    }
    videoError(){
        //alert('1')
    }
    onEnd= () => {
        this.setState({
            paused: true,
            currentTime: 0.0,
            isToPortrait: true,//竖屏
        });

        ///Orientation.lockToPortrait();
    }
    render() {
        const { isToPortrait, paused } = this.state;
        //alert(this.state.content)
        return (
            <View style={{ backgroundColor: '#fff', flex: 1 }}>
                {this.renderNavigationTop()}
                <View style={styles.container}>
                    <TouchableOpacity style={styles.videoContainer} activeOpacity={1}
                        onPress={() => this.changeVideoFullScreen(!this.state.isFullScreen)}>
                        <Video
                            ref={(ref: Video) => { this.video = ref }}
                            source={{ uri: this.state.url}}
                            style={styles.video}
                            rate={this.state.rate}
                            paused={this.state.paused}
                            volume={1}
                            muted={this.state.muted}
                            resizeMode={this.state.resizeMode}
                            onLoad={this.onLoad}
                            onProgress={this.onProgress.bind(this)}
                            onEnd={this.onEnd}
                            onError={this.videoError}
                            repeat={false} />
                    </TouchableOpacity>
                    {this.renderNavigationBar()}
                    {this.renderBottomView()}
                    {this.renderActivityIndicator()}
                </View>
                {isToPortrait ?
                    <View style={{ flex: 1.6,marginTop:20 }}>
                        
                        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
                            <View style={{ marginHorizontal: 15 }}>
                                <Text numberOfLines={this.state.stretch ? 2 : null} style={{ color: '#777', fontSize: 14,padding:2 }}>    {this.state.content}
                                </Text>
                            </View>
                            <TouchableOpacity
                                onPress={() => this.setState({ stretch: !this.state.stretch ,url:this.state.starturl})}>
                                <Text style={styles.a}>{this.state.stretch ? "展开" : "收起"}</Text>
                            </TouchableOpacity>
                        </ScrollView>

                    </View> : null}
            </View>
        );
    }
    renderNavigationTop() {
        var navTintColor = styleUtil.getNavTintColor();
        var titleTintColor = styleUtil.getTitleTintColor();
        var titleConfig = {
            title: '视频详情',
            tintColor: titleTintColor
        };
        var leftbutton = (
            <TouchableOpacity onPress={() => {
                this.props.navigator.pop()
            }}>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginLeft: 10, flex: 1 }}>
                    <Image style={{ width: 25, height: 25 }} source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }} />
                </View>
            </TouchableOpacity>);
        return (
            <View>
                <StatusBar
                    barStyle={'light-content'}
                    animated={true}
                    backgroundColor={navTintColor} />
                <NavigationBar tintColor={navTintColor}
                    title={titleConfig}
                    leftButton={leftbutton}
                />
            </View>)
    }
	/*playStart(){
		if(!this.state.paused || !this.state.isToPortrait){
			return null;
		}
		return(
		<TouchableOpacity onPress={() =>  this.setState({ paused: false })} > 
				<Icon name={"play-circle-o"} size={18} color="red" />
			</TouchableOpacity>
		);
	}*/
    renderActivityIndicator() {
        if (this.state.isLoading) {
            return (
                <ActivityIndicator color='white'
                    style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 }} />
            );
        }else{
           return (null); 
        }
        /*<TouchableOpacity onPress={onPress}>
                <Icon name={play-circle-o} size={18} color="white" />
            </TouchableOpacity>*/
    }

    renderNavigationBar() {
        if (!this.state.isToPortrait && this.state.isFullScreen && !this.state.paused) {
            return (<View></View>);
        }
        return (
            <View style={styles.navigationBarContainer}>
                <TouchableOpacity style={styles.leftButton} onPress={() => { this.buttonBackAction() }}>
                    <Image style={{ height: 18 }} source={{ uri: 'http://163.177.128.179:39241/772c290f07c6331c96729751dac9993f' }} resizeMode="contain" />
                </TouchableOpacity>
                <Text style={styles.navigationBarText}>{this.state.movieName}</Text>
            </View>
        );
    }
    renderBottomView() {
        if (this.state.isFullScreen && !this.state.paused) {
            return (<View></View>);
        }
        const { duration, currentTime, paused, isToPortrait } = this.state;
        return (
            <View style={styles.bottomProgressContainer}>
                <View style={isToPortrait ? styles.IconSpaceOne : styles.IconSpaceTwo}>
                    {paused ? this.TouchablePlay('play', () => this.setState({ paused: false }))
                        : this.TouchablePlay('pause', () => this.setState({ paused: true }))}
                </View>
                <Text style={styles.bottomText}>{this.getTimeStr(currentTime)}</Text>
                {/*如何改变进度条颜色*/}
                <Slider
                    value={currentTime}
                    step={1}
                    minimumValue={0}
                    maximumValue={duration}
                    onSlidingComplete={currentTime => this.seekTo(currentTime)}
                    style={{ flex: 1 }} />
                <Text style={styles.bottomText}>{this.getTimeStr(duration)}</Text>
                <View style={isToPortrait ? styles.IconSpaceOne : styles.IconSpaceTwo}>
                    {isToPortrait ? this.TouchablePlay('arrows-alt', () => { this.setState({ isToPortrait: false }) })
                        : this.TouchablePlay('compress', () => { this.setState({ isToPortrait: true }) })}
                </View>
            </View>
        );
    }

    TouchablePlay(IconName, onPress) {
        if (!this.state.isToPortrait) {
            return (
                <TouchableOpacity onPress={onPress}>
                    <Icon name={IconName} size={20} color="white" />
                </TouchableOpacity>
            )
        }
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={IconName} size={18} color="white" />
            </TouchableOpacity>
        );
    }
    TouchableLandscape(IconName, onPress) {
        return (
            <TouchableOpacity onPress={onPress}>
                <Icon name={IconName} size={21} color="white" />
            </TouchableOpacity>
        );
    }
    getTimeStr(timeInSecond) {
        let minute = Math.round(timeInSecond / 60) + '';
        let second = Math.round(timeInSecond % 60) + '';
        //补全两位
        let complete = str => str.length >= 2 ? str : str.length >= 1 ? `0${str}` : '00';
        return `${complete(minute)}:${complete(second)}`
    }

    seekTo(currentTime) {
        this.videoRef.seek(currentTime);
        this.setState({
            currentTime: currentTime,
            paused: false
        });
    }

    changeVideoFullScreen(isFullScreen) {
        if (this.timeOutId) {
            clearTimeout(this.timeOutId);
            this.timeOutId = undefined;
        }
        this.setState({
            isFullScreen
        });
        if (!isFullScreen && !this.state.paused) {
            //三秒后自动隐藏
            this.timeOutId = setTimeout(() => {
                this.setState({
                    isFullScreen: true
                });
            }, 3000);
        }
        this.setState({
            isFullScreen
        });
    }
};
const styles = StyleSheet.create({
    textziti: {
        fontSize: 12,
        color: '#fff'
    },
    centerbar: {
        height: 40,
        marginHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    centerleft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    centeright: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    a: {
        textAlign: 'center',
        fontSize: 18,
        marginTop: 10,
        marginBottom: 10,
        color: '#777'
    },
    naviTop: {
        height: 48, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'space-between'
    },
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'space-between'
    },
    videoContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    video: {
        flex: 1,
    },
    vtype: {
        padding: 6,
        borderRadius: 4,
        height: 47
    },
    navigationBarContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 36,
    },
    navigationBarText: {
        color: 'white',
        fontSize: 16
    },
    IconSpaceOne: {
        marginHorizontal: 10
    },
    IconSpaceTwo: {
        marginHorizontal: 20
    },
    leftButton: {
        justifyContent: 'center',
        height: 36
    },
    bottomProgressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#00000066',
        paddingVertical: 12,
    },
    bottomText: {
        color: 'white',
        fontSize: 14
    },
});
export default VideoPlay;