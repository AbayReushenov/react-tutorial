import React from 'react';
import { useSelector } from 'react-redux';
import { selectCount } from '../store/count/selectors';

export const CounterCurrentState = () => {
  const count = useSelector(selectCount);

  return (
    <div className='counter'>
      <h1>Counter {count}</h1>
    </div>
  );
};
