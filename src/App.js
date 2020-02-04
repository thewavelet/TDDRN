/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

class App extends Component {

  state = {
    items: []
  }

  onAdded = (text) => {
    this.setState({
      items: [
        {text, completed: false},
          ...this.state.items
      ]
    })
  }

  onCompleted = (index) => {
    this.setState({
      items: this.state.items.map((item, i) =>{
        if (index != i) return item;
        return {
          ...item,
          completed: !item.completed
        }
      })
    })
  }

  onDeleted = (index) => {
    this.setState({
      items: [...this.state.items.slice(0, index), ...this.state.items.slice(index+1)]
    });
  }

  render() {
    const {items} = this.state;
    return (
        <View testID="welcome" style={styles.body}>
          <Text>ToDo TDD</Text>
          <AddTodo onAdded={this.onAdded}></AddTodo>
          <TodoList items={items} onCompleted={this.onCompleted} onDeleted={this.onDeleted}></TodoList>
        </View>
    );

  }

};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
