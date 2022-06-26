import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  state: {
    count: number;
    plus: () => void;
    minus: () => void;
  };
};

export const Counter: React.FC<Props> = observer(({ state }) => {
  return (
    <div className='box'>
      <h2>{state.count}</h2>
      <div className='buttons'>
        <button onClick={state.plus}>Inc Counter</button>
        <button onClick={state.minus}>Dec Counter</button>
      </div>
    </div>
  );
});
