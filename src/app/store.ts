import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todo/slice';


export default configureStore({
    reducer: {
      todos: todosReducer,
    },
});
