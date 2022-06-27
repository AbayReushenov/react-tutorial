import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/count';
import { selectCount } from '../../store/count/selectors';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [addNumber, setAddNumber] = useState('');
  return (
    <div className='container'>
      <div className='box'>
        <h2>Count: {count}</h2>
        <div className='buttons'>
          <button
            className='button'
            onClick={() => dispatch(actions.plusCount())}
          >
            +
          </button>
          <button
            className='button'
            onClick={() => dispatch(actions.minusCount())}
          >
            -
          </button>
        </div>
        <div className='input'>
          <span>
            {Number(addNumber) > 0
              ? 'Добавить'
              : Number(addNumber) < 0
              ? 'Отнять'
              : 'Ввведите число '}
          </span>
          <input
            value={addNumber}
            onChange={(e: React.FormEvent<HTMLInputElement>) => {
              const num = parseInt(e.currentTarget.value);
              if (!isNaN(num)) {
                setAddNumber(num.toString());
              }
            }}
            type='number'
          />

          <button
            className={
              Number(addNumber) !== 0 ? 'button-submit' : 'button-hide'
            }
            onClick={() => {
              if (Number(addNumber) !== 0) {
                dispatch(actions.addSomeCount({ count: Number(addNumber) }));
                setAddNumber('');
              }
            }}
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
