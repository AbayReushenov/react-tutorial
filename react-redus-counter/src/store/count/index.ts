import { createSlice, PayloadAction } from '@reduxjs/toolkit';

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
    addSomeCount: (
      state: CountState,
      action: PayloadAction<CountState>
    ) => {
      state.count = state.count + action.payload.count;
    },
  },
});

export const { actions, reducer } = count;
