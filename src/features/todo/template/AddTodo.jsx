import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../utils/action';

const AddTodo = ({ dispatch }) => {
  const [input, setInput] = useState('');

  function handleAddTodo() {
    dispatch(addTodo(input));
    setInput('');
  }

  return (
    <div>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default connect()(AddTodo);
