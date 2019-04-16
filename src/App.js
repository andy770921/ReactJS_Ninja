import React, { Component } from 'react';
import Ninjas from './ninjas';
import AddNinja from './AddNinja';

class App extends Component {
  state= {
    ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  };
  addArrayElement = (newNinja) => {
    newNinja.id = this.state.ninjas.length + 1;
    const newArray = [...this.state.ninjas, newNinja];
    this.setState(
      { ninjas : newArray }
    );
  };
  render() {
      return (
        <div className="App">
          <h1>hello</h1>
          <Ninjas ninjasArray = { this.state.ninjas } />
          <AddNinja addArrayElement = {this.addArrayElement}/>
        </div>
      );
  }
}

export default App;
