import {
  RECEIVE_ALL_TODOS,
  RECEIVE_TODO,
  REMOVE_TODO } from '../actions/todo_actions';
import merge from 'lodash/merge';

// let defaultState = {};
// for testing
const initialState = {
  1: {
    id: 1,
    title: 'Buy groceries',
    body: 'bread, butter, cheese, eggs, soy milk, coffee',
    done: false
  },
  2: {
    id: 2,
    title: 'Clean apartment',
    body: 'sweep, vacuum',
    done: true
  },
  3: {
    id: 3,
    title: 'Take out trash',
    body: 'on Wednesday',
    done: false
  },
  4: {
    id: 4,
    title: 'Call Mom',
    body: 'or else...',
    done: true
  },
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
    case REMOVE_TODO:
      nextState = merge({}, state);
      delete nextState[action.todo.id];
      return nextState;
    default:
      return state;
  }
};

export default todosReducer;
