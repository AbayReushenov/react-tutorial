import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { TodosStore } from '../../store/todos';
import { TodosFetch } from './TodosFetch';

interface Props {
  state: TodosStore;
}
export const TodosFetchByMobx: React.FC<Props> = observer(({ state }) => {

  useEffect(() => {
    state.fetchTodosAsync();
  },[state]);

  return <TodosFetch state={state} />;
});
