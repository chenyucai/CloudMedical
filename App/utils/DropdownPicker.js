import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableHighlight,
  Alert,
  Dimensions
} from 'react-native';
import ModalDropdown from 'react-native-modal-dropdown';
let GOBAL_HEIGHT= Dimensions.get('window').height;
export default class DropdownPicker extends Component {
  length = 0 ;
  constructor(props) {
    super(props);
    this.state= {
      selectText: this.props.selectText ,//== null ? '选择' : this.props.selectText,
      dropdownHeight: (this.props.options.length * this.props.pickerHeight + this.props.options.length)>(GOBAL_HEIGHT-132)?(GOBAL_HEIGHT-132):(this.props.options.length * this.props.pickerHeight + this.props.options.length),
    }
    this.length = this.props.options.length;
  }
  componentWillReceiveProps(next) {
    this.props = next;
    if(this.length == this.props.options.length){
      this.state = {
        selectText: this.props.selectText == null ? '选择' : this.props.selectText,
        dropdownHeight: (this.props.options.length * this.props.pickerHeight + this.props.options.length)>(GOBAL_HEIGHT-132)?(GOBAL_HEIGHT-132):(this.props.options.length * this.props.pickerHeight + this.props.options.length),
      }
      return;
    }else{
      this.length = this.props.options.length;
    }
    this.state = {
      dropdownHeight: (this.props.options.length * this.props.pickerHeight + this.props.options.length)>(GOBAL_HEIGHT-132)?(GOBAL_HEIGHT-132):(this.props.options.length * this.props.pickerHeight + this.props.options.length),
      selectText: this.props.selectText == null ? '选择' : this.props.selectText,
    }
  }
  Selected(index){
    this.setState({
      selectText:this.props.options[index]
    });
    this.props.Selected && this.props.Selected(index);
  }
  hideAndShowChose(isChose){
    if(isChose){
      return(<Image style={{width: 20, height:20,}} source={{uri: 'icon_chose'}}>
      </Image>);
    }else{
      return null;
    }
  }
  _dropdown_2_renderRow(rowData, rowID, highlighted) {
    let evenRow = rowID % 2;
    return (
      <TouchableHighlight >
          <View style={[styles.dropdown_2_row, { paddingHorizontal:10,height: this.props.pickerHeight}]}>
              <Text style={{flex:1,fontSize:14,color:'#555555'}}>
                {this.props.options[rowID]}
              </Text>
            {this.hideAndShowChose(highlighted)}
          </View>
      </TouchableHighlight>
    );
  }
  _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    if (rowID == this.props.options.length - 1) return;
    let key = `spr_${rowID}`;
    return (<View style={{height: 1,backgroundColor: '#eee'}}
                  key={key}
    />);
  }
  render() {
    return (
      <View style={[styles.container,{width:this.props.pickerWidth}]}>
          <View style={[styles.row,{width:this.props.pickerWidth}]}>
              <View style={[styles.cell,{ width:this.props.pickerWidth,}]}>
                  <ModalDropdown
                    style={[styles.dropdown_2,{width: this.props.pickerWidth,backgroundColor:this.props.backColor},this.props.OutStyle,
                            ]}
                    textStyle={styles.dropdown_2_text}
                    dropdownStyle={{width: this.props.pickerWidth,height:this.state.dropdownHeight}}
                    options={this.props.options}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}
                    onSelect={(index)=>this.Selected(index)}
                  >
                      <View style={{width:this.props.pickerWidth,height:this.props.pickerHeight,flexDirection:'row',alignItems:'center',paddingLeft:15,paddingRight:20,justifyContent:'center'}}>
                          <Text style={{fontSize:14,marginRight:10,flex:this.props.flexOnItem,textAlign:this.props.textAlign}}>{this.state.selectText}</Text>
                          <Image style={{width: 16.5, height:8.5,}} source={{uri: 'icon_down'}}/>
                      </View>
                  </ModalDropdown>
              </View>
          </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderRadius:3,
    alignItems:'center',
    justifyContent:'center'
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
  },
  dropdown_2: {
    alignSelf: 'flex-end',
    borderWidth: 0,
  },
  dropdown_2_text: {
    marginVertical: 10,
    marginHorizontal: 10,
    fontSize: 14,
    color: '#555555',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  dropdown_2_row: {
    flex:1,
    backgroundColor:'#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center'
  },
  dropdown_2_row_text: {
    marginHorizontal: 4,
    fontSize: 16,
    color: 'navy',
    textAlignVertical: 'center',
    textAlign:'center'
  },
  dropdown_2_separator: {
    height: 1,
    backgroundColor: '#666666',
  }
});
