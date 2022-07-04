import React from 'react';
import { state } from './state/state';
import { storeClass } from './Store/Store';
import { storeClass as storeAsync } from './storeAsync/storeAsync';
import { CounterFC } from './apps/CounterFC/CounterFC';
import { CounterDisplay } from './apps/CounterDisplay/CounterDisplay';

import './App.css';
import { CounterClass } from './apps/CounterClass/CounterClass';
import CounterClassDefaultExport from './apps/CounterClassDefaultExport/CounterClassDefaultExport';
import { CounterFCwhereStoreIsClass } from './apps/CounterFCwhereStoreIsClass/CounterFCwhereStoreIsClass';
import { Precision } from './apps/common/helpers/Precision';
import { AddAnyNumber } from './apps/AddAnyNumber/AddAnyNumber';
import { AddAnyNumberStoreClass } from './apps/AddAnyNumberStoreClass/AddAnyNumberStoreClass';
import { AddAnyNumberClassComponent } from './apps/AddAnyNumberClassComponent/AddAnyNumberClassComponent';
import { AddAnyNumberClassComponentStoreClass } from './apps/AddAnyNumberClassComponentStoreClass/AddAnyNumberClassComponentStoreClass';
import { CounterClassStateObject } from './apps/CounterClassStateObject/CounterClassStateObject';
import { AddStoreFCAsync } from './apps/AddStoreFCAsync/AddStoreFCAsync';
import { AddStoreCCAsync } from './apps/AddStoreCCAsync/AddStoreCCAsync';
import { CounterFCAsync } from './apps/CounterFCAsync/CounterFCAsync';
import { storeTodos } from './store/todos';
import { storePost }from './store/posts'
import { TodosFetchByMobx } from './apps/TodosFetch/TodosFetchByMobx';
import { PostFetchByMobx } from './apps/PostFetch/PostFetchByMobx';

function App() {
  return (
    <div className='main'>
      <CounterDisplay
        state={state}
        store={storeClass}
        storeAsync={storeAsync}
      />
      <div className='container'>
        <CounterFC state={state} />
        <CounterFCwhereStoreIsClass state={storeClass} />
        <CounterClassStateObject state={state} />
        <CounterClass state={storeClass} />
      </div>
      <div className='container'>
        <AddAnyNumber state={state} precision={Precision.ZERO} />
        <AddAnyNumberStoreClass
          state={storeClass}
          precision={Precision.THREE}
        />
        <AddAnyNumberClassComponent state={state} precision={Precision.TWO} />
        <AddAnyNumberClassComponentStoreClass
          state={storeClass}
          precision={Precision.ZERO}
        />
      </div>
      <div className='container'>
        <CounterClassDefaultExport state={storeClass} />
        <CounterFCAsync state={storeAsync} />
        <AddStoreFCAsync state={storeAsync} precision={Precision.THREE} />
        <AddStoreCCAsync state={storeAsync} precision={Precision.TWO} />
      </div>
      <div className='container'>
        <TodosFetchByMobx state={storeTodos}/>
        <PostFetchByMobx state={storePost}/>
      </div>
    </div>
  );
}

export default App;
