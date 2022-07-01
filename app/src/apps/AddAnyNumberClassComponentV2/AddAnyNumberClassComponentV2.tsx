import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from "redux";
import { addSomeCount } from  '../../store/count'
import { SwitchInputHeader } from '../common/components/SwitchInputHeader';
import { pattern } from '../common/helpers/pattern';
import { placeholder } from '../common/helpers/placeholder';
import { RootState } from '../../store';


interface Props {
  precision: number;
  dispatch: Dispatch;
}
interface State {
  addNumber: string;
}
class AddAnyNumberClassComponentV2 extends React.Component<Props, State> {
  precision: number;
  constructor(props: Props) {
    super(props);
    this.precision = props.precision;
    this.state = { addNumber: '' };
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
      this.props.dispatch(addSomeCount({ count: num }));
      this.setState({ addNumber: '' });
    }
  };

  onClassName = (addNumber: string): string | undefined => {
    return Number(addNumber) === 0 || isNaN(Number(addNumber))
      ? 'button-hide'
      : 'button-submit';
  };
  render() {
    return (
      <div className='box'>
         <h1 className='blue'>Class component, version 2</h1>
        <h1>Enter any number</h1>
        <div className='input'>
          <SwitchInputHeader addNumber={this.state.addNumber} />
          <input
            value={this.state.addNumber}
            onChange={this.handleChange}
            pattern={pattern(this.precision)}
            placeholder={placeholder(this.precision)}
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
}

const mapStateToProps = (state: RootState) => ({
  count: state.count.count,
});
export default connect(
  mapStateToProps,
)(AddAnyNumberClassComponentV2);
