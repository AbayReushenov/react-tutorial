import React from 'react';

interface Props {
  useArrowToShowThisOrThisState: string
  onClickMe: () => void;
}
interface State {}
export default class ExplainBindingsComponentUI extends React.Component<
  Props,
  State
> {
  render() {
    const onClickMe = this.props.onClickMe
    return (
      <div className='module'>
        <hr />
        <a href="https://stackoverflow.com/questions/50297676/react-binding-this-to-a-class-method">react-binding-this-to-a-class-method</a>
        <h1>{this.props.useArrowToShowThisOrThisState}</h1>
      <button className='red' onClick={onClickMe} type='button'>
        Click Me
      </button>

      </div>
    );
  }
}
