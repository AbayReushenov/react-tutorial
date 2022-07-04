/**
 * https://reactjsexample.com/mobx-react-simple-counter-principle-class-decorator-stateless-function/
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
 */
import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  state: {
    plus: () => void;
    minus: () => void;
  };
};
type State = {};

@observer
export class CounterClassStateObject extends React.Component<Props, State> {
  render(): React.ReactNode {
    const counter = this.props.state;
    const handlePlus = counter.plus.bind(counter)
    const handleMinus = counter.minus.bind(counter)
    return (
      <div className='box'>
        <h1 className='blue'>Class <br/>component</h1>
        <h3 className='red'>state - object</h3>
        <h3>Click to increase / decrease</h3>
        <div className='buttons'>
          <button className='button' onClick={handlePlus}>
            +
          </button>
          <button className='button' onClick={handleMinus}>
            -
          </button>
        </div>
      </div>
    );
  }
}
