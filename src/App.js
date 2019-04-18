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
    //newNinja.id = Date.now();
    newNinja.id = this.state.ninjas.length + 1;
    let newArray = [...this.state.ninjas, newNinja];
    this.setState(
      { ninjas : newArray }
    );   
  };

  deleteArrayElement = (id) => {
    let deletedArray = this.state.ninjas.filter( element => {
      return element.id !== id;
    });
    this.setState(
      { ninjas : deletedArray }
    );
  };

  render() {
      return (
        <div className="App">
          <h1>hello</h1>
          <Ninjas deleteNinja = {this.deleteArrayElement} ninjasArray = { this.state.ninjas } />
          <AddNinja addArrayElement = {this.addArrayElement}/>
        </div>
      );
  }
}

export default App;
