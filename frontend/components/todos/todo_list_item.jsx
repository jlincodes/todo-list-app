import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { detail: false };
  }


  render() {
    // deconstruct props object
    const { todo } = this.props;
    // deconstruct todo object
    const { title, done } = todo;
    let detail;

    if (this.state.detail) {
      detail = todo.body;
    }

    console.log(todo.body);
    console.log('detail', detail);

    return (
      <li className='todo-task'>
        <div>
          <h3>
            {title}
          </h3>
          {detail}
        </div>
      </li>
    );
  }
}
