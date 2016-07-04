/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TodoListView from './TodoListView';

class TodoApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TodoListView></TodoListView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 10,
    marginLeft: 2,
    marginRight: 2,
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('TodoApp', () => TodoApp);
