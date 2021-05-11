import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import "../../App.css";
import "../../index.css";
class Nav extends Component {
  state = {
    open: false,
    width: window.innerWidth,
  };

  updateWidth = () => {
    const newState = { width: window.innerWidth };

    if (this.state.open && newState.width > 991) {
      newState.open = false;
    }

    this.setState(newState);
  };

  toggleNav = () => {
    this.setState({ open: !this.state.open });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-light">
        <div class="container-fluid">
          <div class="navbar-header">
            <Link
              className="fas fa-coins"
              style={{ color: "white", fontSize: "30px" }}
              to="/"
            >
              Crypto-Tracker
            </Link>
          </div>

          <ul className="nav navbar-nav">
            <li className="nav-item"></li>
            <li className="nav-item" id="left">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{
                  color: "white",
                  fontSize: "20px",
                  display: "inline-block",
                  textAlign: "center",
                }}
                to="/saved"
              >
                My Saved Coins
              </Link>
            </li>
            <li className="nav-item">
              <Link
                onClick={this.toggleNav}
                className={
                  window.location.pathname === "/saved"
                    ? "nav-link active"
                    : "nav-link"
                }
                style={{
                  color: "white",
                  fontSize: "20px",
                  textAlign: "relative",
                  display: "inline-block",
                }}
                to="/saved"
              >
                Log out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
