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
      <form onSubmit={this.handleSubmit}>
        <label>Title:
          <input
            value={this.state.title}
            placeholder='feed cat'
            onChange={this.update('title')}
            required />
        </label>
        <label>Body:
          <textarea
            value={this.state.body}
            placeholder='organic cat food only!'
            onChange={this.update('body')}
            required></textarea>
        </label>
        <button className='create-button'>Create task</button>
      </form>
    );
  }
}
