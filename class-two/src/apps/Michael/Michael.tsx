import React, { ChangeEvent, Component} from 'react';


// import Header from './Header';

interface Props{}
interface State{
  name:string
}
class Michael extends Component<Props,State> {

  constructor(props:Props) {
    super(props);
   this.state = {name: "Michael"}

  }
   changeTitle = (e: ChangeEvent<HTMLInputElement>) =>{
      this.setState({name: e.currentTarget.value});
    }

  render() {
    return (
      <div className="module">
        {/* <Header title={this.state.name}/> */}
        <h2 className='red'>NAME: {this.state.name}</h2>
        <p className="App-intro">
          Type here to change name.
        <input type="text" value={this.state.name} onChange={this.changeTitle}/>
        </p>
      </div>
    );
  }
}

export default Michael;
