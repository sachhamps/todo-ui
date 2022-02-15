import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoEntities, removeTodo } from './slice';
import '../../App.css'

// potentially use useCallback here
export const TodoList = React.memo(() => {
    const dispatch = useDispatch()
    console.log('Rendering List Component')
    const todos = useSelector(selectTodoEntities)
    console.log(Object.values(todos))

    return (    
        <div>
            <h3>To Do List is:</h3>
            <div>
            {
            Object.values(todos).map((todo: any) => 
                <div  className="card" key={todo.todoId}>{todo.todoSummary}
                    <div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.todoId))}
                        >
                        Remove
                        </button>
                    </div>
                </div>
            )
            }
            </div>
        </div>
      );
})