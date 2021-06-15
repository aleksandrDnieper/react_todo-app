import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {setTodos} from "../../Redux/actions";
import GlobalStyle from "../../GlobalStyles";
import {TodoAppSection} from "../TodoApp/TodoApp.styles";
import {Header} from "../../containers/Header/Header";
import {MainSection} from "../../containers/MainSection/MainSection";
import {Footer} from "../../containers/Footer/Footer";

export const TodoApp = () => {
  const todos = useSelector(state => state.todosState.todos)
  const dispatch = useDispatch();

  useEffect(() => {
    const LocallySavedTodos = localStorage.getItem('todos');

    if (LocallySavedTodos) {
      const localTodos = JSON.parse(LocallySavedTodos);

      dispatch(setTodos(localTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <TodoAppSection>
        <Header />
        {
          todos.length > 0
            ? <>
              <MainSection />
              <Footer />
            </>
            : null
        }
      </TodoAppSection>
    </>
  );
}
