import React from 'react';
import { date } from '../helpers/date';

interface Data {
  city: string;
  flag: string;
  bias: number;
}
interface State {
  date: Date;
}
interface FormattedObject {
  date: Date;
  flag: String;
}
type Formatted = React.FC<FormattedObject> ;
interface Props {
  data: Data;
  step: number;
  formatted: Formatted;
}

export class Clock extends React.Component<Props, State> {
  private timerID: NodeJS.Timer | undefined;
  public step: number;
  public state: {
    date: Date;
  };
  public data: Data;
  public formatted: Formatted;
  constructor(props: Props) {
    super(props);
    this.state = { date: date(props.data.bias) };
    this.data = props.data;
    this.step = props.step;
    this.formatted = props.formatted;
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), this.step);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: date(this.data.bias),
    });
  }

  render() {
    return (
      <div>
        <h1>{this.data.city}</h1>
        <this.formatted flag={this.data.flag} date={this.state.date} />
      </div>
    );
  }
}
