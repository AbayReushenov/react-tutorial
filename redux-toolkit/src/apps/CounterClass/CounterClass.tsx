import React from 'react';
import { connect } from 'react-redux';
import { RootState } from '../../store';
import { minusCount, plusCount } from '../../store/count';

interface Props {
  plusCount: () => void;
  minusCount: () => void;
}
interface State {}

class CounterClass extends React.Component<Props, State> {
  handleIncrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      this.props.plusCount();
  handleDecrement =
    (): React.MouseEventHandler<HTMLButtonElement> | undefined => () =>
      this.props.minusCount();

  render() {
    return (
      <div className='box'>
        <h1 className='blue'>Class component</h1>
        <h1>Click to increase / decrease</h1>
        <div className='buttons'>
          <button className='button' onClick={this.handleIncrement()}>
            +
          </button>
          <button className='button' onClick={this.handleDecrement()}>
            -
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  count: state.count.count,
});
const mapDispatchToProps = { plusCount, minusCount };
export default connect(mapStateToProps, mapDispatchToProps)(CounterClass);
