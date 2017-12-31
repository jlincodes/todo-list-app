import {
  RECEIVE_ALL_TODOS,
  RECEIVE_TODO
} from '../actions/todo_actions';
import merge from 'lodash/merge';

let defaultState = {};

const todosReducer = (state = defaultState, action) => {
  Object.freezeState(state);
  switch (action.type) {
    case RECEIVE_ALL_TODOS:
      return action.todos;
    case RECEIVE_TODO:
      return merge({}, state, {[action.todo.id]: action.todo});
    default:
      return state;
  }
};

export default todosReducer;
