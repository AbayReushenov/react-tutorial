import { AddCount, Count } from './index';

export class AsyncApi {
  static post(data: AddCount): Promise<Count> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
  }
}
