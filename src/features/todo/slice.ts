import { createEntityAdapter, createSlice, current } from '@reduxjs/toolkit';


// let today = new Date().toLocaleDateString()
// turn into entity adapter
type Todo = {todoId: string, todoSummary: string, dateAdded: string}

// const todosEntityAdapter = createEntityAdapter<Todo>({
//     selectId: (todo) => todo.todoId,
//     sortComparer: (a, b) => a.dateAdded.localeCompare(b.dateAdded)
// })



const todosSlice = createSlice({
    name: 'todos',
    initialState: [] as Todo[],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
            console.log(current(state))
        }
    }
})

export const { addTodo } = todosSlice.actions

// export const todoSelector = todosEntityAdapter.getSelectors((state: any) => state.todos)

export const selectTodos = (state: any) => state.todos
export default todosSlice.reducer;