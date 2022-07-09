import React from 'react';

interface Props {}
interface State {
  value: boolean;
  countOfClicks: number;
}
export class ExplainShoudComponentUpdate extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: true,
      countOfClicks: 0,
    };
    this.pickRandom = this.pickRandom.bind(this);
  }

  pickRandom() {
    this.setState({
      value: Math.random() > 0.5, // randomly picks true or false
      countOfClicks: this.state.countOfClicks + 1,
    });
  }

  // comment out the below to re-render on every click
  shouldComponentUpdate(nextProps: Props, nextState: State) {
    const update = this.state.value !== nextState.value;
    return update;
  }

  render() {
    return (
      <div className='module'>
        <hr />
        <h2>shouldComponentUpdate demo</h2>

        <p className='red'>
          Если value: <b>{this.state.value.toString()}</b> не изменилось , то
          UI не обновляется
        </p>

        <p>
          Count of clicks: <b>{this.state.countOfClicks}</b>
        </p>
        <button onClick={this.pickRandom}>
          Click to randomly select: true or false
        </button>
        <hr />
      </div>
    );
  }
}
