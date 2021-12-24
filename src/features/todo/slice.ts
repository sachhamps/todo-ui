import { createEntityAdapter, createSlice, current, PayloadAction } from '@reduxjs/toolkit';


interface Todo {todoId: string, todoSummary: string, dateAdded: string}

// entity adapter
const todosEntityAdapter = createEntityAdapter<Todo>({
    selectId: (todo) => todo.todoId,
    sortComparer: (a, b) => a.dateAdded.localeCompare(b.dateAdded)
})

const todosSlice = createSlice({
    name: 'todos',
    initialState: todosEntityAdapter.getInitialState(),
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            todosEntityAdapter.addOne(state, action.payload)
            console.log(current(state))
        }
    }
})

// action
export const { addTodo } = todosSlice.actions

// selectors
export const selectTodos = (state: any) => state.todos

export const selectTodoEntities = todosEntityAdapter.getSelectors(selectTodos).selectEntities

// reducer
export default todosSlice.reducer;