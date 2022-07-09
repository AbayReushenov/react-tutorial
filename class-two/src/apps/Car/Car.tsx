import React from 'react';
import { CarUI } from './CarUI';

type Props = {};
type State = {
  brand: string;
  model: string;
  color: string;
  year: number;
};
export class Car extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      brand: 'Ford',
      model: 'Mustang',
      color: 'red',
      year: 1964,
    };
  }
  changeColor = () => {
    this.setState((prevState) => ({
      ...prevState,
      color: 'blue',
    }));
  };
  render() {
    return <CarUI data={this.state} changeColor={this.changeColor} />;
  }
}
