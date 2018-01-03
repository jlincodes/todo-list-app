import React from 'react';

export default class TodoDetailView extends React.Component {
  render() {
    const {todo, removeTodo } = this.props;
    return (
      <div className='todo-detail'>
        <h4>Details:</h4>
        <p>{ todo.body }</p>
        <button
          className='delete-button'
          onClick={ removeTodo }>Delete</button>
      </div>
    );
  }
}
