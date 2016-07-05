import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import TodoModel from './TodoModel';
import OmniBox from './OmniBox';
import SortableListView from 'react-native-sortable-listview';
import CheckBox from './CheckBox';

let data = [
   new TodoModel('hello', false),
   new TodoModel('world', false),
];

var getOrder = function(list) {
  return Object.keys(list);
}

var todoListOrder = getOrder(data);

class TodoListView extends Component {
  constructor(props) {
    super(props);
    this.updateTodoList = this.updateTodoList.bind(this);
    this.state = {
      todoList: data
    }
  }

  updateTodoList(todoList) {
    this.setState({
      todoList: todoList
    });
    todoListOrder = getOrder(todoList);
  }

  _onRenderRow(todo) {
    return (
      <TouchableHighlight underlayColor={'#eee'} style={{padding: 10, backgroundColor: "#F8F8F8", borderBottomWidth:1, borderColor: '#eee'}} {...this.props.sortHandlers}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <CheckBox data={todo}></CheckBox>
          <Text style={{fontSize:18}}>{todo.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    let listView = (<View></View>);
    if (this.state.todoList.length) {
      listView = (
        <SortableListView
          ref='listView'
          style={{flex: 1}}
          data={this.state.todoList}
          order={todoListOrder}
          onRowMoved={(e) => {
            todoListOrder.splice(e.to, 0, todoListOrder.splice(e.from, 1)[0]);
            this.forceUpdate();
          }}
          renderRow={(todo) => this._onRenderRow(todo)}
        />
      );
    }

    return (
        <View style={{flex: 1}}>
          <OmniBox
            data={data}
            updateTodoList={this.updateTodoList}/>
          {listView}
        </View>
    )
  }
};

module.exports = TodoListView;
