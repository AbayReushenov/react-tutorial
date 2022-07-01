import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ToDo } from '../../api/todos';
import {fetchTodos} from './fetchTodos'
import { actions as actionsError } from '../error/error';

interface TodosState {
  todos: ToDo[]
}

const initialState: TodosState = {
  todos: []
};

const todos = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, function () {
      actionsError.returnErrors({
        msg: { msg: 'Идет сохранение данных' },
        status: 'loading',
        id: null,
      });
    });
    
    builder.addCase(
      fetchTodos.fulfilled,
      (state: TodosState, action: PayloadAction<ToDo[]>) => {
        state.todos = action.payload;
        actionsError.returnErrors({
          msg: { msg: null },
          status: 'resolved',
          id: null,
        });
      }
    );


    builder.addCase(fetchTodos.rejected, function (error: any) {
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: null,
      });
    });
  },
});

export const { actions, reducer } = todos;
