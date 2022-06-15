import React from 'react';
interface Props {
  date: Date;
  flag: String;
}

export const FormattedDateMicroSeconds: React.FC<Props> = ({ date, flag }) => {
  const time = date.toLocaleTimeString()
  const shortTime = time.slice(0, time.length - 3)
  const afterPast =  time.slice(time.length - 3)
  const microseconds = date.getMilliseconds().toString().padStart(3,'0')[0]

  return (
    <h2>
      {flag} {shortTime}:{microseconds}{afterPast}
    </h2>
  );
};
