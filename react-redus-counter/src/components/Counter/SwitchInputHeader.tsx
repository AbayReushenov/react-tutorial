interface Props {
  addNumber: string;
}

export const SwitchInputHeader: React.FC<Props> = ({ addNumber }) => {
  const num: number | undefined = Number(addNumber);
  return (
    <span>
      {isNaN(num) || num === 0
        ? 'Ввведите число '
        : num > 0
        ? 'Добавить'
        : 'Отнять'}
    </span>
  );
};
