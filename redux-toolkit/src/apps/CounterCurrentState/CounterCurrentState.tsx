import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../../store/count/selectors';

export const CounterCurrentState = () => {
  const count = useSelector(selectCount);

  return (
    <div className='counter'>
      <div className='header'>
        <h1>Counter {count}</h1>
        <a
          href='https://github.com/AbayReushenov/react-tutorial/tree/main/redux-toolkit'
          target='_blank'
          rel='noreferrer'
        >
          github.com/AbayReushenov
        </a>
      </div>
    </div>
  );
};
