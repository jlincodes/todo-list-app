import React from 'react';

import TodoListItem from './todo_list_item';

export default class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo}/>
    ));

    return (
      <div>
        <ul>
          {todoItems}
        </ul>
      </div>
    );
  }
}
