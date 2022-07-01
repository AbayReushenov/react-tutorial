import { todos } from '.';

export class AsyncApi {
  static get = () => {
    return () => todos.get();
  };
}
