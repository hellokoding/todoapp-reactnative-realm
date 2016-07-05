import React, { Component } from 'react';
import Icon from  'react-native-vector-icons/MaterialIcons';

class CheckBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  _onCheckBoxPress() {
    var data = this.state.data;
    data.completed = !data.completed;
    this.setState({
      data: data
    })
  }

  render() {
    let iconName = this.state.data.completed ? 'check-box' : 'check-box-outline-blank';

    return (
      <Icon.Button
        data={this.state.data}
        name={iconName}
        backgroundColor='rgba(0,0,0,0)'
        color='#000'
        underlayColor='rgba(0,0,0,0)'
        size={20}
        iconStyle={{marginLeft: -10}}
        activeOpacity={1}
        borderRadius={5}
        onPress={() => this._onCheckBoxPress()}
      >
      </Icon.Button>
    );
  }
}

module.exports = CheckBox;
