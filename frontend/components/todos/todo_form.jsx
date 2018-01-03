import React from 'react';

import { uniqueId } from '../../util/unique_id';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const todo = Object.assign({}, this.state, { id: uniqueId()} );
    this.props.receiveTodo(todo);
    // Resets form
    this.setState({
      title: '',
      body: ''
    });
  }

  render() {
    return (
      <form className='todo-form' onSubmit={this.handleSubmit}>
        <h2>Create a New Todo Task:</h2>
        <input
          value={this.state.title}
          placeholder='Task Title (ex. feed cat)'
          onChange={this.update('title')}
          required />

        <textarea
          rows='10'
          cols='40'
          value={this.state.body}
          placeholder='Task Details (ex.organic cat food only!)'
          onChange={this.update('body')}
          required></textarea>

        <button className='create-button'>Create task</button>
      </form>
    );
  }
}
