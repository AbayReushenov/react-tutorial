import { posts } from '.';

export class AsyncApi {
  static get = () => {
    return () => posts.get();
  };
}
