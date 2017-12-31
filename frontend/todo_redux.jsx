import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';

// for testing:
// import { receiveAllTodos, receiveTodo } from './actions/todo_actions';
// import App from './components/app';

import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const main = document.getElementById('main');

  // for testing
  // window.store = store;
  // window.receiveAllTodos = receiveAllTodos;
  // window.receiveTodo = receiveTodo;
  // ReactDOM.render(<App />, main);

  ReactDOM.render(<Root store={store}/>, main);
});
