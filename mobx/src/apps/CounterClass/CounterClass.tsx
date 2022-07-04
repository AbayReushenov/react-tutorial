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
export class CounterClass extends React.Component<Props, State> {
  render(): React.ReactNode {
    const counter = this.props.state;
    const handlePlus = counter.plus.bind(counter)
    const handleMinus = counter.minus.bind(counter)
    return (
      <div className='box'>
        <h1 className='blue'>Class component</h1>
        <pre>
        <code>
          {`
class Store {
  count = 0;
  constructor() {
    makeObservable(this, {
      count: observable,
      isNegative: computed,
      plus: action,
      minus: action,
    });
  }
  get isNegative() {
    return this.count < 0 ? 'Yes' : 'No';
  }
  plus() {
    this.count += 1;
  }
  minus() {
    this.count -= 1;
  }
}
export const storeClass = new Store();
`}
        </code>
      </pre>
        <h1>Click to increase / decrease</h1>
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
