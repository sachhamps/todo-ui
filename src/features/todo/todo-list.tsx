import { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { Map } from 'typescript';
import { addTodo, selectTodos, selectTodoEntities } from './slice';


// Here rennder out just the list
// it should only render when we submit a new todo-item
// and NOT when we just input something into the input box

// use 'useEffect' and 'useCallback' to implement this

export function TodoList({getTodoEntities}: any) {
    console.log('Rendering')
    const todos_entities = useSelector(selectTodoEntities)
    const todos = Object.values(todos_entities)


    return (
        <div>
            <h3>To Do List is:</h3>
            {todos.map((todo: any) => <div key={todo.todoId}>{todo.todoSummary}</div>)}
        </div>
    );
}