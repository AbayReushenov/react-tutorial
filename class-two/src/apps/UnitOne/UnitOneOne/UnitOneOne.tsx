import React, { Component } from 'react';

interface Props {
  unitOneOne: string;
}
interface State {}
export default class UnitOneOne extends Component<Props, State> {
  render() {
    return (
      <div className='inner green'>
        <h3>Текст в модуле "UnitOneOne"</h3>
        <h3>{this.props.unitOneOne}</h3>
      </div>
    );
  }
}
