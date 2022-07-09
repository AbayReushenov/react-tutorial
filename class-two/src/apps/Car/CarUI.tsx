import React from 'react';

type Props = {
  data: {
    brand: string;
    model: string;
    color: string;
    year: number;
  };
  changeColor: () => void
};
type State = {};
export class CarUI extends React.Component<Props, State> {
  render() {
    const { brand, color, model, year } = this.props.data;
    const changeColor = this.props.changeColor
    return (
      <div>
        <h1>My {brand}</h1>
        <p>
          It is a {color} {model} from {year}.
        </p>
        <button type='button' onClick={changeColor}>
          Change color
        </button>
      </div>
    );
  }
}
