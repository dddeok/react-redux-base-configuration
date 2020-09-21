import { createReducer } from '@reduxjs/toolkit';
import { addTodo } from './action';
import { RootState } from '../../../app/rootReducer';

interface InitialState {
  todos: string[];
}
const initialState: InitialState = {
  todos: [],
};

const reducer = createReducer(initialState, {
  [addTodo.type]: (state, action: ReturnType<typeof addTodo>) => {
    const text = action.payload;
    state.todos.unshift(text);
  },
});
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       });
//     default:
//       return state;
//   }
// }

export default reducer;

export const selectTodos = (state: RootState) => state.todos.todos;
