import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from '../repos/Repos';
import PropTypes from "prop-types";

const User = ({ user, loading, getUser, getUserRepos, match, repos }) => {

  //For useEffect you pass in an arrow function, you don't want to return anything directly. You'll open a set of {} and you run your methods there.
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, [])

  // After the open {} if you leave as is it will call the method on a continual loop, the reason is that useEffect is used for different things, it can be used in place of mulitple updates. We stop that loop is by adding an empty set of [] as shown above. 

  // The empty [] will mimic a componentDidMount() and runs the method once. 

  // The [] would be for any dependencies that you have for the methods which the React team would say you should always have.

// `````````````````````````````````````````````````````````````````````````

  // Left as is just removed this.props.user and simply called user since we destructured it above.
  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
  } = user;

  if (loading) {
    return <Spinner />;
  }

  return (
    <Fragment>
      <Link to="/" className="btn btn-light">
        Back to search
        </Link>
        Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success" />
      ) : (
          <i className="fas -fa-times-circle text-danger" />
        )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            className="round-img"
            src={avatar_url}
            alt="user"
            style={{ width: "150px" }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark my-1">
            Visit Profile
            </a>
          <ul>
            <li>
              {login && (
                <Fragment>
                  <strong>Username: </strong> {login}
                </Fragment>
              )}
            </li>
            <li>
              {company && (
                <Fragment>
                  <strong>Company: </strong> {company}
                </Fragment>
              )}
            </li>
            <li>
              {blog && (
                <Fragment>
                  <strong>Website: </strong> {blog}
                </Fragment>
              )}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      <Repos repos={repos} />
    </Fragment>
  );

}

// Proptypes moves to outside the function.
User.propTypes = {

  getUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  getUserRepos: PropTypes.func.isRequired,
  repos: PropTypes.array.isRequired,

}

export default User;


// Original class component for reference: 

 // componentDidMount() {
  //   this.props.getUser(this.props.match.params.login);
  //   this.props.getUserRepos(this.props.match.params.login);

  // }

  // static propTypes = {
  //   getUser: PropTypes.func.isRequired,
  //   user: PropTypes.object.isRequired,
  //   loading: PropTypes.bool,
  //   getUserRepos: PropTypes.func.isRequired,
  //   repos: PropTypes.array.isRequired,
  // };

  // render() {
  //   const {
  //     name,
  //     avatar_url,
  //     location,
  //     bio,
  //     blog,
  //     company,
  //     login,
  //     html_url,
  //     followers,
  //     following,
  //     public_repos,
  //     public_gists,
  //     hireable,
  //   } = this.props.user;

  //   const { loading, repos } = this.props;

  //   if (loading) {
  //     return <Spinner />;
  //   }

  //   return (
  //     <Fragment>
  //       <Link to="/" className="btn btn-light">
  //         Back to search
  //       </Link>
  //       Hireable:{" "}
  //       {hireable ? (
  //         <i className="fas fa-check text-success" />
  //       ) : (
  //         <i className="fas -fa-times-circle text-danger" />
  //       )}
  //       <div className="card grid-2">
  //         <div className="all-center">
  //           <img
  //             className="round-img"
  //             src={avatar_url}
  //             alt="user"
  //             style={{ width: "150px" }}
  //           />
  //           <h1>{name}</h1>
  //           <p>Location: {location}</p>
  //         </div>
  //         <div>
  //           {bio && (
  //             <Fragment>
  //               <h3>Bio</h3>
  //               <p>{bio}</p>
  //             </Fragment>
  //           )}
  //           <a href={html_url} className="btn btn-dark my-1">
  //             Visit Profile
  //           </a>
  //           <ul>
  //             <li>
  //               {login && (
  //                 <Fragment>
  //                   <strong>Username: </strong> {login}
  //                 </Fragment>
  //               )}
  //             </li>
  //             <li>
  //               {company && (
  //                 <Fragment>
  //                   <strong>Company: </strong> {company}
  //                 </Fragment>
  //               )}
  //             </li>
  //             <li>
  //               {blog && (
  //                 <Fragment>
  //                   <strong>Website: </strong> {blog}
  //                 </Fragment>
  //               )}
  //             </li>
  //           </ul>
  //         </div>
  //       </div>
  //       <div className="card text-center">
  //         <div className="badge badge-primary">Followers: {followers}</div>
  //         <div className="badge badge-success">Following: {following}</div>
  //         <div className="badge badge-light">Public Repos: {public_repos}</div>
  //         <div className="badge badge-dark">Public Gists: {public_gists}</div>
  //       </div>
  //       <Repos repos={repos} />
  //     </Fragment>
  //   );
  // }