import React, {Component} from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
    renderItem = ({item, index}) => {
        const {onCompleted, onDeleted} = this.props;
        return (<TodoItem item={item} index={index} onCompleted={onCompleted} onDeleted={onDeleted}></TodoItem>);
    }

    keyExtractor = (item, index) => {
        return index.toString();
    }

    render() {
        const {items} = this.props;
        return (
            <FlatList
            testID="todoList"
            data={items}
            renderItem={this.renderItem}
            keyExtractor={this.keyExtractor}
            extraData={this.state}>

            </FlatList>
        );
    }
}
