import store from '../../app/store'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectTodos } from './slice';

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function Todo() {
    const dispatch = useDispatch()
    const [todoSummary, setTodoSummary] = useState('');
    const todos = useSelector(selectTodos)

    return (
        <div>
        <input
          aria-label="Set increment amount"
          value={todoSummary}
          onChange={e => setTodoSummary(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTodo({todoId: uid(), todoSummary: todoSummary, dateAdded: 'b'}))
          }
        >
          Add To Do
        </button>
        <div>
            <h3>To Do List is:</h3>
            {todos.map((todo: any) => <div key={todo.todoId}>{todo.todoSummary}</div>)}
        </div>
      </div>
      );
}


