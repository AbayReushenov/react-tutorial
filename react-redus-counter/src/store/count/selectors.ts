import {  createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getCount = (state: RootState) => state.count;

export const selectCount = createDraftSafeSelector(getCount, state => {
  return state.count;
});
