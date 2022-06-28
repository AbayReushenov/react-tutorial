interface Props {
  addNumber: string;
}

export const SwitchInputHeader: React.FC<Props> = ({ addNumber }) => {
  const num: number | undefined = Number(addNumber);
  return (
    <h3>
      {isNaN(num) || num === 0
        ? 'Enter the number'
        : num > 0
        ? 'plus'
        : 'minus'}
    </h3>
  );
};
