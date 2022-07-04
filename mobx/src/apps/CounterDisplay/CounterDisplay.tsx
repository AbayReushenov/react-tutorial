import React from 'react';

import { Counter } from './Counter';

type Props = {
  state: {
    count: number;
  };
  store: {
    count: number;
    isNegative: string;
  };
};

export const CounterDisplay: React.FC<Props> = ({ state, store }) => {
  return (
    <div className='counter'>
      <div className='header'>
        <h1>
          Counters: <Counter state={state} title={"state is object: "} className={'red'} /> {`  <>  `}
          <Counter className={'blue'}  title={"state is class: "} state={store} />
        </h1>
      </div>
    </div>
  );
};
