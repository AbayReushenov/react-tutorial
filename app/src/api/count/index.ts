import { AsyncApi } from './AsyncApi';

export interface Count {
  count: number;
}
export interface AddCount {
  count: number;
}
export const count = {
  add: async (addCount: AddCount): Promise<Count> => {
    const { count } = await AsyncApi.post(addCount);
    return { count };
  },
};
