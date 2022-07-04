import React from 'react';
import { state } from './state/state';
import { storeClass } from './Store/Store';
import { CounterFC } from './apps/CounterFC/CounterFC';
import { CounterDisplay } from './apps/CounterDisplay/CounterDisplay';

import './App.css';
import { CounterClass } from './apps/CounterClass/CounterClass';
import CounterClassDefaultExport from './apps/CounterClassDefaultExport/CounterClassDefaultExport';
import { CounterFCwhereStoreIsClass } from './apps/CounterFCwhereStoreIsClass/CounterFCwhereStoreIsClass';
import { Precision } from './apps/common/helpers/Precision';
import { AddAnyNumber } from './apps/AddAnyNumber/AddAnyNumber';
import { AddAnyNumberWhereStoreIsClass } from './apps/AddAnyNumberWhereStoreIsClass/AddAnyNumberWhereStoreIsClass';

function App() {
  return (
    <div className='main'>
      <CounterDisplay state={state} store={storeClass} />
      <div className='container'>
        <CounterFC state={state} />
        <CounterFCwhereStoreIsClass state={storeClass} />
        <CounterClass state={storeClass} />
        <CounterClassDefaultExport state={storeClass} />
      </div>
      <div className='container'>
        <AddAnyNumber state={state}  precision={Precision.ZERO} />
        <AddAnyNumberWhereStoreIsClass state={storeClass}  precision={Precision.THREE} />
      </div>
    </div>
  );
}

export default App;
