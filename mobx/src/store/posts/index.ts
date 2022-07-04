import { runInAction, makeAutoObservable } from 'mobx';

import { Post } from '../../api/posts';
import { fetchPosts } from './fetchPosts';

import { Error } from '../error/ErrorState';

interface PostState {
  state: Post[];
}

const initialState: PostState = {
  state: [],
};

export class PostStore {
  posts = initialState;
  error = Error.initialState;
  constructor() {
    makeAutoObservable(this);
  }
  async fetchPostAsync() {
    this.error = Error.pending;
    try {
      const posts = await fetchPosts();
      runInAction(() => {
        this.posts.state = posts;
        this.error = Error.done;
      });
    } catch (error) {
      runInAction(() => {
        this.error = Error.error;
      });
    }
  }
}
export const storePost = new PostStore();
