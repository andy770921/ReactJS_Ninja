import React, { Component } from 'react';
import Ninjas from './ninjas';

class App extends Component {
  render() {
      return (
        <div className="App">
          <h1>hello</h1>
          <Ninjas name="ANDY" age="18" belt="black"/>
        </div>
      );
  }
}

export default App;
