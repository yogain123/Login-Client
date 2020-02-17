import React, { Component } from "react";
import { connect } from "react-redux";
import { LogoutAction } from "./Redux/LoginAction";
class Home extends Component {
  componentDidMount() {
    if (!this.props.LoginDetails.isLoggedIn) {
      this.props.history.push(`/?preserved=${this.props.match.path}`);
    }
  }

  logout() {
    this.props.LogoutAction(() => {
      this.props.history.push("/");
    });
  }

  render() {
    return (
      <>
        <div class="container">
          <div>This is Dashboard</div>
          <button type="button" onClick={() => this.logout()}>
            Log out
          </button>
        </div>
      </>
    );
  }
}

function mapStateToProps(states) {
  return {
    LoginDetails: states.LoginReducer
  };
}

export default connect(mapStateToProps, { LogoutAction })(Home);
