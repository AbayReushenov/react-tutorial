import React from 'react';
import { observer } from 'mobx-react';
import { TodosStore } from '../../store/todos';
import { Todo } from './Todo/Todo';

interface Props {
  state: TodosStore;
}
export const TodosFetch: React.FC<Props> = observer(({ state }) => {
  const todos = state.todos.state;
  return (
    <div className='box box-lists'>
      <h1 className='red'>Functional component Mobx</h1>

      <h1>Todos</h1>
      <div className='todos'>
        {todos && todos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </div>
  );
});
