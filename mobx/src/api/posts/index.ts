import { axiosApi } from '../axiosApi';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const posts = {
  get: async (): Promise<Post[]> => {
    const { data } = await axiosApi.get<Post[]>('/posts');
    return data;
  },
};
