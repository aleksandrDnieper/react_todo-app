import {
  CHANGE_STATUS_TODO,
  ADD_TODO,
  DELETE_TODO,
  SET_FILTER_TYPE,
  TOGGLE_STATUS_TODO,
  SET_TODOS,
  CLEAR_ALL_COMPLETED_TODOS, SET_EDIT_ID, UPDATE_TITLE_TODO
} from './types';

export function setTodos(todos) {
  return {
    type: SET_TODOS,
    payload: todos,
  };
}

export function addNewTodo(todo) {
  return {
    type: ADD_TODO,
    payload: todo,
  };
}

export function updateTitleTodo(obj) {
  return {
    type: UPDATE_TITLE_TODO,
    payload: obj,
  };
}

export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: id,
  };
}

export function changeStatusTodo(id) {
  return {
    type: CHANGE_STATUS_TODO,
    payload: id,
  };
}

export function toggleAllTodos(checked) {
  return {
    type: TOGGLE_STATUS_TODO,
    payload: checked
  };
}
export function clearAllCompletedTodos() {
  return {
    type: CLEAR_ALL_COMPLETED_TODOS
  };
}

export function setFilter(name) {
  return {
    type: SET_FILTER_TYPE,
    payload: name,
  };
}

