import React from "react";
import PropTypes from 'prop-types'


// class UserItem extends Component {

//   render() {
//       const {login, avatar_url, html_url} = this.props.user
//     return (
//       <div className="card text-center">
//         <img
//           className="round-img"
//           style={{ width: "60px" }}
//           src={avatar_url}
//           alt="img"
//         />
//         <h3>{login}</h3>
//         <div>
//           <a href={html_url} className="btn btn-dark btn-sm my-1">
//             More
//           </a>
//         </div>
//       </div>
//     );
//   }
// }

// export default UserItem;

const UserItem = ({user: {login, avatar_url, html_url}}) => {
  return (
    <div className="card text-center">
      <img
        className="round-img"
        style={{ width: "60px" }}
        src={avatar_url}
        alt="img"
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
}

export default UserItem;
