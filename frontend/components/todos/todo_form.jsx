import React from 'react';

export default class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      done: false
    };
  }

  render() {
    return (
      <form>
        <label>Title:
          <input
            value={this.state.title}
            placeholder='feed cat'
            required />
        </label>
        <label>Body:
          <textarea
            value={this.state.body}
            placeholder='organic cat food only!'
            required></textarea>
        </label>
        <button className='create-button'>Create task</button>
      </form>
    );
  }
}
