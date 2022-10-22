import React, { ChangeEvent } from 'react';
import { auto } from '../common/helpers/placeholder';
import { Store } from '../../Store/Store'

interface Props {
  store: Store;
}
interface State {
  addNumber: string;
}
export class InputNumber extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { addNumber: '' };
  }

  render() {
    return (
      <div className='box'>
        <h3>Enter any number</h3>
        <div className='input'>
          <input
            value={this.state.addNumber}
            type="number"
            onChange={this.handleChange}
            placeholder={auto}
            style={{ width: '80px' }}
          />

          <button
            className={this.onClassName(this.state.addNumber)}
            onClick={() => this.submitAdd(this.state.addNumber)}
          >
            ok
          </button>
        </div>
      </div>
    );
  }

  handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const valid: boolean = event.currentTarget.validity.valid;
    if (valid) {
      const current = event.currentTarget.value.replace(/,/, '.');
      this.setState({ addNumber: current });
    }
  };

  submitAdd = (addNumber: string) => {
    const num = Number(addNumber);
    if (!isNaN(num) && num !== 0) {
      this.props.store.changeCount( num);
      this.setState({ addNumber: '' });
    }
  };

  onClassName = (addNumber: string): string | undefined => {
    return Number(addNumber) === 0 || isNaN(Number(addNumber))
      ? 'button-hide'
      : 'button-submit';
  };
}
