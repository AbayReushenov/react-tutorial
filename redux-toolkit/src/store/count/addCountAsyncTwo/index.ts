import {createAsyncThunk} from '@reduxjs/toolkit'
import { AddCount, Count } from '../../../api/count';
import { AsyncApi } from '../../../api/count/AsyncApi';

export const addCountAsyncTwo= createAsyncThunk(
  'count/addCountAsyncTwo',
  async (addCount: AddCount): Promise<Count> => {
    const { count } = await AsyncApi.post(addCount);
    return { count };
  }
)
