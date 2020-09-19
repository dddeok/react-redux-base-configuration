import { combineReducers } from 'redux';

import todoReducer from '../features/todo/utils/reducer';
const rootReducer = combineReducers({
  todos: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
