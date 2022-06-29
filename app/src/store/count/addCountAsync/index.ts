import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { SagaIterator } from 'redux-saga';
import { apply, put,  takeLatest } from 'redux-saga/effects';

import { api } from '../../../api';
import { actions as actionsError } from '../../error/error';
import { actions as actionsCount } from '../';

interface Payload {
  count: number;
}

export const addSomeCountAsync = createAction<Payload>('addSomeCountAsync');

function* addSomeCountWorker(
  action: PayloadAction<Payload>
): SagaIterator<void> {

  try {
    const count = yield apply(api, api.count.add, [action.payload]);
    yield put(actionsCount.addSomeCount(count));
  } catch (error: any) {
    yield put(
      actionsError.returnErrors({
        msg: error.response.data,
        status: error.response.status,
        id: null,
      })
    );
  }
}

export function* watchSomeCount(): SagaIterator<void> {
  yield takeLatest(addSomeCountAsync.type, addSomeCountWorker);
}
