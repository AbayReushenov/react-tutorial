import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Post } from '../../api/posts';

interface PostsState {
  posts: Post[]
}

const initialState: PostsState = {
  posts: []
};

const posts = createSlice({
  name: 'count',
  initialState,
  reducers: {
    fillPosts: (state: PostsState, action: PayloadAction<PostsState>) => {
      state.posts = action.payload.posts;
    },
  }
});

export const { actions, reducer } = posts;
