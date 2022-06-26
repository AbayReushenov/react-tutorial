import React from 'react';
import { Counter } from './modules/mobx/CounterOne/Counter';
import { state } from './modules/mobx/CounterOne/state';

import { Counter as CounterClass } from './modules/mobx/CounterClass/Counter';
import { storeClass as stateTwo } from './modules/mobx/CounterClass/Store';
import CounterClassDefault from './modules/mobx/CounterClassDefault/CounterClassDefault';
import { storeClass as stateThree } from './modules/mobx/CounterClassDefault/Store';

function App() {
  return (
    <div className='App'>
      <h2>Mobx counter</h2>
      <div className='kanteyner'>
        <Counter state={state} />
        <CounterClass state={stateTwo} />
        <CounterClassDefault state={stateThree} />
      </div>
    </div>
  );
}

export default App;
