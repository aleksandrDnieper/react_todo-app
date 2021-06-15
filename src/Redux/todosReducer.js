import {
  CHANGE_STATUS_TODO,
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_STATUS_TODO,
  SET_TODOS,
  CLEAR_ALL_COMPLETED_TODOS, UPDATE_TITLE_TODO
} from './types';
import produce from 'immer';


const initState = {
  todos: [],
};

export const todosReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_TODOS: {
      return {
        ...state,
        todos: state.todos.concat(action.payload),
      };
    }

    case ADD_TODO: {
      return produce(state, draft => { draft.todos.push(action.payload)});
    }

    case DELETE_TODO: {
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload),
      };
    }

    case UPDATE_TITLE_TODO: {
      const {id, title} = action.payload;

      return {
        ...state,
        todos: state.todos.map(todo => (todo.id !== id) ? todo : {
          ...todo,
          title
        }),
      };
    }

    case CHANGE_STATUS_TODO: {
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id !== action.payload) {
            return todo;
          }

          return {
            ...todo,
            completed: !todo.completed,
          };
        })
      };
    }

    case TOGGLE_STATUS_TODO: {
      return {
        ...state,
        todos: state.todos.map(todo => ({
          ...todo,
          completed: action.payload,
        }))
      };
    }

    case CLEAR_ALL_COMPLETED_TODOS: {
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed)
      };
    }

    default: return state;
  }
};
