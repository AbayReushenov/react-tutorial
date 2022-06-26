/**
 * https://reactjsexample.com/mobx-react-simple-counter-principle-class-decorator-stateless-function/
 * https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/class_components/
 */
import React from 'react';
import { observer } from 'mobx-react';

type Props = {
  state: {
    count: number;
    isNegative: string;
    plus: () => void;
    minus: () => void;
  };
};
type State = {};

class CounterClassDefault extends React.Component<Props, State> {
  render(): React.ReactNode {
    const counter = this.props.state;
    return (
      <div className='box'>
        <h2>{counter.count}</h2>
        <hr />
        Is negative? {counter.isNegative}
        <hr />
        <button onClick={counter.plus.bind(counter)}>Inc Counter</button>
        <button onClick={counter.minus.bind(counter)}>Dec Counter</button>
      </div>
    );
  }
}
export default observer(CounterClassDefault);
