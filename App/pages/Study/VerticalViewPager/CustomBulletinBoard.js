import React, {Component, PropTypes} from 'react';
import {View, Text, Image, Dimensions, StyleSheet,TouchableOpacity, PixelRatio} from 'react-native';
import AnnounceDetail from '../AnnounceDetail';
import CustomViewPager from './CustomViewPager';

import news from './BulletinData';

import StudyModel from '../StudyModel/StudyModel'

export default class CustomBulletinBoard extends Component {

  constructor(props) {
    super(props);

    let dataSource = new CustomViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });

    this.state = {
      viewWidth: 0,
      viewHeight: 0,
      dataSource: dataSource.cloneWithPages({
        rowHasChanged: (r1, r2) => r1 !== r2,
      }),
    };

  }

  componentDidMount(){
    this.getInfoList()
  }

  getInfoList() {
    var params = {
      classid: 'be68990e-6985-4b7e-9620-6d9c31c9e683',
      page:'1',
      num:'3'
    };
    StudyModel.getInfoList(params,(res)=>{
        console.log(res)
        this.setState({dataSource: this.state.dataSource.cloneWithPages(res.infos)})
    },(err)=>{

    });
  }

  onLayout(event) {

    // 获取view的宽度
    let viewWidth = event.nativeEvent.layout.width;
    // 获取view的高度
    let viewHeight = event.nativeEvent.layout.height;

    // 若view的宽度或高度为空，或者宽高跟原来完全一样
    if (!viewWidth || !viewHeight || (this.state.viewWidth === viewWidth && this.state.viewHeight === viewHeight)) {
      return;
    }

    // 向state中更新最新的view宽度
    this.setState({
      viewWidth: viewWidth,
      viewHeight: viewHeight,
    });
  }

  getViewPagerPage(pageKey, pageIndex, data, viewPagerWidth, viewPagerHeight) {

    let typeStyle = {
      width: Math.min(Math.max(viewPagerWidth * 0.2, 40), 200),
    };

    let textStyle = {
      flex: 1,
      marginLeft: 5,
    };

    return (

      <View
        style={styles.viewPagerPage}
        key={pageKey}
      >
        <TouchableOpacity
          style={{flexDirection:'row',flex:1,backgroundColor:'#fff',padding:15,borderBottomWidth:1/PixelRatio.get(),borderBottomColor:'#efefef',alignItems:'center'}}
          onPress={()=>{
                    this.props.navigator.push({
                        component:AnnounceDetail
                    })
                }}>
          <Image style={{width:50,height:50}}
                 source={{uri:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=2528812214,2991140252&fm=80&w=179&h=119&img.GIF'}}/>
          <View style={{flexDirection:'row',flex:1,alignItems:'center',marginLeft:10}}>
            <View style={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:14,color:'#333333'}} numberOfLines={1}>{'习近平主持政治局会议六中全会召开'}</Text>
              <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
                <View style={{flexDirection:'row',flex:1,alignItems:'center',marginTop:5}}>
                  <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5,flex:1}}
                        numberOfLines={1}>{'公平简介介绍，文字好多,公平简介介绍，文字好多,公平简介介绍，文字好多,公平简介介绍，文字好多'}</Text>
                </View>
                <Text style={{fontSize:12,color:'#7f7f7f',marginRight:5,flex:1}}>{'2017-03-15'}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>



      </View>
    );
  }

  render() {

    let imgHeight = this.state.viewHeight * 0.6;
    let imgWidth = 4 * imgHeight;

    let imgStyle = {
      width: imgWidth,
      height: imgHeight,
      marginLeft: 6,
    };

    let dividerStyle = {
      width: 1,
      height: this.state.viewHeight * 0.8,
      marginLeft: 6,
      marginRight: 6,
    };

    let viewPagerStyle = {
      flex: 1,
      height: this.state.viewHeight * 0.9,
      marginRight: this.state.viewHeight * 0.1,
    };

    return (
      <View
        style={[this.props.style, styles.container]}
        onLayout={this.onLayout.bind(this)}
      >

        <CustomViewPager
          style={[styles.viewPager, viewPagerStyle]}
          dataSource={this.state.dataSource}
          renderPageIndicator={false}
          renderPage={this.getViewPagerPage.bind(this)}
          slideDirection='vertical'
          autoPlay={true}
          isLoop={true}
          slideIntervalMs={1500}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  img: {
  },
  divider: {
    backgroundColor: 'gray',
  },
  viewPager: {
  },
  viewPagerPage: {
    flex: 1,
  },
  viewPagerPageType: {
    textAlign: 'center',
    textAlignVertical: 'center',
    color: 'red',
    borderWidth: 1.5,
    borderColor: 'red',
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  viewPagerPageText: {
    textAlign: 'left',
    textAlignVertical: 'center',
  },
});
