import React from 'react';
import { observer } from 'mobx-react';

interface Props {
  state: {
    plus: () => void;
    minus: () => void;
  };
}

export const CounterFC: React.FC<Props> = observer(({ state }) => {
  return (
    <div className='box'>
      <h1 className='red'>Functional component</h1>
      <h3 className='red'>state - object</h3>
      <h3>Click to increase / decrease</h3>
      <div className='buttons'>
        <button className='button' onClick={state.plus}>
          +
        </button>
        <button className='button' onClick={state.minus}>
          -
        </button>
      </div>
    </div>
  );
});
