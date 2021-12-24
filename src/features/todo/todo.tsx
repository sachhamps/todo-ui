import { useState } from 'react';
import { useDispatch, useSelector, useStore } from 'react-redux';
import { addTodo, selectTodos, selectTodoEntities } from './slice';

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function Todo() {
    const dispatch = useDispatch()
    const store = useStore()

    const [todoSummary, setTodoSummary] = useState('');
    const todos_entities = useSelector(selectTodoEntities)
    const todos = Object.values(todos_entities)

    return (
        <div>
        <input
          aria-label="Set increment amount"
          value={todoSummary}
          onChange={e => setTodoSummary(e.target.value)}
        />
        <button
          onClick={() =>
            dispatch(addTodo({todoId: uid(), todoSummary: todoSummary, dateAdded: new Date().toLocaleDateString()}))
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


