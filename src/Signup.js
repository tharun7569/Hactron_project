import React, { Component } from 'react';

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      isSignup: false,
    };
  }

  handleSignupClick = () => {
    this.setState({ isSignup: true });
  };

  handleLoginClick = () => {
    this.setState({ isSignup: false });
  };

  render() {
    const { isSignup } = this.state;

    return (
      <div className="container">
        <div className={`slider${isSignup ? ' moveslider' : ''}`}></div>
        <div className="btn">
          <button className={!isSignup ? 'login active' : 'login'} onClick={this.handleLoginClick}>
            Login
          </button>
          <button className={isSignup ? 'signup active' : 'signup'} onClick={this.handleSignupClick}>
            Signup
          </button>
        </div>

        <div className={`form-section${isSignup ? ' form-section-move' : ''}`}>
          <div className="login-box">
            <input
              type="email"
              className="email ele"
              placeholder="youremail@email.com"
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
            />
            <button className="clkbtn">Login</button>
          </div>

          <div className="signup-box">
            <input
              type="text"
              className="name ele"
              placeholder="Enter your name"
            />
            <input
              type="email"
              className="email ele"
              placeholder="youremail@email.com"
            />
            <input
              type="password"
              className="password ele"
              placeholder="password"
            />
            <input
              type="password"
              className="password ele"
              placeholder="Confirm password"
            />
            <button className="clkbtn">Signup</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
