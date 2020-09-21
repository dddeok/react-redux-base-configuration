import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('addTodo', (text: string) => {
  return { payload: text };
});
