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

class CounterClassDefaultExport extends React.Component<Props, State> {
  render(): React.ReactNode {
    const counter = this.props.state;
    const handlePlus = counter.plus.bind(counter)
    const handleMinus = counter.minus.bind(counter)
    return (
      <div className='box'>
        <h1 className='blue'>Export default observer(Class component)</h1>
        <pre>
        <code>
          {`
export 
default observer(CounterClassDefaultExport)
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
export default observer(CounterClassDefaultExport)
