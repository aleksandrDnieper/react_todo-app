import React, {Component} from 'react';
import {TodoList} from "../../components/TodoList/TodoList";
import {useDispatch, useSelector} from "react-redux";
import {toggleAllTodos} from "../../Redux/actions";
import {ButtonToggleAll, LabelToggleAll, SectionMain} from "./MainSection.styles";

export const MainSection = () => {
  const todos = useSelector(state => state.todosState.todos);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { checked } = e.target;

    dispatch(toggleAllTodos(checked));
  }

  const is_all_checked = todos.every(todo => todo.completed);

  return (
      <SectionMain className="main">
        <ButtonToggleAll
          type="checkbox"
          id="toggle-all"
          onChange={handleChange}
          checked={is_all_checked}
        />
        <LabelToggleAll htmlFor="toggle-all">Mark all as complete</LabelToggleAll>
        <TodoList/>
      </SectionMain>
    );
}
