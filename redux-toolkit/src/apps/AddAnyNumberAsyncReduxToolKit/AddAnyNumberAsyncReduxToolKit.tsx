import React, { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCountAsyncTwo } from '../../store/count/addCountAsyncTwo';
import { SwitchInputHeader } from '../common/components/SwitchInputHeader';
import { pattern } from '../common/helpers/pattern';
import { placeholder } from '../common/helpers/placeholder';
import { Precision } from '../common/helpers/Precision';
import { AppDispatch } from '../../store';
interface Props {
  precision: number;
}

export const AddAnyNumberAsyncReduxToolKit: React.FC<Props> = ({
  precision = Precision.ZERO,
}) => {
  const [addNumber, setAddNumber] = useState<string>('');
  const dispatch = useDispatch<AppDispatch>();


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const valid: boolean = event.currentTarget.validity.valid;
    if (valid) {
      const current = event.currentTarget.value.replace(/,/, '.');
      setAddNumber(current);
    }
  };

  const submitAdd = (addNumber: string) => {
    const num = Number(addNumber);
    if (!isNaN(num) && num !== 0) {
      dispatch(addCountAsyncTwo({ count: Number(addNumber) }));
      setAddNumber('');
    }
  };

  const onClassName = (addNumber: string): string | undefined => {
    return Number(addNumber) === 0 || isNaN(Number(addNumber))
      ? 'button-hide'
      : 'button-submit';
  };

  return (
    <div className='box'>
       <h1 className='red'>Async created by AsyncThunk</h1>
      <h1>Enter any number</h1>
      <div className='input'>
        <SwitchInputHeader addNumber={addNumber} />
        <input
          value={addNumber}
          onChange={handleChange}
          pattern={pattern(precision)}
          placeholder={placeholder(precision)}
          style={{ width: '80px' }}
        />

        <button
          className={onClassName(addNumber)}
          onClick={() => submitAdd(addNumber)}
        >
          ok
        </button>
      </div>
    </div>
  );
};
