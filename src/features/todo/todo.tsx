import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, selectTodoEntities } from './slice';
import { TodoList } from './todo-list';

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function Todo() {
    const dispatch = useDispatch()
    const [todoSummary, setTodoSummary] = useState('');
    const [isSubmitted, setSubmission] = useState(false)
    const todos = useSelector(selectTodoEntities)

    // console.log("Rendering Todo Component")
    
    useEffect(() => {
      if(isSubmitted){
        dispatch(addTodo({todoId: uid(), todoSummary: todoSummary, dateAdded: new Date().toLocaleDateString()}))
        setTodoSummary('');
        setSubmission(false)
      }
    }, [isSubmitted]);

    return (
        <div>
        <input
          aria-label="Set todo summary"
          value={todoSummary}
          onChange={e => setTodoSummary(e.target.value)}
        />
        <button
          onClick={() => setSubmission(true)}
        >
          Add To Do
        </button>
        <TodoList />
      </div>
      );
}


