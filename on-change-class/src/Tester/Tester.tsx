import React, { ChangeEvent, Component } from 'react';

export class Tester extends Component {
  num: string;
  constructor(props: {}) {
    super(props);
    this.num = '';
  }
  handleOnChange=(e: ChangeEvent<HTMLInputElement>) => {
      this.setState({ num: e.currentTarget.value });
    }
  
  render() {
    return (
      <div>
        <h1>Tester {this.num}</h1>
        <hr />
        <input
          value={this.num}
          onChange={this.handleOnChange}
          type='text'
        />
      </div>
    );
  }
}
