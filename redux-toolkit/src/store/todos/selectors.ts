import {  createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getTodos= (state: RootState) => state.todos;

export const selectTodos = createDraftSafeSelector(getTodos, state => {
  return state.todos;
});
