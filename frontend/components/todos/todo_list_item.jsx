import React from 'react';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // deconstruct props object
    const { todo } = this.props;
    // deconstruct todo object
    const { title, done } = todo;

    return (
      <li>{title}</li>
    );
  }
}
