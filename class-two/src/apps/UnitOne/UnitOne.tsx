import React, { Component } from 'react';
import UnitOneOne from './UnitOneOne/UnitOneOne';

interface Props {}
interface State {
  unitOneOne: string;
}
export default class UnitOne extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {unitOneOne: 'unitOneOne test'};
  }
  handleChange = (e: { target: { value: any } }) => {
    console.log(e.target.value);
    this.setState(prev=>({...prev, unitOneOne: e.target.value}))
  };
  render() {
    return (
      <div className='module blue'>
        <div>UnitOne</div>
        <p className='red'>текст: {this.state.unitOneOne}</p>
        <input value={this.state.unitOneOne} onChange={this.handleChange} />
        <UnitOneOne unitOneOne={this.state.unitOneOne}/>
      </div>
    );
  }
}
