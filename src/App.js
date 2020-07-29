import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/layout/Navbar";
import User from './components/users/User';
import Home from './components/pages/Home'
import About from "./components/pages/About"
import NotFound from './components/pages/NotFound'
import Alert from "./components/layout/Alert";

import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

// Reminder to remove all this.state//this.props from any lines below when using the useState hooks.

// Also reminder to add const to all methods being called since they are no longer inside a class.

// Refactored to the Context/Reducer hooks. See each context folder to see the methods we use there and the actions we dispatch.

const App = () => {
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert />
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About} />
                <Route exact path='/user/:login' component={User} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  );

}

export default App;


// Original App class component:

// class App extends Component {
//   state = {
//     users: [],
//     loading: false,
//     alert: null,
//     user: {},
//     repos: []
//   };

//   // Search for a user
//   searchUsers = async (text) => {
//     this.setState({ loading: true });

//     const res = await axios.get(
//       `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );

//     this.setState({ users: res.data.items, loading: false });
//   };

//   // Get a single user
//   getUser = async (username) => {
//     this.setState({ loading: true });

//     const res = await axios.get(
//       `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );

//     this.setState({ user: res.data, loading: false });
//   }

//   // get users repos
//   getUserRepos = async username => {
//     this.setState({ loading: true });

//     const res = await axios.get(
//       `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
//     );

//     this.setState({ repos: res.data, loading: false });
//   }
//   // A method to setState to clear users from the state
//   // It is called down on the Search component but passed up from the Search.js component as props.
//   clearUsers = () => {
//     this.setState({ users: [], loading: false });
//   };

//   // Sets an alert when no text in search
//   setAlert = (msg, type) => {
//     this.setState({ alert: { msg: msg, type: type } });

//     setTimeout(() => this.setState({ alert: null }), 5000);
//   };

//   render() {
//     const { users, loading, user, repos } = this.state;

//     return (
//       <Router>
//         <div className="App">
//           <Navbar />
//           <div className="container">
//             <Alert alert={this.state.alert} />
//             <Switch>
//               <Route
//                 exact
//                 path="/"
//                 render={(props) => (
//                   <Fragment>
//                     <Search
//                       searchUsers={this.searchUsers}
//                       clearUsers={this.clearUsers}
//                       showClear={users.length > 0 ? true : false}
//                       setAlert={this.setAlert}
//                     />
//                     <Users loading={loading} users={users} />
//                   </Fragment>
//                 )}
//               />             
//               <Route exact path= "/about" component={About} />
//               <Route exact path= '/user/:login' render={props => (
//                 <User {...props} getUser={this.getUser} user={user} loading={loading} getUserRepos={this.getUserRepos} repos={repos}/>
//               )}/>
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }