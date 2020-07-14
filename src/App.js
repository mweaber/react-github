import React, { Component } from "react";
import "./App.css";
import Navbar from './components/layout/Navbar'

class App extends Component {
  render() {

    return (
      // If you have to create an element without using JSX:
        // React.createElement(
        //   'div', {className: 'App'}, React.createElement('h1', null, 'Hello from React')
        
      // Using JSX
      <div className="App">
        <Navbar/>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default App;
