import React, { Component} from 'react';

type Props = {}
type State = {  
    name: string
}
class TesterTwo extends Component<Props, State> {
  constructor(props:Props) {
    super(props);
   this.state = {name: "Michael"}

  }
   changeTitle = (e:any) =>{
      this.setState({name: e.currentTarget.value});
    }

  render() {
    return (
      <div>
        <h3>
          {this.state.name}
          </h3> 
        <p className="App-intro">
          Type here to change name: 
        <input type="text" onChange={this.changeTitle} />
        </p>
      </div>
    );
  }
}

export default TesterTwo;
