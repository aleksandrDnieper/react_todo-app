import React, { createRef, useCallback, useEffect, useState } from 'react';
import {useDispatch} from "react-redux";
import {addNewTodo} from "../../Redux/actions";
import { v4 as uuidv4 } from 'uuid';
import {FormInput, FormStyle} from "./Form.styles";


export const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const inputRef = createRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = useCallback((event) => {
    const { value } = event.target;

    setTitle(value);
  });

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim()) {
      return;
    }

    const todo = {
      id: uuidv4(),
      title,
      completed: false,
    };
    dispatch(addNewTodo(todo));

    setTitle('');
  };

  return (
    <FormStyle onSubmit={handleSubmit}>
      <FormInput
        placeholder="What needs to be done?"
        value={title}
        onChange={handleChange}
        ref={inputRef}
      />
    </FormStyle>
  );
};
