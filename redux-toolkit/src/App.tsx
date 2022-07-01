import React from 'react';
import './App.css';
import { AddAnyNumber } from './apps/AddAnyNumber/AddAnyNumber';
import { Precision } from './apps/common/helpers/Precision';
import { Counter } from './apps/Counter/Counter';
import { CounterCurrentState } from './apps/CounterCurrentState/CounterCurrentState';
import AddAnyNumberClassComponent from './apps/AddAnyNumberClassComponent/AddAnyNumberClassComponent';
import CounterClass from './apps/CounterClass/CounterClass';
import { AddAnyNumberAsyncSaga } from './apps/AddAnyNumberAsyncSaga/AddAnyNumberAsyncSaga';
import { AddAnyNumberAsyncReduxToolKit } from './apps/AddAnyNumberAsyncReduxToolKit/AddAnyNumberAsyncReduxToolKit';
import AddAnyNumberClassComponentV2 from './apps/AddAnyNumberClassComponentV2/AddAnyNumberClassComponentV2';
import { PostsFetchBySaga } from './apps/PostsFetchBySaga/PostsFetchBySaga';
import { TodosFetchByThank } from './apps/TodosFetchByThank/TodosFetchByThank';



function App() {
  return (
    <div className='main'>
      <CounterCurrentState />
      <div className='container'>
        <CounterClass />
        <AddAnyNumberClassComponent precision={Precision.TWO} />
        <AddAnyNumberClassComponentV2 precision={Precision.ZERO}/>
      </div>
      <div className='container'>
        <Counter />
        <AddAnyNumber precision={Precision.ZERO} />
        <AddAnyNumberAsyncSaga precision={Precision.THREE} />
        <AddAnyNumberAsyncReduxToolKit precision={Precision.TWO}/>
      </div>
      <div className='container'>
        <PostsFetchBySaga/>
        <TodosFetchByThank/>
      </div>
    </div>
  );
}

export default App;
