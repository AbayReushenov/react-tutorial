import React, { ChangeEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/count';
import { selectCount } from '../../store/count/selectors';
import { SwitchInputHeader } from './SwitchInputHeader';

enum Precision {
  ZERO = 0,
}

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector(selectCount);
  const [addNumber, setAddNumber] = useState('');
  const precision = Precision.ZERO;
  const pattern: string = `^[-]?[0-9]*[,.]?[0-9]{0,${precision}}`;
  const placeholder: string = String(Number(0).toFixed(precision));

  const handleIncrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.plusCount());
  const handleDecrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.minusCount());
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valid: boolean = event.currentTarget.validity.valid;
    console.log(event.currentTarget.value);
    if (valid) {
      const current = event.currentTarget.value.replace(/,/, '.');
      setAddNumber(current);
    }
  };
  const submitAdd = () => {
    const num = Number(addNumber);
    if (!isNaN(num) && num !== 0) {
      dispatch(actions.addSomeCount({ count: Number(addNumber) }));
      setAddNumber('');
    }
  };
  return (
    <div className='container'>
      <div className='box'>
        <h2>Count: {count}</h2>
        <div className='buttons'>
          <button className='button' onClick={handleIncrement()}>
            +
          </button>
          <button className='button' onClick={handleDecrement()}>
            -
          </button>
        </div>
        <div className='input'>
          <SwitchInputHeader addNumber={addNumber} />
          <input
            value={addNumber}
            onChange={handleChange}
            pattern={pattern}
            placeholder={placeholder}
          />

          <button
            className={
              Number(addNumber) === 0 || isNaN(Number(addNumber))
              ? 'button-hide'
              : 'button-submit'
            }
            onClick={submitAdd}
          >
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
