import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addCountAsyncTwo } from './addCountAsyncTwo';
import { actions as actionsError } from '../error/error';

export interface CountState {
  count: number;
}

const initialState: CountState = {
  count: 0,
};

const count = createSlice({
  name: 'count',
  initialState,
  reducers: {
    plusCount: (state: CountState) => {
      state.count = state.count + 1;
    },
    minusCount: (state: CountState) => {
      state.count = state.count - 1;
    },
    addSomeCount: (state: CountState, action: PayloadAction<CountState>) => {
      state.count = state.count + action.payload.count;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCountAsyncTwo.pending, function () {
      actionsError.returnErrors({
        msg: { msg: 'Идет сохранение данных' },
        status: 'loading',
        id: null,
      });
    });
    builder.addCase(
      addCountAsyncTwo.fulfilled,
      (state: CountState, action: PayloadAction<CountState>) => {
        state.count = state.count + action.payload.count;
        actionsError.returnErrors({
          msg: { msg: null },
          status: 'resolved',
          id: null,
        });
      }
    );
    builder.addCase(addCountAsyncTwo.rejected, function (error: any) {
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: null,
      });
    });
  },
});

export const { actions, reducer } = count;
export const { addSomeCount, plusCount, minusCount } = actions;
