import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";

class App extends Component {
  state = {
    users: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({loading: true})
    const res = await axios.get("https://api.github.com/users");
    
    this.setState({users: res.data, loading: false})
  }

  render() {
    return (
      // If you have to create an element without using JSX:
      // React.createElement(
      //   'div', {className: 'App'}, React.createElement('h1', null, 'Hello from React')

      // Using JSX
      <div className="App">
        <Navbar />
        <div className="container">
          <Users loading={this.state.loading} users={this.state.users}/>
        </div>
      </div>
    );
  }
}

export default App;
