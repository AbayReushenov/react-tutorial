import { axiosApi } from '../axiosApi';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Posts {
  post: Post[];
}

export const posts = {
  get: async (): Promise<Posts> => {
    const { data } = await axiosApi.get<Posts>('/posts');
    return data;
  },
};
