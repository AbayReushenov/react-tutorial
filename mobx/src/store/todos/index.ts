import { runInAction, makeAutoObservable } from 'mobx';

import { ToDo } from '../../api/todos';
import { fetchTodos } from './fetchTodos';

import { Error } from '../error/ErrorState';

interface TodosState {
  state: ToDo[];
}

const initialState: TodosState = {
  state: [],
};

export class TodosStore {
  todos = initialState;
  error = Error.initialState;
  constructor() {
    makeAutoObservable(this);
  }
  async fetchTodosAsync() {
    this.error = Error.pending;
    try {
      const todos = await fetchTodos();
      runInAction(() => {
        this.todos.state = todos;
        this.error = Error.done;
      });
    } catch (error) {
      runInAction(() => {
        this.error = Error.error;
      });
    }
  }
}
export const storeTodos = new TodosStore();
