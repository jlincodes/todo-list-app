import React from 'react';

import TodoListItem from './todo_list_item';
import TodoForm from './todo_form';

export default class TodoList extends React.Component {
  render() {
    const { todos, receiveTodo, removeTodo } = this.props;
    const todoItems = todos.map(todo => (
      <TodoListItem
        key={`todo-list-item${todo.id}`}
        todo={todo}
        receiveTodo={receiveTodo} />
    ));

    return (
      <div>
        <TodoForm receiveTodo={ receiveTodo }/>
        <h2>Todos:</h2>
        <ul className='todo-list'>
          {todoItems}
        </ul>
      </div>
    );
  }
}
