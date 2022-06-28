import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import { addSomeCount, CountState } from '../store/count';
import { SwitchInputHeader } from '../common/components/SwitchInputHeader';
import { pattern } from '../common/helpers/pattern';
import { placeholder } from '../common/helpers/placeholder';
import { RootState } from '../store';

interface Props {
  precision: number;
  addSomeCount: (action: CountState) => void;
}
interface State {
  addNumber: string;
}
class AddAnyNumberClassComponent extends React.Component<Props, State> {
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
      console.log(current);
      this.setState({ addNumber: current });
    }
  };

  submitAdd = (addNumber: string) => {
    console.log(' --', addNumber);
    const num = Number(addNumber);
    if (!isNaN(num) && num !== 0) {
      this.props.addSomeCount({ count: num });
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
         <h1 className='blue'>Class component</h1>
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
const mapDispatchToProps = { addSomeCount };
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddAnyNumberClassComponent);
