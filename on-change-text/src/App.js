import React, { Component } from 'react';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
   this.state = {name: "Michael"}

  }
   changeTitle = (e) =>{
      this.setState({name: e.target.value});
    }

  render() {
    return (
      <div className="App">
        <h2 >{this.state.name}</h2>
        <p>
          Type here to change name: 
        <input type="text" value={this.name} onChange={this.changeTitle}/>
        </p>
      </div>
    );
  }
}

export default App;
