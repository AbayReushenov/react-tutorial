import { AddCount, Count } from '../api/count';
import { AsyncApi } from '../api/count/AsyncApi';

export const addCountAsync = async (addCount: AddCount): Promise<Count> => {
  const { count } = await AsyncApi.post(addCount);
  return { count };
};
