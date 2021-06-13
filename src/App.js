import React, { useEffect } from 'react';
import GlobalStyle from "./GlobalStyles";
import {Header} from "./containers/Header/Header";
import {TodoAppSection} from "./App.styles";
import {Footer} from "./containers/Footer/Footer";
import {useDispatch, useSelector} from "react-redux";
import {MainSection} from "./containers/MainSection/MainSection";
import {setTodos} from "./Redux/actions";


export const App = () => {
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
      <GlobalStyle />
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
};
