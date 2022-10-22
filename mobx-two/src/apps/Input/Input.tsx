import React, { ChangeEvent } from 'react';
import { auto } from '../common/helpers/placeholder';
import { Store as ClassState} from '../../Store/Store'

interface Props {
  store: ClassState;
}
interface State {
  currentCount: string;
}
export class Input extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { currentCount: this.props.store.count.toString() };
  }

  componentDidUpdate(): void {
    const num = Number(this.state.currentCount)
    
    if (num >= 8 && num <=30) {
        this.props.store.changeCount(num);
    } 
  }

  render() {
    return (
      <div className='box'>
        <h3>Enter any number</h3>
        <div className='input'>
          <input
            value={this.state.currentCount === this.props.store.countDefault.toString() ? '' : this.state.currentCount}
            onChange={this.handleChange}
            min="8"
            max="30"
            step="1"
            type="number"
            placeholder={auto}
            style={{ width: '80px' }}
            onBlur={(event: React.FocusEvent<HTMLInputElement, Element>) => console.log('===>', event.target.value)}
            onFocus={(event: React.FocusEvent<HTMLInputElement, Element>) => console.log('--> ', event.target.value)}
          />
        </div>
      </div>
    );
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      const currentCount = event.currentTarget.value;
      this.setState({ currentCount });
  };
}
