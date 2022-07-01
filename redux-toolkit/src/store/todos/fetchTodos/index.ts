import { createAsyncThunk } from '@reduxjs/toolkit';
import { AsyncApi } from '../../../api/todos/AsyncApi';

export const fetchTodos = createAsyncThunk('todos/fetchTodos', AsyncApi.get());
