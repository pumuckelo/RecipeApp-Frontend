import React, { Component, Fragment } from "react";
import "./header.css";
class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="header">
          <div className="brand">
            <h3>
              Recipe App <i className="fas fa-pizza-slice"></i>
            </h3>
          </div>
          <div className="controls">
            <a href="/#">New Recipe</a>
            <a href="/#">Home</a>
            <a href="/#">About</a>
            <a href="/#">Contact us</a>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Header;
