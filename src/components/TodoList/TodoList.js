import React, {useCallback, useMemo} from 'react';
import { Todo } from '../Todo/Todo';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from "react-redux";
import {Data} from "../../constants/data";
import {TodosList} from "./TodoList.styles";

export const TodoList = () => {
  const todos = useSelector(state => state.todosState.todos);
  const filter_type = useSelector(state => state.filterState.filter_type);

  const visibleTodos = useCallback((type) => {
    switch (type) {
      case Data.active:
        return todos.filter(todo => !todo.completed);

      case Data.completed:
        return todos.filter(todo => todo.completed);

      default:
        return todos;
    }
  }, [todos]);

  const filteredTodos = visibleTodos(filter_type);

  return (
    <TodosList>
      {
        filteredTodos.map(todo => (
          <Todo
            key={uuidv4()}
            todo={todo}
          />
        ))
      }
    </TodosList>
    )
};
