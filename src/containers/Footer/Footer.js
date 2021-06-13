import React from 'react';
import {Filter} from "../../components/Filter/Filter";
import {useDispatch, useSelector} from "react-redux";
import {clearAllCompletedTodos} from "../../Redux/actions";
import {FooterButton, FooterCounter, FooterCounterStrong, FooterSection} from "./Footer.styles";

export const Footer = () => {
  const todos = useSelector(state => state.todosState.todos);
  const dispatch = useDispatch();

  const handleClick =() => {
    dispatch(clearAllCompletedTodos());
  }

  return (
      <FooterSection>
        <FooterCounter>
          {todos.filter(todo => !todo.completed).length}
          <FooterCounterStrong>items left</FooterCounterStrong>
        </FooterCounter>
        <Filter />
        <FooterButton
          type="button"
          className="clear-completed"
          onClick={handleClick}
        >
          Clear completed
        </FooterButton>
      </FooterSection>
    );

}
