import { Precision } from './Precision';

export const pattern = (precision: number = Precision.ZERO) =>
  `^[-]?[0-9]*[,.]?[0-9]{0,${precision}}`;
