import React from 'react';
import HeaderUI from './HeaderUI';

interface Props {}
interface State {
  favoritecolor: string;
}
export class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { favoritecolor: 'red' };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ favoritecolor: 'yellow' });
    }, 1000);
  }
  render() {
    return <HeaderUI favoritecolor={this.state.favoritecolor} />;
  }
}
