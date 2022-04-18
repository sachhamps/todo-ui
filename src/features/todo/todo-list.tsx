import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectTodoEntities, removeTodo } from './slice';
import '../../App.css'
import Button from 'react-bootstrap/Button';

// potentially use useCallback here
export const TodoList = React.memo(() => {
    const dispatch = useDispatch()
    console.log('Rendering List Component')
    const todos = useSelector(selectTodoEntities)
    console.log(Object.values(todos))

    return (    
        <div>
            <h3>-</h3>
            <div>
            {
            Object.values(todos).map((todo: any) => 
                <div className="todoitem" key={todo.todoId}>
                    {todo.todoSummary}
                    <div>
                        <Button variant="danger" className="btn"
                            onClick={() => dispatch(removeTodo(todo.todoId))}
                        >
                        Remove
                        </Button>
                    </div>
                </div>
            )
            }
            </div>
        </div>
      );
})