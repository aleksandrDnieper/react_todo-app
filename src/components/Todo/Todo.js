import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import {DivView, InputEdit, InputToggle, LabelToggle, TodoDeleteButton, TodoItem} from "./Todo.styles";
import {useDispatch} from "react-redux";
import {changeStatusTodo, deleteTodo, updateTitleTodo} from "../../Redux/actions";
import {useFocus} from "../../hooks/useFocus";
import {useMountEffect} from "../../hooks/useMountEffect";

export const Todo = ({todo: { title, id, completed }}) => {
  const dispatch = useDispatch();
  const [inputRef, setInputFocus] = useFocus();
  const [isEditEnabled, setIsEditEnabled] = useState(false);
  const [editingTitle, setEditingTitle] = useState(title);

  const handleClickDelete = (id) => {
    dispatch(deleteTodo(id));
  }

  const handleChangeStatus = (id) => {
    dispatch(changeStatusTodo(id));
  }

  const handleBlur = () => {
    setIsEditEnabled(false);
    updateTodo(false);
  }

  const handleKeyDown = (e) => {
    const newTitle = editingTitle.trim();

    if(e.key === 'Enter') {
      if(newTitle === '' || newTitle === title) {
        setIsEditEnabled(false);
        updateTodo(false);
      } else {
        setIsEditEnabled(false);
        updateTodo(true);
      }
    }

    if (e.key === 'Escape') {
      setIsEditEnabled(false);
      updateTodo(false);
    }
  }

  const updateTodo = (isNeedUpdate) => {
    if (isNeedUpdate) {
      const data = {
        id,
        title: editingTitle
      }

      dispatch(updateTitleTodo(data));
    } else {
      setEditingTitle(title);
    }
  }

  const handleEditInput = useCallback((e) => {
    const {value} = e.target;

    setEditingTitle(value);
  }, [editingTitle])

  useMountEffect(setInputFocus, isEditEnabled);

  return (
    <TodoItem
      className={cx({completed}, {editing: isEditEnabled})}
      onDoubleClick={() => setIsEditEnabled(true)}
    >
      <DivView>
        <InputToggle
          type="checkbox"
          checked={completed}
          onChange={() => handleChangeStatus(id)}
        />
        <LabelToggle
          htmlFor="label"
        >
          {title}
        </LabelToggle>
        <TodoDeleteButton
          type="button"
          onClick={() => handleClickDelete(id)}
        />
      </DivView>
      <InputEdit
        type="text"
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        onChange={handleEditInput}
        ref={inputRef}
        value={editingTitle}
      />
    </TodoItem>
    );
};

export const todoTypes = {
  id: PropTypes.string,
  completed: PropTypes.bool,
  title: PropTypes.string,
};

Todo.propTypes = {
  todo: PropTypes.shape(todoTypes).isRequired
};
