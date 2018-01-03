import React from 'react';

export default class TodoDetailView extends React.Component {
  render() {
    const {todo, removeTodo } = this.props;
    return (
      <div>
        <p>{ todo.body }</p>
        <button onClick={ removeTodo }>Delete</button>
      </div>
    );
  }
}
