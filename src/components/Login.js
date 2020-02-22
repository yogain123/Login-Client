import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { LoginAction } from "../redux/Actions/LoginAction";
import { connect } from "react-redux";
import qp from "query-parse";
function Login(props) {
  const [submit, setSubmit] = useState("Submit");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const emailRef = React.createRef();

  const onSubmit = event => {
    event.preventDefault();
    setSubmit(<div class="spinner-border"></div>);
    let query = qp.toObject(props.location.search.substring(1));
    let pathing = query.preserved || `/home?email=${email}`;
    props.LoginAction(email, password, response => {
      props.history.push(pathing);
    });
  };

  useEffect(() => {
    emailRef.current.focus();
    if (props.LoginDetails.isLoggedIn) {
      props.history.push("/dashboard");
    }
  }, []);

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
                    ref={emailRef}
                    type="text"
                    name="username"
                    id="username"
                    className="form-control"
                    onChange={event => setEmail(event.target.value)}
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
                    onChange={event => setPassword(event.target.value)}
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
                    value={submit}
                    onClick={event => onSubmit(event)}
                  >
                    {submit}
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

function mapStateToProps(states, ownProps) {
  console.log({ states, ownProps });
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps, { LoginAction })(Login);
