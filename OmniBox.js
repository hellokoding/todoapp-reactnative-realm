import React, { Component } from 'react';
import {
  TextInput,
  StyleSheet
} from 'react-native';
import TodoModel from './TodoModel';
import Utils from './Utils';

class OmniBox extends Component {
  constructor(props) {
    super(props);
    this.onAddTodoChange = this.onAddTodoChange.bind(this);
    this.onAddTodoKeyPress = this.onAddTodoKeyPress.bind(this);
  }

  componentWillMount() {
    this.setState({
      newToDoText: ''
    });
  }

  onAddTodoChange(event){
    var title = event.nativeEvent.text;
    var todoList = this.props.data.filter((item) => item.title.match(new RegExp('.*' + title +'.*', 'gi')));

    this.setState({
      newToDoText: title
    });
    this.props.updateTodoList(todoList);
  }

  onAddTodoKeyPress(event){
    if (event.nativeEvent.key == 'Enter' && this.state.newToDoText) {
      var newTodo = new TodoModel(this.state.newToDoText);

      var todoList = this.props.data;
      var todo = Utils.findTodo(newTodo, todoList);
      if(todo) {
        todo.order = todoList[0].order - 1;
        Utils.move(todoList, (todoList.indexOf(todo)), 0);

        this.setState({
          newToDoText: ''
        });
        this.props.updateTodoList(todoList);
        return;
      }

      todoList.unshift(newTodo);
      //TodoAPI.add(newTodo);

      this.setState({
        newToDoText: ''
      });
      this.props.updateTodoList(todoList);
    }
  }

  render() {
    return (
      <TextInput style={styles.addTodo}
        placeholder='Add a todo or Search'
        autoFocus={true}
        blurOnSubmit={false}
        value={this.state.newToDoText}
        onKeyPress={this.onAddTodoKeyPress}
        onChange={this.onAddTodoChange}>
      </TextInput>
    );
  }
}

const styles = StyleSheet.create({
  addTodo: {
    height: 36,
    padding: 4,
    marginBottom: 15,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  }
});

module.exports = OmniBox;
