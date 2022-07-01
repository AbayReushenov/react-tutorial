import {  createDraftSafeSelector } from "@reduxjs/toolkit";

import { RootState } from "..";

export const getPosts= (state: RootState) => state.posts;

export const selectPosts = createDraftSafeSelector(getPosts, state => {
  return state.posts;
});
