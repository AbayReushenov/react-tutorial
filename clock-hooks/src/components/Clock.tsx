import React, { useEffect, useState } from 'react';
import { date as getDate } from '../helpers/date';

interface Data {
  city: string;
  flag: string;
  bias: number;
}

interface FormattedObject {
  date: Date;
  flag: String;
}
type Formatted = React.FC<FormattedObject>;
interface Props {
  data: Data;
  step: number;
  formatted: Formatted;
}

export const Clock: React.FC<Props> = ({ data, step, formatted }) => {
  const [date, setDate] = useState(getDate(data.bias));

  const tick = () => {
    setDate(getDate(data.bias));
  };
  useEffect(() => {
    const timerID = setInterval(() => tick(), step);
    return () => clearInterval(timerID);
  });
  const Formatted = formatted;

  return (
    <div>
      <h1>{data.city}</h1>
      <Formatted flag={data.flag} date={date} />
    </div>
  );
};
