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
      <pre>
        <code>
          {`
const state = observable({
  count: 0,
  plus: action('increment', () => {
    state.count += 1;
  }),
  minus: action('decrement', () => {
    state.count -= 1;
  }),
});
`}
        </code>
      </pre>
      <h1>Click to increase / decrease</h1>
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
