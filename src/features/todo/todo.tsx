import { useState } from 'react';
import { useDispatch, } from 'react-redux';
import { addTodo } from './slice';

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function Todo() {
    const dispatch = useDispatch()
    const [todoSummary, setTodoSummary] = useState('');
    console.log("Rendering Todo Component")

    return (
        <div>
        <input
          aria-label="Set todo summary"
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
      </div>
      );
}


