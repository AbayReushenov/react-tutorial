import { useSelector } from 'react-redux';
import { selectTodos } from '../../store/todos/selectors';
import { Todo } from './Todo/Todo';

export const  Todos=()=> {
  const todos = useSelector(selectTodos);

  return (
    <div className='box box-lists'>
      <h1 className='red'>Functional component Thunk</h1>

      <h1>Todos</h1>
      <div className='todos'>
        {todos && todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
}
