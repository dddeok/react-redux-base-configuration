import React from 'react';
import { useSelector } from 'react-redux';
import { selectTodos } from '../utils/reducer';
import AddTodo from '../template/AddTodo';

const Todo = () => {
  const todos = useSelector(selectTodos);
  console.log(todos);
  return <AddTodo />;
};

export default Todo;
