import React, { useState } from "react";
import PropTypes from "prop-types";

// Here we pulled out the props that we were calling in methods which allows us to remove any this.props._____ from inside our component. Allows cleaner code and easier to ready code. We also no longer use this.setState see examples below.

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {

  // The way useState works is we destructure, we pull out text (or whatever we want to call this piece of state), and then we create a method to change the state, usually you want to name it set and whatever the state is named, then we set that equal to useState() and add whatever we want to pass as the default value in the args.

  // Ex: const [someState, setSomeState] = useState(default of the state);
  const [text, setText] = useState("");

  // We've removed any this.state or this.props since we destructured this component. We also now call the setText method we defined in the useState hook. 
  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setAlert("Please enter a search", "light");
    } else {
      searchUsers(text);
      setText("");
    }
  };

  // When using the useState hook we no longer use this.setState what we do is call the method we defined in the state (i.e. setText)
  const onChange = (e) => setText(e.target.value);

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users...."
          // No longer using this.state now that we've moved to useState
          value={text}
          // No longer using a class so we call the methods.
          onChange={onChange}
        />
        <input
          type="submit"
          value="Search"
          className="btn btn-dark btn-block"
        />
      </form>
      {showClear && (
        <button className="btn btn-light btn-block" onClick={clearUsers}>
          Clear
        </button>
      )}
    </div>
  )
}

// We move propTypes to below the function and define them here.
Search.propTypes = {
  searchUsers: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired,
  showClear: PropTypes.bool.isRequired,
  setAlert: PropTypes.func.isRequired,
};

// Export does not change.
export default Search;




// The class component is below for reference: 

// export class Search extends Component {
//   state = {
//     text: "",
//   };

//   static propTypes = {
//     searchUsers: PropTypes.func.isRequired,
//     clearUsers: PropTypes.func.isRequired,
//     showClear: PropTypes.bool.isRequired,
//     setAlert: PropTypes.func.isRequired,
//   };

//   onChange = (e) => this.setState({ text: e.target.value });
//   onSubmit = (e) => {
//     e.preventDefault();
//     if (this.state.text === "") {
//       this.props.setAlert("Please enter a search", "light");
//     } else {
//       this.props.searchUsers(this.state.text);
//       this.setState({ text: "" });
//     }
//   };

//   render() {
//     const { showClear, clearUsers } = this.props;
//     return (
//       <div>
//         <form className="form" onSubmit={this.onSubmit}>
//           <input
//             type="text"
//             name="text"
//             placeholder="Search Users...."
//             value={this.state.text}
//             onChange={this.onChange}
//           />
//           <input
//             type="submit"
//             value="Search"
//             className="btn btn-dark btn-block"
//           />
//         </form>
//         {showClear && (
//           <button className="btn btn-light btn-block" onClick={clearUsers}>
//             Clear
//           </button>
//         )}
//       </div>
//     );
//   }
// }
