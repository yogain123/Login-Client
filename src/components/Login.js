import React, { Component } from "react";
import { Link } from "react-router-dom";
import { LoginAction } from "../redux/Actions/LoginAction";
import { connect } from "react-redux";
import qp from "query-parse";

class Login extends Component {
  state = { submit: "Submit", mail: "", password: "" };
  emailRef = React.createRef();

  async onSubmit(event) {
    event.preventDefault();
    this.setState({ submit: <div class="spinner-border"></div> });
    let query = qp.toObject(this.props.location.search.substring(1));
    let pathing = query.preserved || `/home?email=${this.state.email}`;
    this.props.LoginAction(this.state.email, this.state.password, response => {
      this.props.history.push(pathing);
    });
  }

  componentDidMount() {
    this.emailRef.current.focus();
    if (this.props.LoginDetails.isLoggedIn) {
      this.props.history.push("/dashboard");
    }
  }

  render() {
    return (
      <div id="login">
        <h3 className="text-center text-info pt-5">Login</h3>
        <div className="container">
          <div
            id="login-row"
            className="row justify-content-center align-items-center"
          >
            <div id="login-column" className="col-md-6">
              <div id="login-box" className="col-md-12">
                <form id="login-form" className="form">
                  <div className="form-group">
                    <label htmlFor="username" className="text-info">
                      Email:
                    </label>
                    <br />
                    <input
                      ref={this.emailRef}
                      type="text"
                      name="username"
                      id="username"
                      className="form-control"
                      onChange={event =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password" className="text-info">
                      Password:
                    </label>
                    <br />
                    <input
                      type="text"
                      name="password"
                      id="password"
                      className="form-control"
                      onChange={event =>
                        this.setState({ password: event.target.value })
                      }
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="remember-me" className="text-info">
                      <span>Remember me</span> 
                      <span>
                        <input
                          id="remember-me"
                          name="remember-me"
                          type="checkbox"
                        />
                      </span>
                    </label>
                    <br />
                    <button
                      type="submit"
                      name="submit"
                      className="btn btn-info btn-md"
                      value={this.state.submit}
                      onClick={event => this.onSubmit(event)}
                    >
                      {this.state.submit}
                    </button>
                  </div>
                  <div id="register-link" className="text-right">
                    <Link to="/Register" className="text-info">
                      Register here
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(states) {
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps, { LoginAction })(Login);
