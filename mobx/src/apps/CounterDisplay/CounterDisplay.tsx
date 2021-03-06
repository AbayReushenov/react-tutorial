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
  storeAsync: {
    count: number;
  };
};

export const CounterDisplay: React.FC<Props> = ({
  state,
  store,
  storeAsync,
}) => {
  return (
    <div className='counter'>
      <div className='header'>
        <h1>
          <Counter
            state={state}
            title={'state is object: '}
            className={'red'}
          />{' '}
          {`  <>  `}
          <Counter
            className={'blue'}
            title={'state is class: '}
            state={store}
          />{' '}
          {`  <>  `}
          <Counter
            className={'green'}
            title={'asyncstate: '}
            state={storeAsync}
          />
        </h1>
        <a
          href='https://github.com/AbayReushenov/react-tutorial/tree/main/mobx'
          target='_blank'
          rel='noreferrer'
        >
          github.com/AbayReushenov
        </a>
      </div>
    </div>
  );
};
