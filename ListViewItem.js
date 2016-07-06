import React, {Component} from 'react';
import {TouchableHighlight, View, Text} from 'react-native';
import CheckBox from './CheckBox';

class ListViewItem extends Component {
  constructor(props) {
    super(props);
    this._onCheckBoxPressed = this._onCheckBoxPressed.bind(this);
    this.state = {
      data: this.props.data
    }
  }

  _onCheckBoxPressed() {
    var data = this.state.data;
    data.completed = !data.completed;
    this.setState({
      data: data
    });

    this.props.onCompletedChange(data, this.props.dataIndex);
  }

  render() {
    let data = this.state.data;
    let dataIndex = this.props.dataIndex;
    let color = data.completed ? '#C5C8C9' : '#000';
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{paddingTop: 6, paddingBottom: 6, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox data={data} dataIndex={dataIndex} color={color} onCheckBoxPressed={this._onCheckBoxPressed}></CheckBox>
          <Text style={{fontSize:18, color: color}}>{data.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

module.exports = ListViewItem;
