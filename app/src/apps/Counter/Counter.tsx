import React from 'react';
import { useDispatch } from 'react-redux';
import { actions } from '../../store/count';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const handleIncrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.plusCount());
  const handleDecrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.minusCount());

  return (
    <div className='box'>
      <h1 className='red'>Functional component</h1>
      <h1>Click to increase / decrease</h1>
      <div className='buttons'>
        <button className='button' onClick={handleIncrement()}>
          +
        </button>
        <button className='button' onClick={handleDecrement()}>
          -
        </button>
      </div>
    </div>
  );
};
