import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../template/AddTodo';

const Todo = ({ todos }) => {
  console.log(todos);
  return <AddTodo />;
};

function select(state) {
  return {
    todos: state.todos,
  };
}
export default connect(select)(Todo);
