import React, { useCallback } from "react";
import { useSelector } from 'react-redux';
import { selectTodoEntities } from './slice';


// potentially use useCallback here
export const TodoList = React.memo(() => {
    console.log('Rendering List Component')
    const todos = useSelector(selectTodoEntities)
    console.log(Object.values(todos))

    return (
        <div>
            <h3>To Do List is:</h3>
            <div>
            {Object.values(todos).map((todo: any) => <div key={todo.todoId}>{todo.todoSummary}</div>)}
            </div>
        </div>
      );
})