import React from "react";
import PropTypes from "prop-types";

const Navbar = ({ icon, title}) => {
  // Making a static defaultProps so that we can set the props for title and icon but that could be changed.
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </nav>
    );
}


Navbar.defaultProps = {
    title: "Github Finder",
    icon: "fab fa-github",
  };

  Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };

export default Navbar;
