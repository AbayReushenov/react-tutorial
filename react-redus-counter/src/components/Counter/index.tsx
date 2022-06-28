import React, { ChangeEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../store/count';
import { selectCount } from '../../store/count/selectors';
import { SwitchInputHeader } from './SwitchInputHeader';
import { Precision } from './Precision';

export const Counter: React.FC = () => {
    const pattern: string = `^[-]?[0-9]*[,.]?[0-9]{0,${Precision.ZERO}}`;
    const placeholder: string = String(Number(0).toFixed(Precision.ZERO));
    
    const [addNumber, setAddNumber] = useState('');
    
  
    const onClassName = (addNumber: string): string | undefined => {
      return Number(addNumber) === 0 || isNaN(Number(addNumber))
        ? 'button-hide'
        : 'button-submit';
    };

  const count = useSelector(selectCount);

  const dispatch = useDispatch();
  const handleIncrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.plusCount());
  const handleDecrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      dispatch(actions.minusCount());
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valid: boolean = event.currentTarget.validity.valid;
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

          <button className={onClassName(addNumber)} onClick={submitAdd}>
            ok
          </button>
        </div>
      </div>
    </div>
  );
};
