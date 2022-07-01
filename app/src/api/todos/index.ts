import { axiosApi } from '../axiosApi';

export interface ToDo {
  userId: number;
  id: number;
  title: string;
  comleted: boolean;
}


export const todos = {
  get: async (): Promise<ToDo[]> => {
    const { data } = await axiosApi.get<ToDo[]>('/todos');
    return data;
  },
};
