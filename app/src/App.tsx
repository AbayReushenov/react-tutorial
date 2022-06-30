import React from 'react';
import './App.css';
import { AddAnyNumber } from './AddAnyNumber/AddAnyNumber';
import { Precision } from './common/helpers/Precision';
import { Counter } from './Counter/Counter';
import { CounterCurrentState } from './CounterCurrentState/CounterCurrentState';
import AddAnyNumberClassComponent from './AddAnyNumberClassComponent/AddAnyNumberClassComponent';
import CounterClass from './CounterClass/CounterClass';
import { AddAnyNumberAsyncSaga } from './AddAnyNumberAsyncSaga/AddAnyNumberAsyncSaga';
import { AddAnyNumberAsyncReduxToolKit } from './AddAnyNumberAsyncReduxToolKit/AddAnyNumberAsyncReduxToolKit';

function App() {
  return (
    <div className='main'>
      <CounterCurrentState />
      <div className='container'>
        <Counter />
        <CounterClass />
        <AddAnyNumber precision={Precision.ZERO} />
        <AddAnyNumberClassComponent precision={Precision.TWO} />
      </div>
      <div className='container'>
        <AddAnyNumberAsyncSaga precision={Precision.THREE} />
        <AddAnyNumberAsyncReduxToolKit precision={Precision.TWO}/>
      </div>
    </div>
  );
}

export default App;
