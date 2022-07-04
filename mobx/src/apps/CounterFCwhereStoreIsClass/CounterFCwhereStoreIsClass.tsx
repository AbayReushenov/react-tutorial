import React from 'react';
import { observer } from 'mobx-react';
import { Store } from '../../Store/Store';

interface Props {
  state: Store;
}

export const CounterFCwhereStoreIsClass: React.FC<Props> = observer(({ state }) => {
  return (
    <div className='box'>
      <h1 className='red'>Functional component</h1>
      <h3 className='blue'>store - class</h3>
      <h3>Click to increase / decrease</h3>
      <div className='buttons'>
        <button className='button' onClick={()=>state.plus()}>
          +
        </button>
        <button className='button' onClick={()=>state.minus()}>
          -
        </button>
      </div>
    </div>
  );
});
