import {
  RECEIVE_ALL_TODOS,
  RECEIVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

// let defaultState = {};
// for testing
const initialState = {
  1: {
    id: 1,
    title: 'wash car',
    body: 'with soap',
    done: false
  },
  2: {
    id: 2,
    title: 'wash dog',
    body: 'with dog shampoo',
    done: true
  }
};

const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      // does not merge the old `todos` with the new `todos`
      nextState = {};
      action.todos.forEach(function(todo) {
        nextState[todo.id] = todo;
      });
      return nextState;
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }
};

export default todosReducer;
