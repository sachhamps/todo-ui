import { useSelector } from 'react-redux';
import { selectTodoEntities } from './slice';


export function TodoList() {
    console.log('Rendering List Component')
    const todos = useSelector(selectTodoEntities)

    return (
        <div>
            <h3>To Do List is:</h3>
            {Object.values(todos).map((todo: any) => <div key={todo.todoId}>{todo.todoSummary}</div>)}
        </div>
      );
}