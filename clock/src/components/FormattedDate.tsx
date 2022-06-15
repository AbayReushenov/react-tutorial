import React from 'react';
interface Props {
  date: Date;
  flag: String;
}

export const FormattedDate: React.FC<Props> = ({ date, flag }) => {

  return (
    <h2>
      {flag} {date.toLocaleTimeString()}
    </h2>
  );
};
