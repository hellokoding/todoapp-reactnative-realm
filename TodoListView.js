import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import SortableListView from 'react-native-sortable-listview';
import CheckBox from './CheckBox';

let data = {
  hello: {text: 'world', completed: false},
  how: {text: 'are you', completed: false}
}

let order = Object.keys(data); //Array of keys

class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: data
    }
  }

  _onRowMoved(e) {
    order.splice(e.to, 0, order.splice(e.from, 1)[0]);
    this.forceUpdate();
  }

  _onRenderRow(todo) {
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{padding: 10, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox data={todo}></CheckBox>
          <Text style={{fontSize:18}}>{todo.text}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return <SortableListView
          ref='listView'
          style={{flex: 1}}
          data={this.state.todoList}
          order={order}
          onRowMoved={(e) => this._onRowMoved(e)}
          renderRow={(todo) => this._onRenderRow(todo)}
        />
  }
};

module.exports = TodoListView;
