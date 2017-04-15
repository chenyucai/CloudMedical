/**
 * component 行程日历
 */
import React, { Component } from 'react'
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions
} from 'react-native'

export default class CalendarComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  _renderMonth(){
    var months = [];
    for (var i = 0; i < 4; i++) {
      months.push(
        <View style={styles.month_item} key={i}>
          <View style={styles.month_header}>
            <Text style={styles.month_title}>2016年8月</Text>
          </View>
          <View style={styles.month_body}>
            {this._renderDay()}
          </View>
        </View>
      )
    }
    return months;
  }

  _renderDay(){
    var days = [];
    for (var i = 0; i < 31; i++) {
      if (i == 15) {
        days.push(
          <View style={styles.day_item} key={i}>
            <View style={[styles.day_text_container, styles.day_text_container_active]}>
              <Text style={[styles.day_text, styles.day_text_active]}>{i+1}</Text>
            </View>
          </View>
        );
      } else {
        days.push(
          <View style={styles.day_item} key={i}>
            <View style={styles.day_text_container}>
              <Text style={styles.day_text}>{i+1}</Text>
            </View>
          </View>
        );
      }

    }
    return days;
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <Text style={styles.header_item}>日</Text>
          <Text style={styles.header_item}>一</Text>
          <Text style={styles.header_item}>二</Text>
          <Text style={styles.header_item}>三</Text>
          <Text style={styles.header_item}>四</Text>
          <Text style={styles.header_item}>五</Text>
          <Text style={styles.header_item}>六</Text>
        </View>

        <View style={styles.body}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {this._renderMonth()}
          </ScrollView>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper:{
    backgroundColor:'#fff',
    height:340
  },
  header:{
    height:40,
    marginHorizontal:12,
    borderBottomColor:'#d7d7d7',
    borderBottomWidth:0.5,
    flexDirection:'row',
    alignItems:'center'
  },
  header_item:{
    flex:1,
    textAlign:'center',
    fontSize: 14,
    color:'#B8B8B8'
  },
  body:{
    flex:1
  },
  month_header:{
    paddingVertical: 20,
    alignItems:'center'
  },
  month_header_title:{
    fontSize: 16,
    fontWeight: '500'
  },
  month_body:{
    flexDirection:'row',
    flexWrap:'wrap',
    paddingHorizontal:12
  },
  day_item:{
    width: (Dimensions.get('window').width - 24) / 7,
    height: 38,
    alignItems:'center',
    justifyContent:'center'
  },
  day_text_container:{
    borderRadius: 20,
    width:26,
    height: 26,
    alignItems:"center",
    justifyContent:'center'
  },
  day_text:{
    fontSize: 14
  },
  day_text_container_active:{
    backgroundColor:'#FF6D99',
    borderColor:'#D9BD8C',
    borderWidth:1
  },
  day_text_active:{
    color:'#fff'
  }
});
