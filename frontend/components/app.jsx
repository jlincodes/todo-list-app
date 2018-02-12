import React from 'react';
import TodoListContainer from './todos/todo_list_container';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Todo List App</h1>
        <TodoListContainer />

        <footer>
          <ul>
            <li>
              <a href="https://github.com/julielin0812/budget-breakdown-calculator">Github Project Repo</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/julielin0812/">LinkedIn</a>
            </li>
            <li>
              <a href="http://www.julielin.me/">Portfolio</a>
            </li>
          </ul>
        </footer>
      </div>
    );
  }
}
